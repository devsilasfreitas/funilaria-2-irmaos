const images = [
    "https://maintenance-minio.kdminhaoficina.com.br/blog/2023/07/o-que-e-uma-funilaria-e-pintura.jpg",
    "https://onmotor.com.br/wp-content/uploads/2023/04/2023-05-11-organizar-uma-oficina-de-funilaria-1280x720.jpg",
    "https://onmotor.com.br/wp-content/uploads/2022/12/2023-01-funilaria-e-pintura-automotiva-1280x720.jpg"
];

const carousel = document.getElementsByClassName("carousel")[0];
let currentImage = 0;


carousel.style.setProperty("background-image", `url("${images[currentImage]}")`);
currentImage++;

setInterval(() => {
    carousel.style.setProperty("background-image", `url("${images[currentImage]}")`);
    currentImage++;
    if (currentImage === images.length) {
        currentImage = 0;
    }
}, 5 * 1000);