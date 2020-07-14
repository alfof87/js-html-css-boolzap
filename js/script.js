


function addSendListener(){
  var target = $("#new-message-input");
  target.keyup(sendKeyup);
}
function sendKeyup(event){


  var key = event.wich;
  console.log(key);
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
  var msg = $(".msg-utente");
  msg.addClass(".template-message-sent");
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
