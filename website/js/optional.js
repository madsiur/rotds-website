let optional_a = await fetchJson("json/optional_a.json");
let optional_b = await fetchJson("json/optional_b.json");
let optional_c = await fetchJson("json/optional_c.json");

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