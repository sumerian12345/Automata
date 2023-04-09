const container = document.querySelector('.content-container');

container.addEventListener('scroll', function() {
  if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
    // Load more content using AJAX and append it to the container
    // ...
  }
});
