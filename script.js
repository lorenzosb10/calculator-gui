const firstInputEl = document.getElementById("firstNumber");
const secondInputEl = document.getElementById("secondNumber");
const selectEl = document.getElementById("operations");
const resultSpanEl = document.getElementById("result");
const buttonEl = document.getElementById("resultBtn");

const formEl = document.getElementById("form");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  if (firstInputEl.value || secondInputEl.value) {
    const firstInputValue = parseInt(firstInputEl.value);
    const secondInputValue = parseInt(secondInputEl.value);
    const result = runOperation(
      firstInputValue,
      secondInputValue,
      selectEl.value
    );

    resultSpanEl.innerText = result;
  }
});

formEl.addEventListener("change", (event) => {
  disableButtonFunction(firstInputEl, secondInputEl, buttonEl, selectEl);
});

function runOperation(firstInputValue, secondInputValue, operation) {
  let result = 1;

  if (operation === "+") {
    result = firstInputValue + secondInputValue;
  } else if (operation === "-") {
    result = firstInputValue - secondInputValue;
  } else if (operation === "*") {
    result = firstInputValue * secondInputValue;
  } else if (operation === "/") {
    result = firstInputValue / secondInputValue;
  } else if (operation === "!") {
    for (let i = 1; i <= firstInputValue; i++) {
      result = i * result;
    }
  }
  return result;
}

const disableButtonFunction = (
  firstInputEl,
  secondInputEl,
  buttonEl,
  selectEl
) => {
  if (firstInputEl.value !== "" && secondInputEl.value !== "") {
    buttonEl.disabled = false;
  } else if (firstInputEl.value !== "" && selectEl.value === "!") {
    buttonEl.disabled = false;
  } else if (firstInputEl.value === "" || secondInputEl.value === "") {
    buttonEl.disabled = true;
  }

  // function disableSecondInput (selectEl, secondInputEl) {
  //   if (selectEl.value === "!") {
  //     secondInputEl.disabled = true;
  //   }
  //   else {
  //     secondInputEl.disabled = false;
  //   }

  // }

  // selectEl.target("!")

  // const body = document.body;
  // const paragraphEl = document.createElement("p");
  // paragraphEl.innerText = "gustavo";
  // body.appendChild(paragraphEl);

  // const divEl = document.createElement("div");
  // divEl.innerHTML = `<h2> O resultado é: </h2> <span>${result}</span>`
  // document.body.appendChild(divEl);

  // else if (operation.value === "!") {
  //   buttonEl.disabled = false;
  //   secondInputEl.disabled = true;
  // }

  // else if (firstInputEl.value || secondInputEl.value !== "") {
  //   buttonEl.disabled = false;
  // }
};

// var disableButtonFunction = function disableButton(firstInputEl, secondInputEl, operation, buttonEl) {

//   if (firstInputEl.value || secondInputEl.value === null) {
//     buttonEl.disabled = true;
//   }
//   else {
//     buttonEl.disabled = false;
//   }

// }
