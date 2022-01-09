const oeuvres = [
    {
        id: 1,
        title: "Alpha mini",
        img: "pictures/Alphamini1.jpeg",
        alt: "..."
    },
    {
        id: 2,
        title: "Callisto",
        img: "pictures/Callisto.jpeg",
        alt: "...",
    },
    {
        id: 3,
        title: "Céphée",
        img: "pictures/Céphée.jpeg",
        alt: "...",
    },
    {
        id: 4,
        title: "Beta",
        img: "pictures/Beta.jpeg",
        alt: "...",
    },
    {
        id: 5,
        title: "Céphée Maxi",
        img: "pictures/CéphéeMaxi.jpeg",
        alt: "...",
    },
    {
        id: 6,
        title: "Deimos",
        img: "pictures/Deimos.jpeg",
        alt: "...",
    },
    {
        id: 7,
        title: "Delta",
        img: "pictures/Delta.jpeg",
        alt: "...",
    },
    {
        id: 8,
        title: "Céphée",
        img: "pictures/Céphée.jpeg",
        alt: "...",
    },
    {
        id: 9,
        title: "Cassiopée",
        img: "pictures/Cassiopée.jpeg",
        alt: "...",
    },
    {
        id: 10,
        title: "Encelade",
        img: "pictures/Europe.jpeg",
        alt: "...",
    },
    {
        id: 11,
        title: "Kardia",
        img: "pictures/Kardia.jpeg",
        alt: "...",
    },
    {
        id: 12,
        title: "Le cube",
        img: "pictures/lecube.jpeg",
        alt: "...",
    },
    {
        id: 13,
        title: "Kardia",
        img: "pictures/Kardia.jpeg",
        alt: "...",
    },
    {
        id: 14,
        title: "Orion",
        img: "pictures/ORION.jpeg",
        alt: "...",
    },
    {
        id: 15,
        title: "Titan suspension",
        img: "pictures/titansuspension3.jpeg",
        alt: "...",
    },
    {
        id: 16,
        title: "Titan lévitation",
        img: "pictures/Titanlévitation.jpeg",
        alt: "...",
    },
    {
        id: 17,
        title: "Titan",
        img: "pictures/Titan.jpeg",
        alt: "...",
    },
    {
        id: 18,
        title: "Véga",
        img: "pictures/Véga.jpeg",
        alt: "...",
    },

]

const gallery = [
    {
        id: 1,
        title: "....",
        img: "....",
        alt: "...",
    },
    {
        id: 2,
        title: "....",
        img: "....",
        alt: "...",
    },
    {
        id: 3,
        title: "....",
        img: "....",
        alt: "...",
    },
    {
        id: 4,
        title: "....",
        img: "....",
        alt: "...",
    },
    {
        id: 5,
        title: "....",
        img: "....",
        alt: "...",
    },
    {
        id: 6,
        title: "....",
        img: "....",
        alt: "...",
    },
]


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
    console.log(containerAll);
}
// <div class="container">
//   <img src="pictures/6AFE3D9C-E1E5-45C8-BB40-D8B7631D0A07.jpeg" alt="">
//    <span class="title">Lorem ipsum dolor</span>
//   <span class="text">Morbi diam viverra mattis sociis magna, habitasse penatibus non lectus</span>
// </div>