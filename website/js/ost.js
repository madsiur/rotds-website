function listSongTable(array, dirName) {
    var table = $('#ostTbl');
    var playImg = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-play-circle-fill play-img" viewBox="0 0 16 16">';
    playImg += '<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/></svg>';
    
    $.each(array, function(key,value) {
        // create duration string
        var strMin = (Math.floor(value.duration / 60)).toString();
        var sec = value.duration % 60
        var strSec = sec < 10 ? "0" + sec.toString(): sec.toString();
       
        var playLink = '<td><button type="button" class="play-button" onclick="playSpcFile(\'' + value.filename + '\')"/>' + playImg + '</button></td>';
        var tr = $('<tr></tr>');

        // write row cells
        tr.append($(playLink));
        tr.append($('<td></td>').text(value.id));
        tr.append($('<td></td>').text(value.game));
        tr.append($('<td></td>').text(value.title));
        tr.append($('<td></td>').text(strMin + ":" + strSec));
        tr.append($('<td></td>').text(value.composer));
        tr.append($('<td></td>').text(value.arranger));
        tr.append($('<td></td>').text(value.transcription));
        tr.append($('<td><a class="link-primary" id="' + value.filename + '" href="' + dirName + '/spc/' + value.filename + '.spc">spc</a></td>'));
        tr.append($('<td><a class="link-primary" href="' + dirName + '/mml/' + value.filename + '.txt">mml</a></td>'));
        table.append(tr);
    });
}

