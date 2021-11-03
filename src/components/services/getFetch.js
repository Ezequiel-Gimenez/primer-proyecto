const productos = [
    {
        id: 1,
        imagen: 'assets/images/piedra.jpg',
        categoria: 'medianas',
        nombre: 'Piedra',
        descripcion: 'Medidas: 30cm x 50cm',
        precio: 130,
        stock: 10
    },
    {
        id: 2,
        imagen: 'assets/images/marmol.jpg',
        categoria: 'medianas',
        nombre: 'Marmol',
        descripcion: 'Medidas: 30cm x 50cm',
        precio: 130,
        stock: 10
    },
    {
        id: 3,
        imagen: 'assets/images/adoquin.jpg',
        categoria: 'medianas',
        nombre: 'Adoquin',
        descripcion: 'Medidas: 30cm x 50cm',
        precio: 130,
        stock: 10
    },
    {
        id: 4,
        imagen: 'assets/images/travertino.jpg',
        categoria: 'medianas',
        nombre: 'Travertino',
        descripcion: 'Medidas: 30cm x 50cm',
        precio: 130,
        stock: 10
    },
    {
        id: 5,
        imagen: 'assets/images/laja.jpg',
        categoria: 'medianas',
        nombre: 'Laja',
        descripcion: 'Medidas: 30cm x 50cm',
        precio: 130,
        stock: 10
    },
    {
        id: 6,
        imagen: 'assets/images/colonial.jpg',
        categoria: 'grandes',
        nombre: 'Colonial',
        descripcion: 'Medidas: 50cm x 50cm',
        precio: 200,
        stock: 10
    },
    {
        id: 7,
        imagen: 'assets/images/fantasia.jpg',
        categoria: 'grandes',
        nombre: 'Fantasia',
        descripcion: 'Medidas: 50cm x 50cm',
        precio: 200,
        stock: 10
    },
    {
        id: 8,
        imagen: 'assets/images/roma.jpg',
        categoria: 'grandes',
        nombre: 'Roma',
        descripcion: 'Medidas: 50cm x 50cm',
        precio: 200,
        stock: 10
    },
    {
        id: 9,
        imagen: 'assets/images/molduras.jpg',
        categoria: 'molduras',
        nombre: 'Molduras',
        descripcion: 'Para las terminaciones en las paredes',
        precio: 200,
        stock: 10
    },
];

export const getFetch = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve (productos)
    }, 2000)
})

