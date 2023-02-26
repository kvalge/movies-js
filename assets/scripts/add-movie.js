const movies = [];

const addMovieBtn = document.getElementById('add-movie-btn');
const cancelMovieBtn = document.getElementById('cancel-movie-btn');

const hideCard = document.getElementById('hide');
hideCard.style.display = 'none';

const getLinkEl = document.getElementById('link-el');
getLinkEl.className = 'invisible';

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
    <div>
  <button id="delete-movie-btn">Delete</button>
</div>
    `;
    movieEl.addEventListener('click', deleteMovie.bind(null, movie.id));
    movieList.append(movieEl);
  });
};

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const movieList = document.getElementById('movie-list');
  movieList.children[movieIndex].remove();
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
    id: Math.random().toString(),
    name,
    description,
    image,
  };

  movies.push(newMovie);
  renderMovies();
  clearMovieInput();

  getLinkEl.className = 'visible';
  hideCard.style.display = 'block';
};

const addMovie = document.getElementById('user-input');
const userInputs = addMovie.querySelectorAll('input');
clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

addMovieBtn.addEventListener('click', addMovieHandler);
cancelMovieBtn.addEventListener('click', clearMovieInput);

