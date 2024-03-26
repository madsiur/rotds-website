let brrs = await fetchJson("brrs");

$(document).ready(function() {
    listSampleTable();

    $('#sortTbl').DataTable({
        "order": [[1, 'asc']],
        "columnDefs": [
            { orderable: false, targets: 5 },
            { orderable: false, targets: 6 },
            { orderable: false, targets: 7 },
            { orderable: false, targets: 8 }
        ],
        "paging": false,
        "searching": false,
        "info": false
    });
});

function listSampleTable() {
    var table = $('#ostTbl');

    $.each(brrs, function(key,value) {
        var tr = $('<tr></tr>');

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