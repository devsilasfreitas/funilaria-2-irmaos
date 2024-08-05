const images = [
    "https://maintenance-minio.kdminhaoficina.com.br/blog/2023/07/o-que-e-uma-funilaria-e-pintura.jpg",
    "https://onmotor.com.br/wp-content/uploads/2023/04/2023-05-11-organizar-uma-oficina-de-funilaria-1280x720.jpg",
    "https://onmotor.com.br/wp-content/uploads/2022/12/2023-01-funilaria-e-pintura-automotiva-1280x720.jpg"
];

const carousel = document.getElementsByClassName("carousel")[0];
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let currentImage = 0;

carousel.style.setProperty("background-image", `url("${images[currentImage]}")`);
currentImage++;

let loop = setInterval(() => {
    nextSlide();
}, 5 * 1000);

function nextSlide () {
    carousel.style.setProperty("background-image", `url("${images[currentImage]}")`);
    currentImage++;
    if (currentImage === images.length) {
        currentImage = 0;
    }
}

function prevSlide () {
    carousel.style.setProperty("background-image", `url("${images[currentImage]}")`);
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
}

next.addEventListener("click", () => {
    nextSlide();
    clearInterval(loop);
    loop = setInterval(() => {
        nextSlide()
    }, 5 * 1000);
});

prev.addEventListener("click", () => {
    prevSlide();
    clearInterval(loop);
    loop = setInterval(() => {
        nextSlide();
    }, 5 * 1000);
});