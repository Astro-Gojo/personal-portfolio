const projects = [
    {
        title: "Personal Portfolio",
        description: "My personal portfolio website",
        technologies: "HTML, CSS, JavaScript, Node.js, Express, MySQL"
    },
    {
        title: "Weather App",
        description: "Weather forecast application",
        technologies: "JavaScript, API"
    }
];

const container = document.getElementById("projects-container");

projects.forEach(project => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.technologies}</p>
    `;

    container.appendChild(card);

});