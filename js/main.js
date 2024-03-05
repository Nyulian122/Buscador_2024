import { list_componentes } from "./data.js";

let div_root = document.querySelector(".root");

// Title and search bar
let bloques_principales = `
    <h3>Componentes del computador</h3>
    <input type="text" id="searchInput" placeholder="Buscar...">
    <div class="lista_items"></div>
`;

div_root.innerHTML = bloques_principales;

function cargar_items() {
    let div_items = document.querySelector(".lista_items");
    
    list_componentes.forEach((Elemento) => {
        let div = document.createElement("div");
        div.classList.add("item");

        div.innerHTML = `
            <img src="${Elemento.img}" alt="${Elemento.nombre}">
        `;
        
        div_items.appendChild(div);
    });
}

cargar_items();

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function () {
    const searchString = searchInput.value.toLowerCase();
    const items = document.querySelectorAll('.lista_items .item');
    
    items.forEach(item => {
        const itemName = item.querySelector('img').alt.toLowerCase();
        
        if (itemName.includes(searchString)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
