$(document).ready(function(){
    $("#button").click(function(){
    var d = parseInt($("#d").val());
    var b = d.toString(2);
    $("#b").val(b);
    var d= parseInt($("#d").val());
    var o= d.toString(8);
     $("#o").val(o);
    var d = parseInt($("#d").val());
    var h = d.toString(16);
    $("#h").val(h);
});
})