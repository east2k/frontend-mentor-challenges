const interactReply = document.querySelectorAll(".interact-reply");
const commentCard = document.querySelectorAll(".content-card-comment");
const userName = document.querySelectorAll(".user-name");

interactReply.forEach((reply, index) => {
    reply.addEventListener('click', () => {
        const currentActive = document.querySelector(".content-card-comment.input-reply");
        if(currentActive !== null) currentActive.remove();
        createReplyBox(index)
    });
});