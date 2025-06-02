function populateRows(brrs) {
    const $tbody = $("#brr-entries");
    $tbody.empty();

    $.each(brrs, function (_, brr) {
        const $tr = $("<tr>");
        $tr.html(`
            <td class="text-center col-narrow hide-xs">${brr.id}</td>
            <td class="col-game">${brr.gameLong}</td>
            <td class="col-title">${brr.name}</td>
            <td class="text-center col-narrow" data-value="${brr.occ}">${brr.occ}</td>
            <td class="text-center hide-md" data-value="${brr.size}">${toHexString(brr.size, 4)}</td>
            <td class="text-center hide-md" data-value="${brr.loop}">${toHexString(brr.loop, 4)}</td>
            <td class="text-center hide-md" data-value="${brr.env}">${toHexString(brr.env, 4)}</td>
            <td class="text-center hide-md" data-value="${brr.pitch}">${toHexString(brr.pitch, 4)}</td>
            <td class="text-center hide-sm"><a class="link-primary" href="brr/${brr.filename}.brr">brr</a></td>
        `);
        $tbody.append($tr);
    });
}

function populateBrrTable() {
    $.getJSON(`json/brrs.json`, function (brrs) {
        populateRows(brrs);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.error(`Failed to load ${ostName} songs:`, textStatus, errorThrown);
    });
}

function loadBrrs() {
    populateBrrTable();
    resetSorting();
}

$(document).ready(function () {
    loadBrrs();
});