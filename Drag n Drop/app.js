const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  console.log("dragStart");
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  console.log("dragEnd");
  this.className = "fill";
}

function dragOver(e) {
  console.log("dragOver");
  e.preventDefault();
}

function dragEnter(e) {
  console.log("dragEnter");
  this.className += " hovered";
}

function dragLeave() {
  console.log("dragLeave");
  this.className = "empty";
}

function dragDrop() {
  console.log("dragDrop");
  this.className = "empty";
  this.append(fill);
}
