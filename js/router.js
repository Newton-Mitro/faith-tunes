function router() {
  const hash = location.hash || "#/";

  const path = hash.split("?")[0];

  let content = "";

  if (path === "#" || path === "#/") {
    content = homePage();
  } else if (path === "#/books") {
    content = booksPage();
  } else if (path === "#/songs") {
    content = songsPage();
  } else if (path === "#/categories") {
    content = categoriesPage();
  } else if (path === "#/search") {
    content = searchPage();
  } else if (path === "#/favorites") {
    content = favoritesPage();
  } else if (path.startsWith("#/book/")) {
    const id = path.split("/")[2];

    content = bookPage(id);
  } else if (path.startsWith("#/category/")) {
    const id = path.split("/")[2];

    content = categoryPage(id);
  } else if (path.startsWith("#/song/")) {
    const id = path.split("/")[2];

    content = songPage(id);
  } else {
    content = notFoundPage();
  }

  const app = document.getElementById("app");

  if (!app) {
    console.error("#app element was not found.");

    return;
  }

  app.innerHTML = `
        ${renderHeader()}

        <main class="flex-1">
            ${content}
        </main>

        ${renderFooter()}
    `;

  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
}
