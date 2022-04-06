document.addEventListener("DOMContentLoaded", function () {
  const url = new URL(window.location.href)
  if (!url.pathname.includes('/results')) return 

  const books = url.searchParams.getAll("books");

  if (books.length === 0) {
    document
      .getElementById("books-read")
      .classList.add("display-none");
    
    document
      .getElementById("all-books")
      .classList.add("display-none");
  } else {
    document
      .getElementById("no-books")
      .classList.add("display-none");

    Array.from(document
      .getElementById("all-books")
      .children)
      .forEach((book) => {
        if (!books.includes(book.id)) {
          book.classList.add("display-none");
        }
      });
  };
});