export function galleryModal() {
    const modal = document.querySelector("#gallery-modal");
    const modalContent = document.querySelector("#modal-content");
    const modalDescription = document.querySelector("#modal-description");
    const closeModalBtn = document.querySelector("#modal-close-btn");
    const galleryGrid = document.querySelector("#gallery-grid");

    if (!modal || !galleryGrid) return;

    const openModal = (event) => {
        const item = event.target.closest(".gallery-item");
        if (!item) return;
        event.preventDefault();

        const description = item.dataset.description || "Tidak ada keterangan.";
        const mediaElement = item.querySelector("img, video");
        if (!mediaElement) return;

        modalContent.innerHTML = '';

        if (mediaElement.tagName === 'IMG') {
            const newImg = document.createElement('img');
            newImg.src = mediaElement.src;
            newImg.alt = mediaElement.alt;
            newImg.className = 'w-full h-full object-contain';
            modalContent.appendChild(newImg);
        } else if (mediaElement.tagName === 'VIDEO') {
            const newVid = document.createElement('video');
            newVid.src = mediaElement.querySelector('source').src;
            newVid.className = 'w-full h-full';
            newVid.controls = true;
            newVid.autoplay = true;
            modalContent.appendChild(newVid);
        }

        modalDescription.textContent = description;
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    };

    const closeModal = () => {
        const video = modalContent.querySelector('video');
        if (video) video.pause();
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    };

    galleryGrid.addEventListener("click", openModal);
    closeModalBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (event) => {
        if (event.target === modal) closeModal();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });
}