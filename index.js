const commentsContainer = document.getElementById("container");
const model = document.getElementById("model");
const modalContent = document.getElementById("model-content");
const modalButton = document.getElementById("model-close-btn");

let page = 1;
function fetchComments() {
  fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`)
    .then((res) => res.json())

    .then((Comments) => {
      Comments.forEach((ele) => {
        const commentBox = document.createElement("div");
        commentBox.classList.add("comment");
        commentBox.innerHTML = `<p><strong>${ele.id}</strong> <br>${ele.name}</p>

                <p>${ele.body}</p>
                `;

        commentBox.addEventListener("click", () => onOpenModal(ele));

        commentsContainer.appendChild(commentBox);
      });
    });
  page++;
}

function ScrollEvent() {
  const scrollY = window.scrollY;
  const innerHeight = window.innerHeight;
  const scrollHeight = document.body.scrollHeight;
  if (scrollY + innerHeight >= scrollHeight) {
    fetchComments();
  }
}
function onOpenModal(ele) {
  modalContent.innerHTML = `<p><strong>Username:</strong>${ele.name}</p> <br>
    <p><strong>Email:</strong>${ele.email}</p>
    <br>
    <p>${ele.body}</p>
    `;
  model.style.display = "block";
}

function onCloseModal() {
  model.style.display = "none";
}
window.addEventListener("scroll", ScrollEvent);
modalButton.addEventListener("click", onCloseModal);

fetchComments();
