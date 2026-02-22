const formulario = document.querySelector("form");
const inputItem = document.querySelector("#item");
const listaItens = document.querySelector("#listItems");
const checkbox = document.querySelector("#item-check");
const removeItem = document.querySelector(".remove-item");

function createShoppingList(value) {
  const newLi = document.createElement("li");
  const newInput = document.createElement("input");
  newInput.type = "checkbox";
  newInput.addEventListener("change", (e) => {
    if (e.target.checked) {
      newLi.classList.toggle("do");
    } else {
      newLi.classList.remove("do");
    }
  });

  const newLabel = document.createElement("label");
  newLabel.textContent = value;

  const newButton = document.createElement("button");
  const imgTrash = document.createElement("img");
  imgTrash.src = "assets/trash.svg";
  imgTrash.alt = "Remover item";
  newButton.append(imgTrash);

  newLi.append(newInput, newLabel, newButton);
  listaItens.append(newLi);
  inputItem.value = "";
  inputItem.focus();

  newButton.addEventListener("click", () => {
    newLi.remove();
    removeItem.style.display = "flex";
  });
}

formulario.onsubmit = (e) => {
  e.preventDefault();

  if (!inputItem.value || !inputItem.value.trim()) return;

  createShoppingList(inputItem.value);
};

removeItem.addEventListener("click", () => {
  removeItem.style.display = "none";
});

createShoppingList("2 Lasanhas");
createShoppingList("Pão de Forma");
createShoppingList("1 alface");
createShoppingList("10 bolachas trakinas");
