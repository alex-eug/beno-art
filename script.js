const oeuvres = [
    {
        id: 1,
        title: "Alpha mini",
        img: "pictures/Alphamini1.jpg",
        alt: "..."
    },
    {
        id: 2,
        title: "Callisto",
        img: "pictures/Callisto.jpg",
        alt: "...",
    },
    {
        id: 3,
        title: "Céphée",
        img: "pictures/Céphée.jpg",
        alt: "...",
    },
    {
        id: 4,
        title: "Beta",
        img: "pictures/Beta.jpg",
        alt: "...",
    },
    {
        id: 5,
        title: "Céphée Maxi",
        img: "pictures/CéphéeMaxi.jpg",
        alt: "...",
    },
    {
        id: 6,
        title: "Deimos",
        img: "pictures/Deimos.jpg",
        alt: "...",
    },
    {
        id: 7,
        title: "Delta",
        img: "pictures/Delta.jpg",
        alt: "...",
    },
    {
        id: 8,
        title: "Céphée",
        img: "pictures/Céphée2.jpg",
        alt: "...",
    },
    {
        id: 9,
        title: "Cassiopée",
        img: "pictures/Cassiopée.jpg",
        alt: "...",
    },
    {
        id: 10,
        title: "Europe",
        img: "pictures/Europe.jpg",
        alt: "...",
    },
    {
        id: 11,
        title: "Kardia",
        img: "pictures/Kardia.jpg",
        alt: "...",
    },
    {
        id: 12,
        title: "Le cube",
        img: "pictures/lecube.jpg",
        alt: "...",
    },
    {
        id: 13,
        title: "Encelade",
        img: "pictures/Encelade.jpg",
        alt: "...",
    },
    {
        id: 14,
        title: "Orion",
        img: "pictures/ORION.jpg",
        alt: "...",
    },
    {
        id: 15,
        title: "Titan suspension",
        img: "pictures/titansuspension3.jpg",
        alt: "...",
    },
    {
        id: 16,
        title: "Titan lévitation",
        img: "pictures/Titanlévitation.jpg",
        alt: "...",
    },
    {
        id: 17,
        title: "Titan",
        img: "pictures/Titan.jpg",
        alt: "...",
    },
    {
        id: 18,
        title: "Véga",
        img: "pictures/Véga.jpg",
        alt: "...",
    },
    // {
    //     id: 19,
    //     title: "Callisto terre",
    //     img: "pictures/Callistoterrecouleur.jpg",
    //     alt: "...",
    // },

]

const gallery = [
    {
        id: 1,
        title: "....",
        img: "gallerie/Hypérion-bleu.jpg",
        alt: "...",
    },
    {
        id: 2,
        title: "....",
        img: "gallerie/armoire1.jpg",
        alt: "...",
    },
    {
        id: 3,
        title: "....",
        img: "gallerie/Hypérion-galerie-photo.jpg",
        alt: "...",
    },
    {
        id: 4,
        title: "....",
        img: "gallerie/IMG_1426.jpg",
        alt: "...",
    },
    {
        id: 5,
        title: "....",
        img: "gallerie/IMG_1427.jpg",
        alt: "...",
    },
    {
        id: 6,
        title: "....",
        img: "gallerie/IMG_1430.jpg",
        alt: "...",
    },
    // {
    //     id: 7,
    //     title: "....",
    //     img: "gallerie/lampe-color.jpg",
    //     alt: "...",
    // },
    {
        id: 8,
        title: "....",
        img: "gallerie/lampe.jpg",
        alt: "...",
    },
    {
        id: 9,
        title: "....",
        img: "gallerie/chaos.jpg",
        alt: "...",
    },
    {
        id: 10,
        title: "....",
        img: "gallerie/beno-chaise.jpg",
        alt: "...",
    },
    // {
    //     id: 11,
    //     title: "....",
    //     img: "gallerie/IMG_1426.jpg",
    //     alt: "...",
    // },
]
const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.nav-list');
btnMenu.addEventListener('click',()=>{
    menu.classList.toggle('active')
})

const allNavLinks = document.querySelectorAll('.item-nav');
 allNavLinks.forEach(item=>{
    item.addEventListener('click',()=>{

        menu.classList.toggle('active')
    }) 
 })

const containerAll = document.querySelector('.container-all')
for (let i = 0; i < oeuvres.length; i++) {
    divContainer = document.createElement('div');
    divContainer.classList.add('container-img');
    img = document.createElement('img');
    img.setAttribute("src", oeuvres[i].img)
    spann = document.createElement('span')
    spann.classList.add('title')
    spann.textContent = oeuvres[i].title
    containerAll.appendChild(divContainer)
    divContainer.appendChild(img)
    divContainer.appendChild(spann)
   
}
const galleryContainer = document.querySelector('.gallery');
for(gall of gallery){
    let divGallery = document.createElement("div")
   let imgGallery= document.createElement('img');
   imgGallery.setAttribute("src", gall.img)
   divGallery.appendChild(imgGallery)
    galleryContainer.appendChild (divGallery)
}