$(document).ready(function() {
    listSampleTable();
});

function listSampleTable() {
    var table = $('#ostTbl');
    var head = $('#ostHead');
    //var title = $('#pageTitle');
    table.empty();
    head.empty();

    //title.html("BRR Samples");

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