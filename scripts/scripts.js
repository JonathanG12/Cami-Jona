document.addEventListener('DOMContentLoaded', function () {
    const photoGrid = document.getElementById('photo-grid');
    const carousel = document.getElementById('carousel');
    const videoGrid = document.getElementById('video-grid');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    // Función para cargar imágenes individuales dinámicamente
    function loadIndividualImages() {
        const imagePath = 'imagenes/';
        const imageExtensions = ['.jpg', '.jpeg', '.png'];
        const numberOfImages = 71; // Ajusta según la cantidad de imágenes en la carpeta

        for (let i = 1; i <= numberOfImages; i++) {
            const img = new Image();
            img.src = `${imagePath}imagen${i}${imageExtensions[0]}`; // Suponiendo que solo usarás la primera extensión
            img.alt = `Imagen ${i}`;
            img.onerror = function () {
                this.style.display = 'none';
            };
        
            const photoWrapper = document.createElement('div');
            photoWrapper.className = 'photo-item';
            photoWrapper.appendChild(img);
            photoGrid.appendChild(photoWrapper);
        }
    }

    // Función para cargar videos dinámicamente
    function loadVideos() {
        const videoPath = 'videos/';
        const videoExtensions = ['.mp4'];
        const numberOfVideos = 12; // Ajusta según la cantidad de videos en la carpeta

        for (let i = 1; i <= numberOfVideos; i++) {
            videoExtensions.forEach(ext => {
                const videoWrapper = document.createElement('div');
                videoWrapper.className = 'video-wrapper';
                const video = document.createElement('video');
                video.controls = true;
                video.src = `${videoPath}video${i}${ext}`;
                video.onerror = function () {
                    this.style.display = 'none';
                };
                videoWrapper.appendChild(video);
                videoGrid.appendChild(videoWrapper);
            });
        }
    }

    let currentIndex = 0;
    let carouselSlides = [];

    // Función para cargar imágenes del carrusel dinámicamente
    function loadCarouselImages() {
        const carouselPath = 'imagenes_carrusel/';
        const carouselExtensions = ['.jpg', '.jpeg', '.png'];
        const numberOfCarouselImages = 5; // Ajusta según la cantidad de imágenes en la carpeta

        
    }

    // Mostrar el slide actual
    function showSlide(index) {
        carouselSlides.forEach((slide, idx) => {
            if (idx === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    // Inicializar la carga de imágenes individuales, del carrusel y de videos
    loadIndividualImages();
    loadCarouselImages();
    loadVideos();

    // Botones de navegación
    document.getElementById('carta-button').addEventListener('click', function () {
        window.location.href = 'carta.html';
    });

    document.getElementById('back-button').addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    // Eventos u otras funciones relacionadas pueden seguir aquí
});
