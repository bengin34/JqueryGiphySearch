
$(function() {

  const $gifArea = $("#gif-area");
  const $searchInput = $("#search");

  $("form").on("submit", function(e) {
    e.preventDefault();
    const searchTerm = $searchInput.val();
    $searchInput.val("");
    $.get(
      "http://api.giphy.com/v1/gifs/search",
      {
        q: searchTerm,
        api_key: "g6EjTu1wXbkTIppR9OxjrVQMQSxow9hg"
      }
    ).then(function(res) {
        console.log(res.data)
      const numResults = res.data.length;
      if (numResults) {
        const randomIdx = Math.floor(Math.random() * numResults);
        const $newCol = $("<div>", { class: "col-md-4 col-12 mb-4"});
        const $newGif = $("<img>", {
          src: res.data[randomIdx].images.original.url,
          class: "w-100"
        });
        $newCol.append($newGif);
        $gifArea.append($newCol);
      }
    });
  });

  $("#remove").on("click", function() {
    $gifArea.empty();
  });

});