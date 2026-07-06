const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();
        const category = card.querySelector(".badge").textContent.toLowerCase();

        if (title.includes(value) || category.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});