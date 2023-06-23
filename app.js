/*let items = document.querySelectorAll(".pic")
let output = document.querySelector(".output")
console.log(output)
items.forEach( e => {
    e.addEventListener("click", function () {
        let source = e.getAttribute("src")
        output.style.backgroundImage = `url('${source}')`;
    console.log(source)
  })
})
*/

let items = document.querySelectorAll(".pic img");
let output = document.querySelector(".output ");
console.log(output)
items.forEach((e) => {
  e.addEventListener("click", function() {
    let source = e.getAttribute("src");
    output.style.backgroundImage = `url('${source}')`;
    console.log(source);
  });
});

