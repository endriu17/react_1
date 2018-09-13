var movies = [{
        id: 1,
        title: 'The God Doctor',
        desc: 'serial o wybitnym lekarzu',
        src:  './images/tgd.jpg'
    },
    {
        id: 2,
        title: 'Better call Saul',
        desc: 'serial o ciekawym prawniku',
        src: './images/bcs.jpg'
    },
    {
        id: 3,
        title: 'Friends',
        desc: 'serial o grupie przyjaciół',
        src: './images/fr.jpg'
    },
    {
        id: 4,
        title: 'The Big Bang Theory',
        desc: 'Serial o grupie przyjaciół naukowców',
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
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements),

    );

ReactDOM.render(element, document.getElementById('app'));
