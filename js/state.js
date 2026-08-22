const state = {
  search: "",

  fontSize: 20,

  favorites: JSON.parse(localStorage.getItem("song-library-favorites") || "[]"),
};
