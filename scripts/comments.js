let comments = [
  { name: "Amela", text: "This is a comment" },
  { name: "Ajla", text: "This is great!" },
  { name: "Anel", text: "Could have used better styling" },
];
let commentToEdit = null;
let commentToDelete = null;

function displayComments() {
  const commentList = document.getElementById("comment-list");
  commentList.innerHTML = "";

  comments.forEach((comment, index) => {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.innerHTML = `
                <div>
                    <strong>${comment.name}</strong>: <p>${comment.text}</p>
                </div>
                <div class="comment-actions">
                    <button class="edit-btn" onclick="openEditDialog(${index})">Edit</button>
                    <button class="delete-btn" onclick="openDeleteDialog(${index})">Delete</button>
                </div>
            `;
    commentList.appendChild(commentDiv);
    console.log(comment);
  });
}

function addComment() {
  const name = document.getElementById("comment-name").value;
  const text = document.getElementById("comment-text").value;

  if (name && text) {
    comments.push({ name, text });
    displayComments();
  }
}

function openEditDialog(index) {
  commentToEdit = index;
  const comment = comments[index];
  document.getElementById("edit-name").value = comment.name;
  document.getElementById("edit-text").value = comment.text;
  openDialog("edit-dialog");
}

function openDeleteDialog(index) {
  commentToDelete = index;
  openDialog("delete-dialog");
}

function submitEdit(event) {
  event.preventDefault();
  if (commentToEdit !== null) {
    comments[commentToEdit].name = document.getElementById("edit-name").value;
    comments[commentToEdit].text = document.getElementById("edit-text").value;
    commentToEdit = null;
    displayComments();
  }
  closeDialog();
}

function confirmDelete() {
  if (commentToDelete !== null) {
    comments.splice(commentToDelete, 1);
    commentToDelete = null;
    displayComments();
  }
  closeDialog();
}

function openDialog(dialogId) {
  document.getElementById("dialog-overlay").style.display = "block";
  document.getElementById(dialogId).style.display = "block";
}

function closeDialog() {
  document.getElementById("dialog-overlay").style.display = "none";
  document
    .querySelectorAll(".dialog")
    .forEach((dialog) => (dialog.style.display = "none"));
}
displayComments();
