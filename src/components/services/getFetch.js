const productos = [
    {
        id: 1,
        imagen: 'assets/images/piedra.jpg',
        categoria: 'medianas',
        nombre: 'Piedra',
        descripcion: 'Medidas: 30cm x 50cm',
        precio: 130,
        stock: '10',
    },
    {
        id: 2,
        imagen: 'assets/images/marmol.jpg',
        categoria: 'medianas',
        nombre: 'Marmol',
        descripcion: 'Medidas: 30cm x 50cm',
        precio: 130,
        stock: '10',
    },
    {
        id: 3,
        imagen: 'assets/images/adoquin.jpg',
        categoria: 'medianas',
        nombre: 'Adoquin',
        descripcion: 'Medidas: 30cm x 50cm',
        precio: 130,
        stock: '10',
    },
    {
        id: 4,
        imagen: 'assets/images/travertino.jpg',
        categoria: 'medianas',
        nombre: 'Travertino',
        descripcion: 'Medidas: 30cm x 50cm',
        precio: 130,
        stock: '10',
    },
    {
        id: 5,
        imagen: 'assets/images/laja.jpg',
        categoria: 'medianas',
        nombre: 'Laja',
        descripcion: 'Medidas: 30cm x 50cm',
        precio: 130,
        stock: '10',
    },
    {
        id: 6,
        imagen: 'assets/images/molduras.jpg',
        categoria: 'molduras',
        nombre: 'Molduras',
        descripcion: 'Para las terminaciones en peredes',
        precio: 200,
        stock: '10',
    },
];

export const getFetch = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve (productos)
    }, 2000)
})

