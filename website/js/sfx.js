$(document).ready(function() {
    var dirName = dirs[2];
    var array = $.grep(ost_a, function(e) {return e.dir == 3;});    
    listSongTable(array, dirName);
});