const movies = [];

const addMovieBtn = document.getElementById('add-movie-btn');
const cancelMovieBtn = document.getElementById('cancel-movie-btn');

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
    alert('Please enter valid values!');
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
  clearMovieInput();
  toggleLink();
};

const addMovie = document.getElementById('user-input');
const userInputs = addMovie.querySelectorAll('input');
clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

const getLinkEl = document.getElementById('link-el');
toggleLink = () => {
  getLinkEl.classList.toggle('visible');
};

addMovieBtn.addEventListener('click', addMovieHandler);
cancelMovieBtn.addEventListener('click', clearMovieInput);
