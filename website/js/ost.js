function playSpcFile(name) {
    SMWCentral.SPCPlayer.loadFromLink(document.getElementById(name));
}

function formatDuration(seconds) {
    const m = Math.floor(seconds / 60);
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
}

function populateRows(songs, ostName) {
    const $tbody = $("#song-entries");
    $tbody.empty();

    var playImg = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-play-circle-fill play-img" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/></svg>`;

    $.each(songs, function (_, song) {
        const $tr = $("<tr>");
        $tr.html(`
            <td class="text-center col-narrow"><button type="button" class="play-button" onclick="playSpcFile('${song.filename}')"/>${playImg}</button></td>
            <td class="text-center col-narrow hide-xs">${song.id}</td>
            <td class="col-game">${song.game}</td>
            <td class="col-title">${song.title}</td>
            <td class="text-center col-narrow hide-xs" data-value="${song.duration}">${formatDuration(song.duration)}</td>
            <td class="text-center hide-md col-composer">${song.composer}</td>
            <td class="text-center hide-md col-arranged">${song.arranger}</td>
            <td class="text-center hide-md">${song.transcription}</td>
            <td class="text-center hide-sm"><a class="link-primary" id="${song.filename}" href="${ostName === 'optional' ? ostName + '_' + song.source: ostName}/spc/${song.filename}.spc">spc</a></td>
            <td class="text-center hide-sm"><a class="link-primary" href="${ostName === 'optional' ? ostName + '_' + song.source: ostName}/mml/${song.filename}.txt">mml</a></td>
        `);
        $tbody.append($tr);
    });
}

function populateSongsTable(ostName, callback) {
    if (ostName !== "optional") {
        $.getJSON(`json/${ostName}.json`, function (songs) {
            populateRows(songs, ostName);
            if (callback) callback();
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.error(`Failed to load ${ostName} songs:`, textStatus, errorThrown);
        });
    } else {
        $.when(
            $.getJSON(`json/${ostName}_a.json`),
            $.getJSON(`json/${ostName}_b.json`),
            $.getJSON(`json/${ostName}_c.json`)
        ).done(function (data1, data2, data3) {
            const withSource = (data, source) => data[0].map(entry => ({ ...entry, source }));

            const songs = [].concat(
                withSource(data1, "a"),
                withSource(data2, "b"),
                withSource(data3, "c")
            );

            populateRows(songs, ostName);

            if (callback) callback();
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.error(`Failed to load ${ostName} songs:`, textStatus, errorThrown);
        });
    }
}

function loadOst(name) {
    populateSongsTable(name, resetSorting);
}

function loadInitialOst() {
    const ost = sessionStorage.getItem('ost') || 'ost_a';
    loadOst(ost);

    const label = $(`#custom-options .custom-option[data-value="${ost}"]`).text();
    $('#custom-select').text(label);
}

$(document).ready(function () {
    const $selectBox = $('#custom-select');
    const $optionsBox = $('#custom-options');

    $selectBox.on('click', function () {
        $optionsBox.toggleClass('d-none');
    });

    $optionsBox.find('.custom-option').on('click', function () {
        const selectedText = $(this).text();
        const selectedValue = $(this).data('value');
        sessionStorage.setItem('ost', selectedValue);
        $selectBox.text(selectedText);
        $optionsBox.addClass('d-none');
        loadOst(selectedValue); 
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.custom-select-wrapper').length) {
            $optionsBox.addClass('d-none');
        }
    });

    loadInitialOst();
});