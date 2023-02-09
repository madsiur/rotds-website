$(document).ready(function() {
    showPage(false);
    listSongTable(0);
});

$('#osta').click(function () {
    showPage(false);
    listSongTable(0);
    return false;
});

$('#ostb').click(function () {
    showPage(false);
    listSongTable(1);
    return false;
});

$('#sfx').click(function () {
    showPage(false);
    listSongTable(2);
    return false;
});

$('#samples').click(function () {
    showPage(false);
    listSampleTable();
    return false;
});

$('#credits').click(function () {
    showPage(true);
    $('#pageTitle').html("Credits");
    return false;
});

function showPage(isCredits) {
    if(isCredits) {
        $('#pageDiv').css('display','none');
        $('#creditsDiv').css('display','block');
    } else {
        $('#pageDiv').css('display','block');
        $('#creditsDiv').css('display','none');
    }
}

function listSampleTable() {
    var table = $('#ostTbl');
    var head = $('#ostHead');
    var title = $('#pageTitle');
    table.empty();
    head.empty();

    title.html("BRR Samples");

    // write table header
    head.append($('<th scope="col">ID</th>'));
    head.append($('<th scope="col">Game</th>'));
    head.append($('<th scope="col">Name</th>'));
    head.append($('<th scope="col">Loop</th>'));
    head.append($('<th scope="col">Envelope</th>'));
    head.append($('<th scope="col">Pitch</th>'));
    head.append($('<th scope="col">BRR</th>'));

    var counter = 1;

    $.each(brrs, function(key,value) {
        var tr = $('<tr></tr>');

        // alternate row colors
        if(counter % 2 == 1) {
            tr.addClass("table-primary");
        } else {
            tr.addClass("table-secondary");
        }
        counter++;

        tr.append($('<td></td>').text(value.id));
        tr.append($('<td></td>').text(value.game));
        tr.append($('<td></td>').text(value.name));
        tr.append($('<td></td>').text(toHexString(value.loop, 4)));
        tr.append($('<td></td>').text(toHexString(value.env, 4)));
        tr.append($('<td></td>').text(toHexString(value.pitch, 4)));
        tr.append($('<td><a href="brr/' + value.filename + '.brr">brr</a></td>'));
        table.append(tr);
    });
}

function toHexString(number, padding) {
    var strNum = number.toString(16).toUpperCase();
    var loop = padding - strNum.length > 0 ? padding - strNum.length: 0;
    for(var i = 0; i < loop; i++) {
        strNum = "0" + strNum;
    }
    return strNum;
}

function listSongTable(dirId) {
    var dirName = dirs[dirId];
    var table = $('#ostTbl');
    var head = $('#ostHead');
    var title = $('#pageTitle');
    table.empty();
    head.empty();

    // set page title
    title.html(dirName.replace('_', ' ').toUpperCase());

    // write table header
    head.append($('<th scope="col">Play</th>'));
    head.append($('<th scope="col">ID</th>'));
    head.append($('<th scope="col">Game</th>'));
    head.append($('<th scope="col">Title</th>'));
    head.append($('<th scope="col">Duration</th>'));
    head.append($('<th scope="col">Composer</th>'));
    head.append($('<th scope="col">Arranged</th>'));
    head.append($('<th scope="col">SPC</th>'));
    head.append($('<th scope="col">MML</th>'));

    // get filtered list
    var key = dirId == 1 ? 'rotds_b': 'rotds_a'
    var array = $.grep(roms[key], function(e) {
        return e.dir == dirId + 1;
    });

    var counter = 1;
    var playImg = '<img src="images/play-circle-fill.svg" class="playImg" />';

    $.each(array, function(key,value) {
        // create duration string
        var strMin = (Math.floor(value.duration / 60)).toString();
        var sec = value.duration % 60
        var strSec = sec < 10 ? "0" + sec.toString(): sec.toString();
       
        var playLink = '<td><button type="button" class="playButton" onclick="playSpcFile(\'' + value.filename + '\')"/>' + playImg + '</button></td>';
        var tr = $('<tr></tr>');

        // alternate row colors
        if(counter % 2 == 1) {
            tr.addClass("table-primary");
        } else {
            tr.addClass("table-secondary");
        }
        counter++;

        // write row cells
        tr.append($(playLink));
        tr.append($('<td></td>').text(value.id));
        tr.append($('<td></td>').text(value.game));
        tr.append($('<td></td>').text(value.title));
        tr.append($('<td></td>').text(strMin + ":" + strSec));
        tr.append($('<td></td>').text(value.composer));
        tr.append($('<td></td>').text(value.arranger));
        tr.append($('<td><a id="' + value.filename + '" href="' + dirName + '/spc/' + value.filename + '.spc">spc</a></td>'));
        tr.append($('<td><a href="' + dirName + '/mml/' + value.filename + '.txt">mml</a></td>'));
        table.append(tr);
    });
}