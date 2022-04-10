const name = document.querySelector("#name");
const category = document.querySelector("#category");
const date = document.querySelector("#date");
const price = document.querySelector("#price");
// const test = document.querySelector(".test");
const btn = document.querySelector("#btn");
const form = document.querySelector(".inputs")
const tableAppendChild = document.querySelector(".tableAppendChild");


let entries = localStorage.getItem("entries");

if (entries === null) {
    localStorage.setItem("entries", JSON.stringify([]));
    entries = "[]";
}

entries = JSON.parse(entries);

const renderTr = (name, category, price, date) => {
    const tdAdd = document.createElement("tr");
    const td0 = document.createElement("td");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    td0.appendChild(document.createTextNode(name));
    td1.appendChild(document.createTextNode(category));
    td2.appendChild(document.createTextNode(price));
    td3.appendChild(document.createTextNode(date));

    tdAdd.appendChild(td0);
    tdAdd.appendChild(td1);
    tdAdd.appendChild(td2);
    tdAdd.appendChild(td3);

    return tdAdd;
}

const fragment = document.createDocumentFragment();
entries.forEach(({name, category, price, date}) => {
    fragment.appendChild(renderTr(name, category, price, date));
});

tableAppendChild.replaceChildren(fragment);

const saveToLocalStorage = (name, category, price, date) => {
    if (localStorage.getItem("entries") === null) {
        localStorage.setItem("entries", JSON.stringify([]));
    }

    let storage = JSON.parse(localStorage.getItem("entries"));
    storage.push({name: name, category: category, price: price, date: date});
    localStorage.setItem("entries", JSON.stringify(storage));
};

form.addEventListener("submit", e => {
    const nameValue = name.value;
    const categoryValue = category.value;
    const dateValue = date.value;
    const priceValue = price.value;

    saveToLocalStorage(nameValue, categoryValue, priceValue, dateValue);

    const tdAdd = renderTr(nameValue, categoryValue, priceValue, dateValue);
    tableAppendChild.appendChild(tdAdd);

    e.preventDefault();
});



