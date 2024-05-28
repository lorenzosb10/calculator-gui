const firstInputEl = document.getElementById("firstNumber");
const secondInputEl = document.getElementById("secondNumber");
const selectEl = document.getElementById("operations");
const resultSpanEl = document.getElementById("result");
const result = 1;

const formEl = document.getElementById("form");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstInputValue = parseInt(firstInputEl.value);
  const secondInputValue = parseInt(secondInputEl.value);
  console.log(firstInputEl.value);
  console.log(secondInputEl.value);
  console.log(selectEl.value);
  console.log(conta(firstInputValue, secondInputValue, selectEl.value));
  resultSpanEl.innerText = result;
});




function conta(firstInputEl, secondInputEl, selectEl) {
  
  let result = 1;

  if (selectEl === "+") {
    result = firstInputEl + secondInputEl;
  } else if (selectEl === "-") {
    result = firstInputEl - secondInputEl;
  } else if (selectEl === "*") {
    result = firstInputEl * secondInputEl;
  } else if (selectEl === "/") {
    result = firstInputEl / secondInputEl;
  } else if (selectEl === "!") {
    for (let i = 1; i <= numA; i++) {
      result = i * result;
    }
  }
  return result;
}


// const body = document.body;
// const paragraphEl = document.createElement("p");
// paragraphEl.innerText = "gustavo";
// body.appendChild(paragraphEl);

// const divEl = document.createElement("div");
// divEl.innerHTML = `<h2> O resultado é: </h2> <span>${result}</span>`
// document.body.appendChild(divEl);

