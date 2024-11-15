// elementleri elan edirik
const form = document.querySelector("form");
const input = document.querySelector(".input_add");
const btn = document.querySelector(".btn");
const ul = document.querySelector("ul");

// Add event listener
form.addEventListener("submit", (event) => {

    event.preventDefault();
    if (!input.value) {
        return;
    }
    // yeni elementlerin yaradilmasi
    const addElement = document.createElement("div");
    addElement.classList.add("add_element");
    addElement.innerHTML = `
          <li class="task">
            ${input.value}
          </li>
        <div class="delete"><button>Delete</button></div>
      `;
    // addElement in ul-e elave edilmesi
    ul.appendChild(addElement);
    // delete button
    const delete_btn = addElement.querySelector(".delete");
    delete_btn.addEventListener("click", () => {
        addElement.remove();
    });
    input.value = "";
});