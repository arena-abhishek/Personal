let targetElement = document.querySelectorAll("form input");
console.log(targetElement);

let myEvent1 = addEventListener("click", () => {
  targetElement.forEach((a) => {
    if (a.checked) {
      a.nextElementSibling.style.backgroundColor = "#ffaadd";
    }
    else{
      a.nextElementSibling.style.backgroundColor = "transparent";
    }
  });
  // a.nextElementSibling.style.backgroundColor = "#ffaadd"
});

addEventListener("onsubmit", () => {
  
})
