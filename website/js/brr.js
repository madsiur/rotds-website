$(document).ready(function() {
    listSampleTable();
});

function listSampleTable() {
    var table = $('#ostTbl');
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
        tr.append($('<td></td>').text(value.gameLong));
        tr.append($('<td></td>').text(value.name));
        tr.append($('<td></td>').text(value.occ.toString()));
        tr.append($('<td></td>').text(toHexString(value.size, 4)));
        tr.append($('<td></td>').text(toHexString(value.loop, 4)));
        tr.append($('<td></td>').text(toHexString(value.env, 4)));
        tr.append($('<td></td>').text(toHexString(value.pitch, 4)));
        tr.append($('<td><a class="link-primary" href="brr/' + value.filename + '.brr">brr</a></td>'));
        table.append(tr);
    });
}