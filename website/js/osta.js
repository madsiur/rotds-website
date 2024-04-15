let ost_a = await fetchJson("json/ost_a.json");

$(document).ready(function() {  
    listSongTable(ost_a, "ost_a");

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