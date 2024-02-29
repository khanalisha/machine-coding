# machine-coding

Infinite Scrolling with Modal Comments <br>
This project demonstrates how to implement infinite scrolling and modal popups for displaying comments fetched from a JSON API. When users scroll to the bottom of the page, additional comments are loaded dynamically. Clicking on a comment opens a modal displaying more details about that comment.

# Features

Infinite scrolling: New comments are fetched and displayed as the user scrolls down. <br>
Modal popup: Clicking on a comment opens a modal displaying additional details such as the username, email, and comment body. <br>
Fetching comments from a JSON API: Comments are fetched from the JSONPlaceholder API. <br>

# Technologies Used

HTML <br>
CSS <br>
JavaScript <br>


# Clone the repository:

bash <br>
Copy code
git clone "https://github.com/khanalisha/machine-coding.git"  <br>
Open the index.html file in your web browser.

# Dependencies

None

# How it Works

The fetchComments function is responsible for fetching comments from the JSONPlaceholder API and appending them to the DOM.
Infinite scrolling is achieved by detecting when the user has scrolled to the bottom of the page (ScrollEvent function) and triggering the fetchComments function to load more comments.
Clicking on a comment invokes the onOpenModal function, which populates and displays the modal with details of the clicked comment.
Closing the modal is handled by the onCloseModal function, triggered when the user clicks the close button (modal-close-btn).
