let ost_b = await fetchJson("json/ost_b.json");

$(document).ready(function() {
    listSongTable(ost_b, "ost_b");

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