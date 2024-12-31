function filterItems(selectedTag) {
    const items = document.querySelectorAll(".item");
    const links = document.querySelectorAll(".filter-link");

    items.forEach((item) => {
        const tags = item.getAttribute("data-tags").split(" ");
        if (selectedTag === "all" || tags.includes(selectedTag)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });

    // Update active link style
    links.forEach((link) => {
        link.classList.remove("active");
    });
    if (selectedTag !== "all") {
        document
            .querySelector(`.filter-link[onclick="filterItems('${selectedTag}')"]`)
            .classList.add("active");
    } else {
        links[0].classList.add("active");
    }
}