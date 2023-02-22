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
    movieEl.className = 'movie-item';
    movieEl.innerHTML = `
    <div>
    <img src="${movie.image}" alt="${movie.name}">
    <div>
    <h2>${movie.name.toUpperCase()}</h2>
    <p>${movie.description}</p>
    </div>
    </div>
    `;
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
    name,
    description,
    image,
    id: Math.random(),
  };

  movies.push(newMovie);
  renderMovies();
};

addMovieBtn.addEventListener('click', addMovieHandler);
