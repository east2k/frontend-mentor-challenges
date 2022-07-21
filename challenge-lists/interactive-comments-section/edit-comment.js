const interactEdit = document.querySelectorAll(".interact-edit");
const commentContent = document.querySelectorAll(".comment-content.edit");
const updateComment = document.querySelectorAll(".comment-input-button.edit");

interactEdit.forEach((edit, index) => {
    edit.addEventListener('click', () => {
        commentContent[index].classList.add("active-edit");
    });
});

updateComment.forEach((update, index) => {
    update.addEventListener('click', () => {
        commentContent[index].classList.remove("active-edit");
    })
})