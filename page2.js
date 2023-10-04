const articles = [
    { title: "Article 1", url: "article1.html" },
    { title: "Article 2", url: "article2.html" },
    // Add more articles here
  ];
  
  function createArticleLinks() {
    const articlesList = document.getElementById("articles-list");
  
    articles.forEach(article => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.textContent = article.title;
      link.href = article.url;
      listItem.appendChild(link);
      articlesList.appendChild(listItem);
    });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    createArticleLinks();
  });