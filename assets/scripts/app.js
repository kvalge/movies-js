class Movie {
  constructor(name, image, description) {
    this.name = name;
    this.image = image;
    this.description = description;
  }
}

//Creates a movie item class to create a html element for one movie item.
class MovieItem {
  constructor(movie) {
    this.movie = movie;
  }

  render() {
    const movieEl = document.createElement('li');
    movieEl.className = 'movie-item';
    movieEl.innerHTML = `
          <div>
            <img src="${this.movie.image}" alt="${this.movie.name}" >
            <div class="movie-item__content">
              <h2>${this.movie.name}</h2>
              <p>${this.movie.description}</p>
            </div>
          </div>
        `;
    return movieEl;
  }
}

class MovieList {
  movies = [
    new Movie(
      'LOST IN TRANSLATION',
      'https://images.squarespace-cdn.com/content/v1/5a59a10d4c326de87b455acd/1535389898147-UZ4KFUQEP0S5DRWL8NUG/Charlotte-Bob-lost-in-translation-1041685_1400_930.jpg?format=2500w',
      'A 2003 romantic comedy-drama film written and directed by Sofia Coppola. Bob Harris, a fading American ' +
        'movie star who is having a midlife crisis when he travels to Tokyo to promote Suntory whisky. There, he ' +
        'befriends another estranged American named Charlotte, a young woman and recent college graduate.' +
        'The film explores themes of alienation and disconnection against a backdrop of cultural displacement in Japan.'
    ),
    new Movie(
      'ANOTHER ROUND',
      'http://www.camera-roll.com/wp-content/uploads/2021/04/anotherround02.jpg',
      'A 2020 black comedy-drama film directed by Thomas Vinterberg. Teachers Martin, Tommy, Peter, and Nikolaj ' +
        'struggle with unmotivated students and feel that their lives have become boring and stale. At a dinner ' +
        "celebrating Nikolaj's 40th birthday, the group begins to discuss the theory of psychiatrist Finn Skårderud" +
        ' — that humans are born with a blood alcohol content (BAC) deficiency of 0.05%, and that being at 0.05% ' +
        "makes one more creative and relaxed. The friends decide to embark on an experiment to test Skårderud's theory."
    ),
    new Movie(
      'GENERAL MAGIC',
      'https://www.hollywoodreporter.com/wp-content/uploads/2018/04/4._not_for_commercial_2f_print_use_-_the_macintosh_team_-_h_2018.jpg?w=1296&h=730&crop=1',
      'A 2018 documentary of how a great vision and an epic failure changed the lives of billions. The ideas ' +
        'that dominate the tech industry and our day to day lives were born at a secretive Silicon Valley start-up ' +
        "named 'General Magic', which spun out of Apple in 1990 to create the first handheld personal communicator " +
        '(or "smartphone").'
    ),
    new Movie(
      'SPY GAME',
      'https://cdn.gelestatic.it/kataweb/tvzap/2018/07/Spy-Game-5_1000.jpg',
      'A 2001 American action thriller film directed by Tony Scott. In 1991, the United States and China are ' +
        'close to a major trade agreement. The Central Intelligence Agency (CIA) learns that its asset Tom Bishop ' +
        "has been arrested at a People's Liberation Army prison in Suzhou and will be executed in 24 hours, unless " +
        "the U.S. government claims him and bargains for his release. Bishop/'s actions, unsanctioned by the CIA, " +
        "risk jeopardizing the agreement. Nathan D. Muir, a veteran case officer and Bishop's mentor, who plans to " +
        'retire from the Agency at the end of the day, recalls his training of Tom Bishop while working against ' +
        'agency politics to free him from his Chinese captors.'
    ),
  ];

  constructor() {}

  //Renders the list of all movies when the search filter is empty and displays one or more movies by a search text if 
  //a search text is inserted and matches at least partially to some movie name.
  render() {
    const renderHook = document.getElementById('app');
    const movieList = document.createElement('ul');
    movieList.className = 'movie-list';

    let filterTerm = document
      .getElementById('filtered-title')
      .value.toUpperCase();

    const filteredMovies = !filterTerm
      ? this.movies
      : this.movies.filter((movie) => movie.name.includes(filterTerm));

    for (const movie of filteredMovies) {
      const movieItem = new MovieItem(movie);
      const movieEl = movieItem.render();
      movieList.append(movieEl);
    }
    renderHook.append(movieList);
    return movieList;
  }
}

const getBackBtn = document.getElementById('button-back');
getBackBtn.className = 'invisible';

const movieList = new MovieList();
movieList.render();

const userInput = document.getElementById('filtered-title');
const clearMovieInput = () => {
  userInput.value = '';
};

const searchButton = document.getElementById('button-filter');
const filteredMovie = document.getElementById('filtered-movie');
const getlist = document.getElementById('app');


//Renders the filtered movie(s) by search text, hides the list of other movies, makes a button back to the whole list visible,
//clears input.
const searchMovie = () => {
  const movie = movieList.render();
  filteredMovie.append(movie);
  getlist.className = 'invisible';
  getBackBtn.className = 'visible';
  clearMovieInput();
};

//Makes the list of all movies visible, hides the filtered movie and the back to the list button.
const backToList = () => {
  getlist.className = 'visible';
  filteredMovie.className = 'invisible';
  getBackBtn.className = 'invisible';
};

searchButton.addEventListener('click', searchMovie);
getBackBtn.addEventListener('click', backToList);
