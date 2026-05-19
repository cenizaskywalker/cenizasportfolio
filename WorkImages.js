function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);

    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

const images = [
    { src: "ImagesWorks/BotonesFrame.png", name: "Project 1" },
    { src: "ImagesWorks/ShopFrame.png", name: "Project 2" },
    { src: "ImagesWorks/SettingsFrame.png", name: "Project 3" },
    { src: "ImagesWorks/BotonesArriba.png", name: "Project 4" },
];

function createImageViewer() {
    const viewer = document.createElement("div");

    viewer.id = "imageViewer";

    viewer.innerHTML = `
        <div class="image-viewer-overlay"></div>

        <div class="image-viewer-content">
            <button class="close-viewer-btn">✕</button>

            <img class="viewer-image" src="" alt="">
        </div>
    `;

    document.body.appendChild(viewer);

    const closeBtn = viewer.querySelector(".close-viewer-btn");
    const overlay = viewer.querySelector(".image-viewer-overlay");

    function closeViewer() {
        viewer.classList.remove("active");
    }

    closeBtn.addEventListener("click", closeViewer);
    overlay.addEventListener("click", closeViewer);
}

function openImageViewer(src) {
    const viewer = document.getElementById("imageViewer");

    if (!viewer) return;

    const image = viewer.querySelector(".viewer-image");

    image.src = src;

    viewer.classList.add("active");
}

function loadImages() {
    const container = document.getElementById("videosContainer");

    if (!container) return;

    container.innerHTML = "";

    images.forEach(image => {
        const card = document.createElement("div");

        card.className = "video-card fade-in-on-scroll visible";

        const frame = document.createElement("div");
        frame.className = "image-frame";

        const img = document.createElement("img");

        img.className = "work-image";
        img.src = image.src;
        img.alt = image.name;
        img.loading = "lazy";

        img.addEventListener("click", () => {
            openImageViewer(image.src);
        });

        const info = document.createElement("div");

        info.className = "video-info";
        info.innerHTML = `<p>${image.name}</p>`;

        frame.appendChild(img);

        card.appendChild(frame);
        card.appendChild(info);

        container.appendChild(card);
    });

    document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

window.addEventListener("DOMContentLoaded", () => {
    createImageViewer();
    loadImages();
});