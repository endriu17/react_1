var movies = [{
        id: 1,
        title: 'The Good Doctor',
        desc: 'Series about an good doctor',
        src:  './images/tgd.jpg'
    },
    {
        id: 2,
        title: 'Better call Saul',
        desc: 'Series about an interesting lawyer',
        src: './images/bcs.jpg'
    },
    {
        id: 3,
        title: 'Friends',
        desc: 'you know...',
        src: './images/fr.jpg'
    },
    {
        id: 4,
        title: 'The Big Bang Theory',
        desc: 'Series about a group of scientists friends',
        src: './images/tbbt.jpg'
    }
];

var moviesElements = movies.map(function (movie) {
    return React.createElement('li', {
            key: movie.id
        },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.src, width: "250px", height: "300px"})
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'List of films'),
        React.createElement('ul', {}, moviesElements),

    );

ReactDOM.render(element, document.getElementById('app'));
