'use strict';

const apiKey = "a496788d6dd8726ab0a300f87b22a7eb";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDk2Nzg4ZDZkZDg3MjZhYjBhMzAwZjg3YjIyYTdlYiIsIm5iZiI6MTcyNjE2NDQ1MS42ODA0Miwic3ViIjoiNTllMjVhYzRjM2EzNjg3YzA1MDAyMjkyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.RjFsI68AsS01VyRw1fmscyX727xt39FZvvzo5xooRag"
  }
};
const popularURL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`;
const imageURL = "https://image.tmdb.org/t/p/original/"
fetch(popularURL, options).then(response => response.json()).then(data => {
  const popularMovies = data.results;
  for (let i = 1; i <= 3; i++) {
    document.getElementById(i).src = imageURL + popularMovies[i].poster_path;
  }
});


const loadImg = document.createElement('img');
loadImg.src = "assets/loading.gif";
loadImg.height = 60;

function searchMovies() {
  document.getElementById("search-div").appendChild(loadImg);

  setTimeout(findMovie, 1000)
}

function findMovie() {
  let searchWord = document.getElementById("input").value.toLowerCase();
  const searchURL = `https://api.themoviedb.org/3/search/movie?query=%22${searchWord}%22&include_adult=false&language=en-US&page=1&api_key=${apiKey}`;

  fetch(searchURL, options).then((response => response.json())).then(data => {
    console.log(data.results);
    const sviPronadeniFilmovi = data.results;
    if (sviPronadeniFilmovi.length === 0) {
      document.getElementById("result").innerText = "Film nije pronađen.";
    }
    else {
      sviPronadeniFilmovi.forEach(film => {
        console.log(film);
        const karticaFilma =
          `<div class="container">
        <img src="" height="100px">
        <p></p>
        <p></p>
      </div>`
        document.getElementById("result").innerHTML += karticaFilma;
      })
    }
  });

  // let foundMovie = jsonMovies.find(
  //   (movie) => movie.title.toLowerCase() === searchWord
  // );
  // if (foundMovie !== undefined) {
  //   document.getElementById("result").innerText =
  //     "Pronađen je vaš film: " + foundMovie.title;
  // } else {
  //   document.getElementById("result").innerText = "Film nije pronađen.";
  // }
  document.getElementById("search-div").removeChild(loadImg);
}
