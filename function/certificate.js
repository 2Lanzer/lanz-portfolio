// Select modal elements
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

// Add click event to all certificate images
document.querySelectorAll(".cert-image").forEach((img) => {
    img.addEventListener("click", (e) => {
        modal.style.display = "flex";
        modalImg.src = e.target.dataset.cert; // Use data-cert attribute for full image
        modalImg.alt = e.target.alt; // Set alt text
    });
});

// Close modal when 'x' button is clicked
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal content
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
