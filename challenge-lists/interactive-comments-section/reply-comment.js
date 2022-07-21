const interactReply = document.getElementsByClassName("interact-reply");
const commentCard = document.querySelectorAll(".content-card-comment");
const userName = document.querySelectorAll(".user-name");

for (let i = 0; i < interactReply.length; i++) {
    interactReply[i].addEventListener('click', () => {
        console.log(interactReply[i]);
        const currentActive = document.querySelector(".content-card-comment.input-reply");
        if (currentActive !== null) currentActive.remove();
        createReplyBox(i)
    });
}