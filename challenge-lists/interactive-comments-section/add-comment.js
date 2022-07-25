const commentButton = document.querySelector(".comment-input-button");
const cardCommentContainer = document.querySelector(".content-card-comment-container");

const addComment = () =>{
    for(let i = 0 ; i < 1;i++){
        const activeComment = document.createElement("div");
        activeComment.classList.add("active-comment");
        cardCommentContainer.appendChild(activeComment);
    
        const cardCommentDiv = document.createElement("div");
        cardCommentDiv.classList.add("content-card-comment");
        activeComment.appendChild(cardCommentDiv);
    
        // comment rating 
        const commentRatingDiv = document.createElement("div");         
        commentRatingDiv.classList.add("comment-rating");
        cardCommentDiv.appendChild(commentRatingDiv);
    
        const ratingIconOneDiv = document.createElement("div");
        ratingIconOneDiv.classList.add("rating-icon");
        commentRatingDiv.appendChild(ratingIconOneDiv);
    
        const iconPlusImg = document.createElement("img");
        iconPlusImg.setAttribute("src", "images/icon-plus.svg");
        iconPlusImg.setAttribute("alt", "Plus Icon");
        iconPlusImg.classList.add("icon-plus");
        ratingIconOneDiv.appendChild(iconPlusImg);
    
        const ratingCurrentP = document.createElement("p");
        ratingCurrentP.classList.add("rating-current");
        commentRatingDiv.appendChild(ratingCurrentP);
    
        const ratingIconTwoDiv = document.createElement("div");
        ratingIconTwoDiv.classList.add("rating-icon");
        commentRatingDiv.appendChild(ratingIconTwoDiv);
    
        const iconMinusImg = document.createElement("img");
        iconMinusImg.setAttribute("src", "images/icon-minus.svg");
        iconMinusImg.setAttribute("alt", "Plus Minus");
        iconMinusImg.classList.add("icon-minus");
        ratingIconTwoDiv.appendChild(iconMinusImg);
    
        // comment body
        const commentBodyDiv = document.createElement("div");
        commentBodyDiv.classList.add("comment-body");
        cardCommentDiv.appendChild(commentBodyDiv);
    
        const commentHeaderDiv = document.createElement("div");
        commentHeaderDiv.classList.add("comment-header");
        commentBodyDiv.appendChild(commentHeaderDiv);
    
        const headerUserDiv = document.createElement("div");
        headerUserDiv.classList.add("header-user");
        commentHeaderDiv.appendChild(headerUserDiv);
    
        const userImageContainerDiv = document.createElement("div");
        userImageContainerDiv.classList.add("user-image-container");
        headerUserDiv.appendChild(userImageContainerDiv);
    
        const userImageImg = document.createElement("img");
        userImageImg.classList.add("user-image");
        userImageImg.setAttribute("alt", "User Image");
        userImageContainerDiv.appendChild(userImageImg);
    
        const userNameP = document.createElement("p");
        userNameP.classList.add("user-name");
        headerUserDiv.appendChild(userNameP);
    
        const userTimespanP = document.createElement("p");
        userTimespanP.classList.add("user-timespan");
        headerUserDiv.appendChild(userTimespanP);
    
        const timespanNumberSpan = document.createElement("span");
        timespanNumberSpan.classList.add("timespan-number");
        userTimespanP.appendChild(timespanNumberSpan);
    
        const timespanAgeSpan = document.createElement("span");
        timespanAgeSpan.classList.add("timespan-age");
        userTimespanP.appendChild(timespanAgeSpan);
    
        const headerInteractionDiv = document.createElement("div");
        headerInteractionDiv.classList.add("header-interact");
        commentHeaderDiv.appendChild(headerInteractionDiv);
    
        const interactReplyDiv = document.createElement("div");
        interactReplyDiv.classList.add("interact-reply");
        headerInteractionDiv.appendChild(interactReplyDiv);
    
        const replyIconImg = document.createElement("img");
        replyIconImg.classList.add("reply-icon");
        replyIconImg.setAttribute("src" , "images/icon-reply.svg");
        replyIconImg.setAttribute("alt" , "Reply Icon");
        interactReplyDiv.appendChild(replyIconImg);
    
        const replyTextP = document.createElement("p");
        replyTextP.classList.add("reply-text");
        replyTextP.innerHTML = "Reply"
        interactReplyDiv.appendChild(replyTextP);
    
        const commentContentDiv = document.createElement("div");
        commentContentDiv.classList.add("comment-content");
        commentBodyDiv.appendChild(commentContentDiv);
    
        const commentTextP = document.createElement("p");
        commentTextP.classList.add("comment-text");
        commentContentDiv.appendChild(commentTextP);
    
        // placeholder values
        ratingCurrentP.innerHTML = commentList.comments[0].score;
        userNameP.innerHTML = commentList.comments[0].user.username;
        userImageImg.setAttribute("src", commentList.comments[0].user.image.png);
        userTimespanP.innerHTML = timespanNumberSpan.innerHTML + " " + timespanAgeSpan.innerHTML + " ago";
        userTimespanP.innerHTML = commentList.comments[0].score;
        commentTextP.innerHTML =  commentList.comments[0].content;
        // if(commentList.comments[i].replies.length === 0){
        //     ratingCurrentP.innerHTML = commentList.comments[i].score;
        //     userNameP.innerHTML = commentList.comments[i].user.username;
        //     userImageImg.setAttribute("src", commentList.comments[i].user.image.png);
        //     userTimespanP.innerHTML = timespanNumberSpan.innerHTML + " " + timespanAgeSpan.innerHTML + " ago";
        //     userTimespanP.innerHTML = commentList.comments[i].score;
        //     commentTextP.innerHTML =  commentList.comments[i].content;
        // }
    
    }
}


// commentButton.addEventListener('click', () => {
    
// });