let optional_a = await fetchJson("optional_a");
let optional_b = await fetchJson("optional_b");
let optional_c = await fetchJson("optional_c");

$(document).ready(function() {
    listSongTable(optional_a, "optional_a");
    listSongTable(optional_b, "optional_b");
    listSongTable(optional_c, "optional_c");

    $('#sortTbl').DataTable({
        "order": [[2, 'asc']],
        "columnDefs": [
            { orderable: false, targets: 0 },
            { orderable: false, targets: 7 },
            { orderable: false, targets: 8 }
        ],
        "paging": false,
        "searching": false,
        "info": false
    });
});