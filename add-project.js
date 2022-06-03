
const mainContent = document.querySelector(".main-content");

const addProject = () => {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");
    mainContent.appendChild(projectContainer);

    const projectImage = document.createElement("div");
    projectImage.classList.add("project-img");

    const thumbnail = document.createElement("img");
    thumbnail.setAttribute("alt", "Challlenge Preview Image");
    projectImage.appendChild(thumbnail);
    projectContainer.appendChild(projectImage);

    const projectContent = document.createElement("div");
    projectContent.classList.add("project-content");
    projectContainer.appendChild(projectContent);

    const projectHeader = document.createElement("div");
    projectHeader.classList.add("project-header");
    projectContent.appendChild(projectHeader);

    const projectDescription = document.createElement("div");
    projectDescription.classList.add("project-description");
    projectContent.appendChild(projectDescription);

    const projectTags = document.createElement("div");
    projectTags.classList.add("project-tags");
    projectContent.appendChild(projectTags);

    const tagContainer = document.createElement("div");
    tagContainer.classList.add("tag-container");
    projectTags.appendChild(tagContainer);

    const projectLinkContainer = document.createElement("div");
    projectLinkContainer.classList.add("project-link-container");
    projectContent.appendChild(projectLinkContainer);

    const liveLink = document.createElement("a");
    liveLink.classList.add("project-link", "site");
    liveLink.innerHTML = "View Project"
    projectLinkContainer.appendChild(liveLink);

    const challengeLink = document.createElement("a");
    challengeLink.classList.add("project-link", "challenge");
    challengeLink.innerHTML = "View Challenge"
    projectLinkContainer.appendChild(challengeLink);

    const githubLink = document.createElement("a");
    githubLink.classList.add("project-link", "github");
    projectLinkContainer.appendChild(githubLink);

    const githubLogo = document.createElement("img");
    githubLogo.setAttribute("src" ,"assets/GitHub-Mark-64px.png");
    githubLink.appendChild(githubLogo);

}