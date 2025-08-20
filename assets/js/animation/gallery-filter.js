export function galleryFilter() {
    const filterContainer = document.querySelector("#gallery-filters");
    const galleryItems = document.querySelectorAll("#gallery-grid .gallery-item");

    if (!filterContainer || galleryItems.length === 0) return;

    filterContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("filter-btn")) {
            filterContainer.querySelector(".active").classList.remove("active");
            event.target.classList.add("active");

            const filterValue = event.target.getAttribute("data-filter");

            galleryItems.forEach(item => {
                if (item.classList.contains(filterValue) || filterValue === "all") {
                    item.classList.remove("hidden");
                } else {
                    item.classList.add("hidden");
                }
            });
        }
    });
}