
// En este apartado es donde se modifican los datos
// para que tome los de la base de datos!!

const Images = [
    {image:require('../../assets/images/bebida1.jpg')},
    {image:require('../../assets/images/post1.jpg')},
    {image:require('../../assets/images/ff3.jpg')}
]

//SECCION COMIDA RAPIDA
export const crapida = [
    {
        id:'2',
        title: 'Hambuguesa',
        description: 'Con queso y lechuga.',
        image: Images[2].image,
        categories: ['Rápida',', Carne', ', Sabrosa'],
        precio:'55'
    },
]

//SECCION BEBIDAS
export const bebida = [
    {
        id:'1',
        title: 'Café',
        description: 'Café caliente',
        image: Images[0].image,
        categories: ['Bebida',', Desayuno',', Caliente'],
        precio:'32'
    },
]


//SECCION POSTRE
export const postre = [
    {
        id:'3',
        title: 'Pastel',
        description: 'Relleno de chocolate',
        image: Images[1].image,
        categories: ['Postre',', Comida',', Azucar'],
        precio:'125'
    },
]


//SECCION MENÚ GENERAL
export const menu = [
    {
        id:'1',
        title: 'Café',
        description: 'Café caliente.',
        image: Images[0].image,
        categories: ['Bebida',', Desayuno',', Caliente'],
        precio:'32'
    },
    {
        id:'3',
        title: 'Pastel',
        description: 'Relleno de chocolate.',
        image: Images[1].image,
        categories: ['Postre',', Comida',', Azucar'],
        precio:'125'
    },
    {
        id:'2',
        title: 'Hambuguesa',
        description: 'Con queso y lechuga.',
        image: Images[2].image,
        categories: ['Rápida',', Carne', ', Sabrosa'],
        precio:'55'
    },
]


//PERSONAL
export const personal = [
    {
        id:'1',
        nombre: 'Jorge',
        apePat: 'Pavon',
        apeMat: 'Romo',
        sexo: 'hombre',
    },
    {
        id:'2',
        nombre: 'Juan',
        apePat: 'Lopez',
        apeMat: 'Martinez',
        sexo: 'hombre',
    },
    {
        id:'3',
        nombre: 'Ana',
        apePat: 'Gutierrez',
        apeMat: 'Del Campo',
        sexo: 'hombre',
    },
]