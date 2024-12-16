const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    // Toggle active class on the clicked header
    header.classList.toggle("active");

    // Close other accordion items
    document.querySelectorAll(".accordion-header").forEach((otherHeader) => {
      if (otherHeader !== header) {
        otherHeader.classList.remove("active");
        otherHeader.nextElementSibling.style.maxHeight = 0;
        otherHeader.nextElementSibling.style.padding = "0 15px";
      }
    });

    // Toggle the content visibility
    const content = header.nextElementSibling;
    if (header.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.padding = "15px";
    } else {
      content.style.maxHeight = 0;
      content.style.padding = "0 15px";
    }
  });
});
