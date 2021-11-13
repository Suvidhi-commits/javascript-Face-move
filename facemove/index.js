const bob = document.querySelector(".face");
let count = 0;

function moveBob() {
  count += 200;
  bob.style.left = count + "px";
  console.log(count);
}

bob.addEventListener("click", moveBob);
