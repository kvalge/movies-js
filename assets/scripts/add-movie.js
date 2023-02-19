/* class Movie {
  title;
  image;
  description;

  constructor(title, image, description) {
    this.title = title;
    this.image = image;
    this.description = description;
  }
} */

const movies = [];

const addMovieBtn = document.getElementById('add-movie-btn');

const renderMovies = () => {
  const movieList = document.getElementById('movie-list');
  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  movies.forEach((movie) => {
    const movieEl = document.createElement('li');
    let text = movie.name + '\n: ' + movie.description;
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const image = document.getElementById('image').value;

  if (name.trim() === '' || description.trim() === '' || image.trim() === '') {
    return;
  }

  const newMovie = {
    name: name,
    description: description,
    image: image,
    id: Math.random(),
  };

  movies.push(newMovie);
  renderMovies();
};

addMovieBtn.addEventListener('click', addMovieHandler);
