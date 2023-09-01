const catalogo = [
    {
    id:1,
    nome: 'Camisa Kombi',
    marca: 'Canguru',
    preco: 50
    },

    {
    id:2,
    nome: 'Camisa Vermelha',
    marca: 'Raio',
    preco: 55
    },

    {
    id:3,
    nome: 'Camisa Cinza',
    marca: 'Raio',
    preco: 60    
    },

    {
    id:4,
    nome: 'Camisa Vermelha',
    marca: 'Sallo',
    preco: 65
    },

    {
    id:5,
    nome: 'Camisa Cinza',
    marca: 'Raio',
    preco: 70
    },

    {
    id:6,
    nome: 'Calça Alfaiataria',
    marca: 'Macho Moda',
    preco: 75
    },

    {
    id:7,
    nome: 'Calça Jeans',
    marca: 'Hombre Moderno',
    preco: 80
    },

    {
    id:8,
    nome: 'Tenis Couro',
    marca: 'Ferracine',
    preco: 90
    },
    
    {
    id:9,
    nome: 'Tenis Casual',
    marca: 'Adidas',
    preco: 150
    },
]

for (const produtoCatalogo of catalogo) {
    const cardProduct = 
        `<div id="card-produto-${produtoCatalogo.id}">
            <p>${produtoCatalogo.nome}</p>
            <p>${produtoCatalogo.marca}</p>
            <p>${produtoCatalogo.preco}</p>
            <button>Adicionar</button>
        </div>`
    document.querySelector('#container-produto').innerHTML += cardProduct
}