const form = document.querySelector("#addTask");
const textbox = document.querySelector("#textbox");

const backlog = document.querySelector(".backlog");

let taskArray = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(textbox.value);
  if (textbox.value == "") {
    return;
  }
  taskArray.push(textbox.value);
  textbox.value = "";
  addNewLi();
});

taskArray.forEach((element) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(element));
  backlog.appendChild(li);
  const deleteButton = document.createElement("button");
  li.appendChild(deleteButton);
  deleteButton.classList.add("delete-button");

  const moveLeft = document.createElement("button");
  li.appendChild(moveLeft);
  moveLeft.classList.add("move-left");
  const moveRight = document.createElement("button");
  li.appendChild(moveRight);
  moveRight.classList.add("move-right");
});

const addNewLi = () => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(taskArray[taskArray.length - 1]))
    .insertBefore;
  backlog.appendChild(li);
  const deleteButton = document.createElement("button");
  li.appendChild(deleteButton);
  deleteButton.classList.add("delete-button");
  const deleteButtonEvent = document.querySelector(
    "li:last-child .delete-button"
  );

  deleteButtonEvent.addEventListener;
  deleteButtonEvent.addEventListener("click", () => {
    deleteButtonEvent.parentElement.style.display = "none";
    console.log(e);
  });

  const moveLeft = document.createElement("button");
  li.appendChild(moveLeft);
  moveLeft.classList.add("move-left");
  const moveRight = document.createElement("button");
  li.appendChild(moveRight);
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
        getMoveRightButton.parentElement.parentElement.classList[0]
      ) <= 2
    ) {
      let actualIndex = tableOfMainElements.indexOf(
        getMoveRightButton.parentElement.parentElement.classList[0]
      );
      getArticleNames[actualIndex + 1].appendChild(
        getMoveRightButton.parentElement
      );
    } else {
      return;
    }
  });
  getMoveLeftButton.addEventListener("click", () => {
    if (
      tableOfMainElements.indexOf(
        getMoveLeftButton.parentElement.parentElement.classList[0]
      ) > 0
    ) {
      let actualIndex = tableOfMainElements.indexOf(
        getMoveLeftButton.parentElement.parentElement.classList[0]
      );
      getArticleNames[actualIndex - 1].appendChild(
        getMoveLeftButton.parentElement
      );
    } else {
      return;
    }
  });
};
