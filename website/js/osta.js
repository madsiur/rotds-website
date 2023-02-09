$(document).ready(function() {
    var dirName = dirs[0];
    var array = $.grep(ost_a, function(e) {return e.dir == 1;});    
    listSongTable(array, dirName);
});