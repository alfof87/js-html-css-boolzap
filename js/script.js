


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
  var template = $(".template-message-sent .msg-new").clone();
  template.append(txt);
  var target = $("#colonna-msg-utente");
  target.append(template);
  // template.addClass("show");
  setTimeout(replayMessage, 2000);
}

function replayMessage() {
  var txt = "ok";
  var template = $(".template-message-cpu .msg-new-cpu").clone();
  template.text(txt);
  var target = $("#colonna-msg-cpu");
  target.append(template);
}
////////////////Show Option/////////////
// function showOption(){
//   $(".fa-chevron-down").click(function(){
//   $(".showOption").toggle();
//   });
  // var container = $(".template-message-sent");
  // var option =$(".showOption");
  // container.addEventListener("click", function(){
  //   option.addClass(".show");
  // });
// }


///////////////////ELENCO CONTATTI (NON FUNZIONANTE)///////////////////
function addSearchListener(){
  var target = $("#input-contatti");
  target.keyup(searchKeyup);
}
function searchKeyup(){
  var input = $(this);
  var txt = input.val();

  var contacts = $(".contenitore-contatti .nomi");
  contacts.each(function() {
    var contact = $(this);
    var name = contact.find(".contenitore-contatti p").text();

    if (name.toLowerCase().includes(txt.toLowerCase())){
      contact.show();
    }else {
      contact.hide();
    }
  });
}
//////////////////TIME FUNCTION (NON FUNZIONANTE)///////////////////////
// setTimeout(myFunction, 2000);
// function myFunction(){
//   var msg = $(".template-message-sent");
//   var msgCpu = $(".template-message-cpu");
//   msg.addClass("show") == true;
//   if (msg.addClass("show") == true) {
//     msgCpu.removeClass("hide");
//     msgCpu.addClass("show");
//   }
// }


  // var msg = $(".template-message-sent");
  //
  // var msgCpu = $(".template-message-cpu");
  // if (msgCpu.addClass("show") == true) {
  //
  // msgCpu.show(template-message-cpu);
  //
  //  }
 //}
  // var msg = $(".template-message-sent");
  // msg.addClass(".show") = true;
  // console.log(msg);
  // var msgCpu = $(".template-message-cpu");
  // if (true) {
  //   msgCpu.addClass("show");
  // }
//}



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
