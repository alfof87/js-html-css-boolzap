function inserimentoMsg(){
  $("button").click(function() {
    var myClone = $("#write input").clone();
    $(".msg").append(myClone);
  });
}







function init(){
inserimentoMsg();
}
$(document).ready(init);
