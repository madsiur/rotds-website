$(document).ready(function() {
    listSongTable(optional_a, dirs[3]);
    listSongTable(optional_b, dirs[4]);
    listSongTable(optional_c, dirs[5]);

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