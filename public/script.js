fetch("/projects")
.then(response => response.json())
.then(data => {

    const container = document.getElementById("projects-container");

    data.forEach(project => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Technologies:</strong> ${project.technologies}</p>
        `;

        container.appendChild(card);

    });

})
.catch(error => {
    console.log(error);
});