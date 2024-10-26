const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description: "If you enjoy stories about seventh sons of seventh sons and magic, this is the book for you.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐",
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description: "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Rick tries Norse mythology, with great results.",
    imgSrc: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐",
  },
  {
    id: 3,
    title: "Belgariad Book One: Pawn of Prophecy",
    date: "Feb 12, 2022",
    description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf—a father and daughter granted near-immortality by one of the Gods—set out on a complex mission.",
    imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    imgAlt: "Book cover for Pawn of Prophecy",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐⭐"
  }
];

const articleList = document.getElementById("article-list");

articles.forEach((article) => {
  // Create a new article container
  const articleContainer = document.createElement("div");
  articleContainer.classList.add("book-content");

  // Template literal for article content
  const articleContent = `
    <aside class="sidebar">
      <span>${article.date}</span>
      <span>${article.ages}</span>
      <span>${article.genre}</span>
      <span>${article.stars}</span>
    </aside>
    <section class="book-details">
      <h2>${article.title}</h2>
      <img src="${article.imgSrc}" alt="${article.imgAlt}" class="book-cover">
      <p>${article.description}</p>
      <a href="#" class="read-more">Read More...</a>
    </section>
  `;

  // Set the inner HTML of the new article container
  articleContainer.innerHTML = articleContent;

  articleList.appendChild(articleContainer);
});
