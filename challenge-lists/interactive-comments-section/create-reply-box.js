const activeComment = document.querySelectorAll(".active-comment");
const commentCard = document.querySelectorAll(".content-card-comment");

const createReplyBox = (index) => {
    const cardCommentInputReplyDiv = document.createElement("div");
    cardCommentInputReplyDiv.classList.add("content-card-comment");
    cardCommentInputReplyDiv.classList.add("input");
    cardCommentInputReplyDiv.classList.add("input-reply");
    // cardCommentContainer.appendChild(cardCommentInputReplyDiv);

    const inputImageContainerDiv = document.createElement("div");
    inputImageContainerDiv.classList.add("comment-input-image-container");
    cardCommentInputReplyDiv.appendChild(inputImageContainerDiv);

    const inputImageImg = document.createElement("img");
    inputImageImg.classList.add("comment-input-image");
    inputImageImg.setAttribute("src", "images/avatars/image-juliusomo.png");
    inputImageImg.setAttribute("alt", "User Image");
    inputImageContainerDiv.appendChild(inputImageImg);

    const commentBoxTextarea = document.createElement("textarea");
    commentBoxTextarea.classList.add("comment-box");
    commentBoxTextarea.setAttribute("placeholder", "Add a comment...");
    cardCommentInputReplyDiv.appendChild(commentBoxTextarea);

    const commentInputButtonDiv = document.createElement("button");
    commentInputButtonDiv.classList.add("comment-input-button");
    commentInputButtonDiv.innerHTML = "Reply";
    cardCommentInputReplyDiv.appendChild(commentInputButtonDiv);

    // cardCommentInputReplyDiv.after(reply);
    // cardCommentContainer.insertBefore(cardCommentInputReplyDiv, cardCommentContainer.children[index + 1]);
    // commentCard[index].parentElement.insertBefore
    if (activeComment[index].children[0].classList.contains("reply")) {
        cardCommentInputReplyDiv.classList.add("reply");
    }
    if (activeComment[index].children.length > 2) {
        console.log("true")
        commentCard[index].insertBefore(cardCommentInputReplyDiv, commentCard[index]);
        // commentCard[index].insertBefore(cardCommentInputReplyDiv, commentCard[index].nextSibling);
    }
    activeComment[index].appendChild(cardCommentInputReplyDiv);
}