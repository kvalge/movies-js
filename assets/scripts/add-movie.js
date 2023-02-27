const addMovieBtn = document.getElementById('add-movie-btn');
const cancelMovieBtn = document.getElementById('cancel-movie-btn');

const movieList = document.getElementById('movie-list');

const getLinkEl = document.getElementById('link-el');
getLinkEl.className = 'invisible';

const hideCard = document.getElementById('hide');
hideCard.style.display = 'none';

const addMovie = document.getElementById('user-input');
const userInputs = addMovie.querySelectorAll('input');

const deleteMovieConfirmation = document.getElementById('delete-confirmation');
deleteMovieConfirmation.className = 'invisible'

const movies = [];

const renderMovies = () => {
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

    const deleteMovieBtn = movieEl.querySelector('button');
    deleteMovieBtn.style.fontWeight = '100';
    deleteMovieBtn.style.fontSize = '14px';
    // deleteMovieBtn.addEventListener('click', deleteMovie.bind(null, movie.id));
    deleteMovieBtn.addEventListener(
      'click',
      startDeleteMovie.bind(null, movie.id)
    );

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
  movieList.children[movieIndex].remove();
  closeMovieDeletionCard();
};

const closeMovieDeletionCard = () => {
  deleteMovieConfirmation.className = 'invisible';
  getLinkEl.className = 'card';
  hideCard.style.display = 'block';
  addMovie.className = 'card';
};

const startDeleteMovie = movieId => {
  deleteMovieConfirmation.className = 'visible';
  getLinkEl.className = 'invisible';
  hideCard.style.display = 'none';
  addMovie.className = 'invisible';


  const cancelDeletionButton = deleteMovieConfirmation.querySelector('.btn--passive');
  let confirmDeletionButton = deleteMovieConfirmation.querySelector('.btn--danger');

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

  confirmDeletionButton = deleteMovieConfirmation.querySelector('.btn--danger');
    
  cancelDeletionButton.removeEventListener('click', closeMovieDeletionCard);

  cancelDeletionButton.addEventListener('click', closeMovieDeletionCard);
  confirmDeletionButton.addEventListener(
    'click',
    deleteMovie.bind(null, movieId)
  );
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

  getLinkEl.className = 'card';
  hideCard.style.display = 'block';
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

addMovieBtn.addEventListener('click', addMovieHandler);
cancelMovieBtn.addEventListener('click', clearMovieInput);
