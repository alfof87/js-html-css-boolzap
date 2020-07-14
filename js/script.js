


function addSendListener(){
  var target = $("#new-message-input");
  target.keyup(sendKeyup);
}

function sendKeyup(event){
  var key = event.which;
  console.log(event.which);
  if (key === 13) {
    var input = $(this);
    var txt = input.val();
    input.val(" ");
    sendMessage(txt);
  }
}

function sendMessage(txt){
  var template = $(".template-message-sent").clone();
  var target = $("#colonna-msg-utente");
  template.find("#new-message-input").text(txt);
  target.append(template);
  console.log(txt);

  var msg = $(".template-message-sent");
  msg.addClass("show");

}




// function inserimentoMsg(){
//   $("button").click(function() {
//     var myClone = $("#write input").clone();
//     $("#colonna-msg-utente").append(myClone);
//   });
// }
// function inserimentoMsg(){
//   $("button").click(function() {
//     var myClone = $("#write input").text();
//     myClone.clone();
//     $(".colonna-msg-utente").append(myClone);
//   });
// }

function init(){
addSendListener();
}
$(document).ready(init);
