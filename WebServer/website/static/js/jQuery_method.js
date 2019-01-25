$(document).ready(function() {

console.log("sfvdfv");
$("textarea").on('keydown', function(ev) {
 
    var keyCode = ev.keyCode || ev.which;

    if (keyCode == 9) {
        ev.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        var val = this.value;
        var selected = val.substring(start, end);
        var re, count;

        if(ev.shiftKey) {
            re = /^\t/gm;
            count = -selected.match(re).length;
            this.value = val.substring(0, start) + selected.replace(re, '') + val.substring(end);
            // todo: add support for shift-tabbing without a selection
        } else {
            re = /^/gm;
            count = selected.match(re).length;
            this.value = val.substring(0, start) + selected.replace(re, '\t') + val.substring(end);
        }

        if(start === end) {
            this.selectionStart = end + count;
        } else {
            this.selectionStart = start;
        }

        this.selectionEnd = end + count;
    }
});



});