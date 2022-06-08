const mainContent = document.querySelector(".main-content");

const renderChallenges = (challenges) => {
  mainContent.innerHTML = "";
  challenges.forEach(renderChallenge);
};

const renderChallenge = (challenge, index, arr) => {
  // create elements
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

  const projectLinkContainer = document.createElement("div");
  projectLinkContainer.classList.add("project-link-container");
  projectContent.appendChild(projectLinkContainer);

  const liveLink = document.createElement("a");
  liveLink.classList.add("project-link", "site");
  liveLink.innerHTML = "View Project";
  liveLink.setAttribute("target", "_blank");
  projectLinkContainer.appendChild(liveLink);

  const challengeLink = document.createElement("a");
  challengeLink.classList.add("project-link", "challenge");
  challengeLink.innerHTML = "View Challenge";
  challengeLink.setAttribute("target", "_blank");
  projectLinkContainer.appendChild(challengeLink);

  const githubLink = document.createElement("a");
  githubLink.classList.add("project-link", "github");
  githubLink.setAttribute("target", "_blank");
  projectLinkContainer.appendChild(githubLink);

  const githubLogo = document.createElement("img");
  githubLogo.setAttribute("src", "assets/GitHub-Mark-64px.png");
  githubLink.appendChild(githubLogo);

  // asign values
  thumbnail.setAttribute("src", challenge.image);
  projectHeader.innerHTML = challenge.name;
  projectDescription.innerHTML = challenge.description;
  projectImage.style.cssText =
    "box-shadow: 0px 10px 5px -5px " + challenge.boxShadow;
  liveLink.setAttribute("href", challenge.liveLink);
  challengeLink.setAttribute("href", challenge.frontendLink);
  githubLink.setAttribute("href", challenge.repositoryLink);

  // Add tags
  for (let e = 0; e < challenge.tags.length; e++) {
    const tagContainer = document.createElement("div");
    tagContainer.classList.add(challenge.tags[e].toLowerCase());
    tagContainer.innerHTML = challenge.tags[e];
    tagContainer.classList.add("tag-container");
    projectTags.appendChild(tagContainer);
  }
};
