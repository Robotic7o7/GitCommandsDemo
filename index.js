var defaultImg = "assets/logo.png";
var baseImg = "assets/base.png";
var addImg = "assets/add.png";
var commitImg = "assets/commit.png";
var pushImg = "assets/push.png";
var pullImg = "assets/pull.png";
var fetchImg = "assets/fetch.png";
home();

function home() {
  document.getElementById("dynamicLoad").src = defaultImg;
}

function base() {
  document.getElementById("dynamicLoad").src = baseImg;
}

function add() {
  document.getElementById("dynamicLoad").src = addImg;
}

function commit() {
  document.getElementById("dynamicLoad").src = commitImg;
}

function push() {
  document.getElementById("dynamicLoad").src = pushImg;
}

function pull() {
  document.getElementById("dynamicLoad").src = pullImg;
}

function fetch1() {
  document.getElementById("dynamicLoad").src = fetchImg;
}
