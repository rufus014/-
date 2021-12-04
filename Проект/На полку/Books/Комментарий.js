$(document).ready(function(){
    $("button").click(function(){
        $("<p>"+ $("#userName").val() + " (" + $("#rating").val()+ ")" + ": " + $("#textarea").val() + "</p>").appendTo("#com_area");
    });
});
