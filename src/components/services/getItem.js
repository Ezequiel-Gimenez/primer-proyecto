const producto = {
    id: 1,
    imagen: 'assets/images/piedra.jpg',
    categoria: 'medianas',
    nombre: 'Piedra',
    descripcion: 'Medidas: 30cm x 50cm',
    precio: 130,
    stock: '10',
}

export const getItem = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve (producto);
    }, 2000)
})