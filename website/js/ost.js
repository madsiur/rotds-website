function listSongTable(dirId) {
    var dirName = dirs[dirId];
    var table = $('#ostTbl');
    var head = $('#ostHead');
    table.empty();
    head.empty();

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