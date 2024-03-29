const articles = [
    { title: "ΛSSIMILATION 7213", url: "1.html" },
    { title: "ΗEARTBEAT 7214", url: "2.html" },
    { title: "PR0LIFERATE 7235", url: "3.html" },
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