
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
    },
    {
        id:'3',
        title: 'Pastel',
        description: 'Relleno de chocolate.',
        image: Images[1].image,
        categories: ['Postre',', Comida',', Azucar'],
    },
    {
        id:'2',
        title: 'Hambuguesa',
        description: 'Con queso y lechuga.',
        image: Images[2].image,
        categories: ['Rápida',', Carne', ', Sabrosa'],
    },
]
