const items = [

{ name: "MDN Docs", cat: "Docs" },

{ name: "Can I Use", cat: "Tools" }

];

const grid = document.querySelector("#grid");

function show(list) {

grid.innerHTML = list.map(item => `

<div class="card">

<span class="badge">${item.cat}</span>

<h3>${item.name}</h3>

</div>

`).join("");

}



const search = document.querySelector("#search");

search.addEventListener("input", (e) => {

const q = e.target.value.toLowerCase();

const result = items.filter(i => i.name.toLowerCase().includes(q));

show(result);

});



document.querySelectorAll(".btn").forEach(btn => {

btn.addEventListener("click", () => {

const cat = btn.dataset.cat;

if (cat === "all") {

show(items);

} else {

show(items.filter(i => i.cat === cat));

}

});

});

show(items);