function inserimentoMsg(){
  $("button").click(function() {
    var myClone = $("#write input").clone();
    $("#colonna-msg-utente").append(myClone);
  });
}
// function inserimentoMsg(){
//   $("button").click(function() {
//     var myClone = $("#write input").text();
//     myClone.clone();
//     $(".msg").append(myClone);
//   });
// }






function init(){
inserimentoMsg();
}
$(document).ready(init);
