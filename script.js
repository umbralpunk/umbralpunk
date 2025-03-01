document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".interactive").forEach(element => {
        element.addEventListener("mouseover", () => {
            let text = element.getAttribute("data-text");
            let tooltip = document.createElement("div");
            tooltip.innerText = text;
            tooltip.classList.add("tooltip");
            document.body.appendChild(tooltip);
            tooltip.style.left = `${event.clientX}px`;
            tooltip.style.top = `${event.clientY}px`;

            element.addEventListener("mouseleave", () => {
                tooltip.remove();
            });
        });

        element.addEventListener("click", () => {
            alert("Aquí iría el contenido del " + element.getAttribute("data-text"));
        });
    });
});
