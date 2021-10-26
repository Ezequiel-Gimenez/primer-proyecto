const productos = [
    {
        id: 1,
        imagen: '',
        nombre: 'Piedra',
        descripcion: 'Medidas: 30cm x 50cm',
        precio: 130,
    },
    {
        id: 2,
        imagen: '',
        nombre: 'Marmol',
        descripcion: 'Medidas: 30cm x 50cm',
        precio: 130,
    },
    {
        id: 3,
        imagen: '',
        nombre: 'Adoquin',
        descripcion: 'Medidas: 30cm x 50cm',
        precio: 130,
    },
    {
        id: 4,
        imagen: '',
        nombre: 'Travertino',
        descripcion: 'Medidas: 30cm x 50cm',
        precio: 130,
    },
    {
        id: 5,
        imagen: '',
        nombre: 'Laja',
        descripcion: 'Medidas: 30cm x 50cm',
        precio: 130,
    },
    {
        id: 6,
        imagen: '',
        nombre: 'Molduras',
        descripcion: 'Para las terminaciones en peredes',
        precio: 200,
    },
];

export const getFetch = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve (productos)
    }, 3000)
})