$(document).ready(function() {
    var dirName = dirs[1]; 
    listSongTable(ost_b, dirName);

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