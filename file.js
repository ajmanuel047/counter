let increment = document.getElementById("increase-button");
let decrement = document.getElementById("decrease-button")
let counter = document.getElementById("counting");
count = 0;

increment.onclick= ()=> {
count++
counter.innerHTML = count

}


decrement.onclick= ()=> {
  count--
  counter.innerHTML = count
  }
  