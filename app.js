// PROPRIEDADES DO OBJETO "WINDOW"

function document_func() {
  console.log(window.document);
}

function frames_func() {
  console.log(window.length);
  console.log(window.frames[2].innerHeight);
}

let myWindow;
function open_func() {
  myWindow = window.open("", "myWindow", "width=400, height=200");
}

function closed_func() {
  console.log(myWindow.closed);
}

function goBack_func() {
  console.log(window.history.back());
}

function goForward_func() {
  console.log(window.history.forward());
}

function history_func() {
  console.log(window.history);
}

function location_func() {
  console.log(window.location);
}

function name_func() {
  open_func();
  console.log(myWindow.name);
  console.log(myWindow.opener);
}

function navigator_func() {
  console.log(window.navigator);
}

function outerHeight_func() {
  console.log(window.outerHeight);
}

function parent_func() {
  parent.document.body.style.backgroundColor = "LightSalmon";
}

function screen_func() {
  console.log(window.screen);
}

function screenX_func() {
  console.log(window.screenX);
}

function screenY_func() {
  console.log(window.screenY);
}

function self_func() {
  console.log(window.self);
  open_func();
  console.log(myWindow.self);
}

function top_func() {
  if (window.top != window.self) {
    console.log("Esta janela não está no topo.");
  } else {
    console.log("Esta janela está no topo.");
  }
}
