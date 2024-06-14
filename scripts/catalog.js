const showPopup = (id) => {
    let popup = document.getElementById(id);
    popup.classList.toggle("show");

    document.body.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            popup.classList.remove("show");
        }
    });
}  
