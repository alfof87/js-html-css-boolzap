


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
  template.append(txt);
  var target = $("#colonna-msg-cpu");
  target.append(template);
}
////////////////Show/Erase Option/////////////
// $(".showOption-user, .showOption-cpu").hide();
// $(".fa-chevron-down").click(function(){
//  $(".showOption-user, .showOption-cpu").toggle();
// });
function addTestListener(){

  $(document).on("click", ".chevron-utente", function() {
    $(this).children().toggle();
  });

$(document).on("click", ".chevron-cpu", function(){
    $(this).children().toggle();
 });
}

function eraseTestListener(){

$(document).on("click", ".destroyUser", function(){

  $(this).parent().hide();
  console.log(this);
 });
$(document).on("click", ".destroyCpu", function(){

  $(this).parentsUntil().hide();
 });
}
// $("#destroyUser").click(function(){
//  $(".showOption-user").hide();
// });
// $("#destroyCpu").click(function(){
//  $(".showOption-cpu").hide();
// });



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


function init(){
addSendListener();
addSearchListener();
addTestListener();
eraseTestListener();
}
$(document).ready(init);
