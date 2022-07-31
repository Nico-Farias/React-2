const ProductsData = [
    {
        "id": "1",
        "title": "Caos Magali Tajes",
        "categoria": "poesia",
        "image": "img/Caos.jpg",
        "price": 2999,
        "stock": 7,
        "cantidad": 0
    },
    {
        "id": "2",
        "title": "Culpa mia Mercedes Ron",
        "categoria": "ficcion",
        "image": "img/culpaMia.jpg",
        "price": 3233,
        "stock": 7,
        "cantidad": 0
    },
    {
        "id": "3",
        "title": "El dia que dejo de nevar en alaska",
        "categoria": "ficcion",
        "image": "img/elDiaQueDejo.jpg",
        "price": 3799,
        "stock": 7,
        "cantidad": 0
    },
    {
        "id": "4",
        "title": "Ciudades de ceniza trilogia",
        "categoria": "juvenil",
        "image": "img/trilogiafuero.jpg",
        "price": 2420,
        "stock": 7,
        "cantidad": 0
    },
    {
        "id": "5",
        "title": "Furia tracy wolff",
        "categoria": "ficcion",
        "image": "img/furia.jpg",
        "price": 3410,
        "stock": 7,
        "cantidad": 0
    },
    {
        "id": "6",
        "title": "Despues de el boulevart",
        "categoria": "juvenil",
        "image": "img/Despues-de-el-Boulevard-2--i6n21104560.jpg",
        "price": 2899,
        "stock": 7,
        "cantidad": 0
    },
    {
        "id": "7",
        "title": "Arde la vida Magali Tajes",
        "categoria": "poesia",
        "image": "img/ardeLaVida.jpg",
        "price": 2699,
        "stock": 7,
        "cantidad": 0
    },
    {
        "id": "8",
        "title": "Culpa tuya Mercedes Ron",
        "categoria": "ficcion",
        "image": "img/culpaTUya.jpg",
        "price": 3533,
        "stock": 7,
        "cantidad": 0
    }
]

const getData = new Promise((res, rej) => {
    let condition = true;

    if (condition) {
        setTimeout(() => {
            res(ProductsData)
        }, 3000)
    } else {
        rej(console.log("erro al cargar datos"))
    }
})

export default getData;