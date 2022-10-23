const form = document.querySelector("#addTask");
const textbox = document.querySelector("#textbox");

const backlog = document.querySelector(".backlog");

let taskArray = [];

let i = 0;

if (localStorage.getItem("items")) {
  taskArray.push(...JSON.parse(localStorage.items));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(textbox.value);
  if (textbox.value == "") {
    return;
  }
  taskArray.push(textbox.value);
  textbox.value = "";
  addNewLi();
  localStorage.setItem("items", JSON.stringify(taskArray));
  i++;
});

const addNewLi = () => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(taskArray[i]));
  backlog.appendChild(li);
  const section = document.createElement("section");
  li.appendChild(section);
  const deleteButton = document.createElement("button");
  section.appendChild(deleteButton);
  deleteButton.classList.add("delete-button");
  const deleteButtonEvent = document.querySelector(
    "li:last-child .delete-button"
  );

  deleteButtonEvent.addEventListener("click", () => {
    deleteButtonEvent.parentElement.parentElement.style.display = "none";

    const getValueOfElement =
      deleteButtonEvent.parentElement.parentElement.childNodes[0].textContent;
    taskArray.splice(taskArray.indexOf(getValueOfElement), 1);
    localStorage.setItem("items", JSON.stringify(taskArray));
  });

  const moveLeft = document.createElement("button");
  section.appendChild(moveLeft);
  moveLeft.classList.add("move-left");
  const moveRight = document.createElement("button");
  section.appendChild(moveRight);
  moveRight.classList.add("move-right");

  const getArticleNames = document.querySelectorAll("article");

  const getMoveLeftButton = document.querySelector("li:last-child .move-left");
  const getMoveRightButton = document.querySelector(
    "li:last-child .move-right"
  );
  let tableOfMainElements = [];
  getArticleNames.forEach((element) => {
    element.classList.value;
    tableOfMainElements.push(element.classList.value);
  });

  getMoveRightButton.addEventListener("click", () => {
    if (
      tableOfMainElements.indexOf(
        getMoveRightButton.parentElement.parentElement.parentElement
          .classList[0]
      ) <= 2
    ) {
      getMoveRightButton.removeAttribute("disabled");
      let actualIndex = tableOfMainElements.indexOf(
        getMoveRightButton.parentElement.parentElement.parentElement
          .classList[0]
      );
      getArticleNames[actualIndex + 1].appendChild(
        getMoveRightButton.parentElement.parentElement
      );
    } else {
      return;
    }
  });

  getMoveLeftButton.addEventListener("click", () => {
    if (
      tableOfMainElements.indexOf(
        getMoveLeftButton.parentElement.parentElement.parentElement.classList[0]
      ) > 0
    ) {
      let actualIndex = tableOfMainElements.indexOf(
        getMoveLeftButton.parentElement.parentElement.parentElement.classList[0]
      );
      getArticleNames[actualIndex - 1].appendChild(
        getMoveLeftButton.parentElement.parentElement
      );
    } else {
      return;
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  for (i; i < taskArray.length; i++) {
    addNewLi();
  }
});
