const name = document.querySelector("#name");
const category = document.querySelector("#category");
const date = document.querySelector("#date");
const price = document.querySelector("#price");

const btn = document.querySelector("#btn");
const form = document.querySelector(".inputs");


form.addEventListener("submit", e => {
    const nameValue = name.value;
    const categoryValue = category.value;
    const dateValue = date.value;
    const priceValue = price.value;
    const tdAdd = document.createElement("tr");
    tdAdd.innerHTML = `
                         <td>${nameValue}</td>
                         <td>${categoryValue}</td>
                         <td>${priceValue} zł</td>
                         <td>${dateValue}</td>
                       `;

    const tableAppendChild = document.querySelector(".tableAppendChild");
    const tableAppendStatistic = document.querySelector(".tableAppendStatistic");

    tableAppendChild.appendChild(tdAdd);

    e.preventDefault();
    console.log(name);
});



