const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        document.querySelector(".filter-btn.active")?.classList.remove("active");

        button.classList.add("active");

        const filter = button.dataset.filter;

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const category = card.querySelector(".badge").textContent;

            if (filter === "All" || category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});