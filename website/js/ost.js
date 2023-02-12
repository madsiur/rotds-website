function listSongTable(array, dirName) {
    var table = $('#ostTbl');
    var counter = 1;
    var playImg = '<img src="images/play-circle-fill.svg" class="play-img" />'
    
    $.each(array, function(key,value) {
        // create duration string
        var strMin = (Math.floor(value.duration / 60)).toString();
        var sec = value.duration % 60
        var strSec = sec < 10 ? "0" + sec.toString(): sec.toString();
       
        var playLink = '<td><button type="button" class="play-button" onclick="playSpcFile(\'' + value.filename + '\')"/>' + playImg + '</button></td>';
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
        tr.append($('<td><a class="link-primary" id="' + value.filename + '" href="' + dirName + '/spc/' + value.filename + '.spc">spc</a></td>'));
        tr.append($('<td><a class="link-primary" href="' + dirName + '/mml/' + value.filename + '.txt">mml</a></td>'));
        table.append(tr);
    });
}

