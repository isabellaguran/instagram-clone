// Get the necessary DOM elements
const searchInput = document.querySelector('.search-container input[type="text"]');
const likeButtons = document.querySelectorAll('.actions button:first-child');
const commentInput = document.querySelector('.add-comment input[type="text"]');
const commentButton = document.querySelector('.add-comment button');

// Add event listeners
searchInput.addEventListener('input', handleSearch);
likeButtons.forEach(button => {
  button.addEventListener('click', handleLike);
});
commentButton.addEventListener('click', handleComment);

// Handle search functionality
function handleSearch(event) {
  const searchTerm = event.target.value.toLowerCase();
  // Perform search logic based on the searchTerm
  // Update the UI to display the search results
  console.log('Search term:', searchTerm);
}

// Handle like functionality
function handleLike(event) {
  const post = event.target.closest('article');
  // Update the UI to reflect the liked state of the post
  console.log('Liked post:', post);
}

// Handle comment functionality
function handleComment() {
  const post = document.querySelector('.posts article');
  const comment = commentInput.value;
  // Perform logic to add the comment to the post
  // Update the UI to display the new comment
  console.log('Posted comment:', comment);
  commentInput.value = '';
}


//In this example, we're using JavaScript to add functionality to certain elements of the Instagram clone. Here's a breakdown of what each function does:

//handleSearch: This function is called when the user inputs text into the search input field. It retrieves the search term from the input field, performs the search logic (e.g., filtering posts based on the search term), and updates the UI to display the search results. In this example, we're simply logging the search term to the console.

//handleLike: This function is called when the user clicks on a like button. It retrieves the parent post element using the closest method, updates the UI to reflect the liked state of the post (e.g., changing the button color or icon), and performs any additional logic related to liking a post. In this example, we're logging the post to the console.

//handleComment: This function is called when the user clicks the "Post" button after entering a comment. It retrieves the first post element, retrieves the comment from the input field, performs any necessary logic to add the comment to the post (e.g., updating the comment count), and updates the UI to display the new comment. In this example, we're logging the comment to the console and clearing the input field.

//Note that this JavaScript code assumes you have already rendered the HTML structure for the Instagram clone and the necessary elements are present on the page. You would typically include this JavaScript code within a <script> tag or link it from an external JavaScript file in your HTML document.
