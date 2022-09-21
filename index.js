const body = document.querySelector("body");

const h1 = document.createElement("h1");
const p = document.createElement("p");
const div = document.createElement("div");

const button = document.createElement("button");

const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
const li5 = document.createElement("li");

//   bonus
const p2 = document.createElement("p");

p2.classList.add("bg-success", "bg-opacity-50", "p-2", "mt-3");
// bonus end

body.classList.add("container");

h1.textContent = "My Favourite Destinations";
h1.classList.add("text-center");

p.textContent = "Toggle the list of my favourite destinations";
p.classList.add("bg-info", "bg-opacity-50", "p-2");

button.textContent = "Show Destinations";
button.classList.add("btn", "btn-primary", "mt-3");

ul.classList.add("list-group", "d-none");
li1.classList.add("list-group-item");
li2.classList.add("list-group-item");
li3.classList.add("list-group-item");
li4.classList.add("list-group-item");
li5.classList.add("list-group-item");

li1.textContent = "Rome";
li2.textContent = "Athens";
li3.textContent = "Bangkok";
li4.textContent = "Amsterdam";
li5.textContent = "Cala Gonone";

ul.append(li1, li2, li3, li4, li5);

body.prepend(div);
div.append(h1, p, ul, button);

button.addEventListener("click", () => {
  button.textContent = "Hide Destinations";
  ul.classList.toggle("d-none");

  if (ul.classList.contains("d-none")) {
    button.textContent = "Show Destinations";
  }
});

// BONUS
ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    Array.from(ul.children).forEach((item) => {
      item.classList.remove("active");
    });
    p2.textContent = `You selected ${e.target.textContent}`;
    ul.append(p2);

    e.target.classList.toggle("active");
  }
});
