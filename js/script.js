
'use strict'

var movies = {};
var starRating = '<span class="glyphicon glyphicon-star"></span>',
    removeText = document.getElementById('list_description');

//LIST

function CreateMoviesData () {

    var starRating = '<span class="glyphicon glyphicon-star"></span>',
        starRatingEmpty = '<span class="glyphicon glyphicon-star-empty"></span>';

    movies["Guardians"] = {
        title: 'Guardians',
        titleID: 'Guardians of the Galaxy',
        rating: starRating.repeat(5),
        photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_UX182_CR0,0,182,268_AL_.jpg',
        desc: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
        about: 'PG-13 |  2h 1min  | Action, Adventure, Sci-Fi | 1 August 2014 (USA)',
        date:''
    };

    movies["Deadpool"] = {
        title: 'Deadpool',
        titleID: 'Deadpool',
        rating: starRating.repeat(5),
        photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyODg5Njc4N15BMl5BanBnXkFtZTgwMzExMjE3NzE@._V1_UY268_CR1,0,182,268_AL_.jpg',
        desc: 'A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.',
        about: 'R |  1h 48min  | Action, Adventure, Comedy | 12 February 2016 (USA)',
        date:''
    };

    movies["OriginsWolverine"] = {
        title: 'Origins:Wolverine',
        titleID: 'X-Men Origins: Wolverine',
        rating: starRating.repeat(5),
        photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZWRhMzdhMzEtZTViNy00YWYyLTgxZmUtMTMwMWM0NTEyMjk3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg',
        desc: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
        about: 'PG-13 |  2h 1min  | Action, Adventure, Sci-Fi | 1 August 2014 (USA)',
        date:''
    };

    movies["XMenDays"] = {
        title: 'X-Men:DaysOfFuturePast',
        titleID: 'X-Men: Days of Future Past',
        rating: starRating.repeat(4) + starRatingEmpty,
        photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
        desc: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
        about: 'PG-13 |  2h 1min  | Action, Adventure, Sci-Fi | 1 August 2014 (USA)',
        date:''
    };

    movies["IronMan"] = {
        title: 'IronMan',
        titleID: 'Iron Man',
        rating: starRating.repeat(4) + starRatingEmpty,
        photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        desc: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
        about: 'PG-13 |  2h 1min  | Action, Adventure, Sci-Fi | 1 August 2014 (USA)',
        date:''
    };

    movies["FirstClass"] = {
        title: 'X-Men:FirstClass',
        titleID: 'X-Men: First Class',
        rating: starRating.repeat(4) + starRatingEmpty,
        photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5OTMxNzk4Nl5BMl5BanBnXkFtZTcwOTk1MjAwNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        desc: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
        about: 'PG-13 |  2h 1min  | Action, Adventure, Sci-Fi | 1 August 2014 (USA)',
        date:''
    };

    movies["Avengers"] = {
        title: 'Avengers',
        titleID: 'Avengers',
        rating: starRating.repeat(3) + starRatingEmpty.repeat(2),
        photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        desc: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
        about: 'PG-13 |  2h 1min  | Action, Adventure, Sci-Fi | 1 August 2014 (USA)',
        date:''
    };

    movies["IronMan2"] = {
        title: 'IronMan2',
        titleID: 'Iron Man 2',
        rating: starRating.repeat(3) + starRatingEmpty.repeat(2),
        photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        desc: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
        about: 'PG-13 |  2h 1min  | Action, Adventure, Sci-Fi | 1 August 2014 (USA)',
        date:''
    };

    movies["Guardians2"] = {
        title: 'Guardians2',
        titleID: 'Guardians of the Galaxy Vol. 2',
        rating: starRating.repeat(3) + starRatingEmpty.repeat(2),
        photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_UX182_CR0,0,182,268_AL_.jpg',
        desc: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
        about: 'PG-13 |  2h 1min  | Action, Adventure, Sci-Fi | 1 August 2014 (USA)',
        date:''
    };

    movies["Logan"] = {
        title: 'Logan',
        titleID: 'Logan',
        rating: starRating.repeat(3) + starRatingEmpty.repeat(2),
        photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwODQwNTg4OV5BMl5BanBnXkFtZTgwMTk4MTAzMjI@._V1_UX182_CR0,0,182,268_AL_.jpg',
        desc: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
        about: 'PG-13 |  2h 1min  | Action, Adventure, Sci-Fi | 1 August 2014 (USA)',
        date:''
    };

    movies["XMen2"] = {
        title: 'X-Men2',
        titleID: 'X-Men 2',
        rating: starRating.repeat(3) + starRatingEmpty.repeat(2),
        photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDk0NjYxMzIzOF5BMl5BanBnXkFtZTYwMTc1MjU3._V1_UX182_CR0,0,182,268_AL_.jpg',
        desc: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
        about: 'PG-13 |  2h 1min  | Action, Adventure, Sci-Fi | 1 August 2014 (USA)',
        date:''
    };

    movies["AvengersUltron "] = {
        title: 'Avengers:AgeOfUltron',
        titleID: 'Avengers: Age of Ultron',
        rating: starRating.repeat(3) + starRatingEmpty.repeat(2),
        photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UX182_CR0,0,182,268_AL_.jpg',
        desc: 'A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.',
        about: 'R |  1h 48min  | Action, Adventure, Comedy | 12 February 2016 (USA)',
        date:''
    };

    movies["XApocalypse"] = {
        title: 'X-Men:Apocalypse',
        titleID: 'X-Men: Apocalypse',
        rating: starRating.repeat(3) + starRatingEmpty.repeat(2),
        photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_UX182_CR0,0,182,268_AL_.jpg',
        desc: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
        about: 'PG-13 |  2h 1min  | Action, Adventure, Sci-Fi | 1 August 2014 (USA)',
        date:''
    };

    movies["DoctorStrange"] = {
        title: 'DoctorStrange',
        titleID: 'Doctor Strange',
        rating: starRating.repeat(3) + starRatingEmpty.repeat(2),
        photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
        desc: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
        about: 'PG-13 |  2h 1min  | Action, Adventure, Sci-Fi | 1 August 2014 (USA)',
        date:''
    };

    movies["Wolverine"] = {
        title: 'Wolverine',
        titleID: 'Wolverine',
        rating: starRating.repeat(3) + starRatingEmpty.repeat(2),
        photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzg1MDQxMTQ2OF5BMl5BanBnXkFtZTcwMTk3MjAzOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        desc: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
        about: 'PG-13 |  2h 1min  | Action, Adventure, Sci-Fi | 1 August 2014 (USA)',
        date:''
    };

    movies["AntMan"] = {
        title: 'Ant-Man',
        titleID: 'Ant-Man',
        rating: starRating.repeat(3) + starRatingEmpty.repeat(2),
        photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
        desc: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
        about: 'PG-13 |  2h 1min  | Action, Adventure, Sci-Fi | 1 August 2014 (USA)',
        date:''
    };

    movies["Iron3"] = {
        title: 'IronMan3',
        titleID: 'Iron Man 3',
        rating: starRating.repeat(3) + starRatingEmpty.repeat(2),
        photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzMjEzMjY1M15BMl5BanBnXkFtZTcwNTMxOTYyOQ@@._V1_UY268_CR3,0,182,268_AL_.jpg',
        desc: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
        about: 'PG-13 |  2h 1min  | Action, Adventure, Sci-Fi | 1 August 2014 (USA)',
        date:''
    };

    movies["Thor"] = {
        title: 'Thor',
        titleID: 'Thor',
        rating: starRating.repeat(2) + starRatingEmpty.repeat(3),
        photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UX182_CR0,0,182,268_AL_.jpg',
        desc: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
        about: 'PG-13 |  2h 1min  | Action, Adventure, Sci-Fi | 1 August 2014 (USA)',
        date:''
    };

    movies["CaptainAmerica"] = {
        title: 'CaptainAmerica:TheFirstAvenger',
        titleID: 'Captain America: The First Avenger',
        rating: starRating.repeat(2) + starRatingEmpty.repeat(3),
        photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        desc: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
        about: 'PG-13 |  2h 1min  | Action, Adventure, Sci-Fi | 1 August 2014 (USA)',
        date:''
    };

    movies["ThorDarkWorld"] = {
        title: 'Thor:TheDarkWorld',
        titleID: 'Thor: The Dark World',
        rating: starRating.repeat(2) + starRatingEmpty.repeat(3),
        photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_UY268_CR3,0,182,268_AL_.jpg',
        desc: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
        about: 'PG-13 |  2h 1min  | Action, Adventure, Sci-Fi | 1 August 2014 (USA)',
        date:''
    };

    SaveToLocalStorage();
    window.location.href = "index.html";

}

//CREATE LIST
function CreateMoviesListView () {
    var container = document.getElementById("movies-list-region"),
        moviesKeys;

    LoadFromLocalStorage();

    moviesKeys = Object.keys(movies);

    if (moviesKeys.length > 0 ) {
        var addMenuButton = document.getElementById('menu_button');

        addMenuButton.classList.remove('hide');
        removeText.classList.add('hide');
    }

    for (moviesKeys in movies) {
        var newElement = document.createElement('div'),
            selectedMovie = movies[moviesKeys],
            template;

        template = ''
            + '<div class="movie movie-item">'
            + '<div class="bw col-md-2 col-md-offset-1 ">'
            + '<img src="' + selectedMovie.photo + '" class="img-responsive">'
            + '</div>'

            +'<div class="part2 col-md-6">'
            + '<h2>' + selectedMovie.titleID + '</h2>'
            + '<p>' + selectedMovie.desc + '</p>'
            + '<p class="genre">' + selectedMovie.about + '</p>'
            + '<p class="genre">' + selectedMovie.date + '</p>'
            + '</div>'

            + '<div class="col-md-2">'
            + '    <div class="star-rating">'
            +  selectedMovie.rating
            + '</div>'
            + '<button type="button" class="btn btn-default"><a href="' + selectedMovie.address + '">IMDB</a></button>'
            + '</div>'
            + '</div>';

        newElement.innerHTML = template;

        container.appendChild(newElement);
    }
}

function SaveToLocalStorage () {
    var moviesToString = JSON.stringify(movies);
    localStorage.setItem("moviesList", moviesToString);
}

function LoadFromLocalStorage () {

    var moviesList = localStorage.getItem("moviesList"),
        stringToObject = JSON.parse(moviesList);

    if (!moviesList) return;
    movies = stringToObject;
}


//CLEAR LIST
function ClearAllMoviesData () {
    var userDecision = confirm("Are you sure?");

    if (userDecision) {
        localStorage.setItem("moviesList", "{}");
        window.location.href = "index.html";

    }

}
////END MAIN////

//ADD OPTION TO SELECT
function AddOptionToSelect() {
    LoadFromLocalStorage();
    var select = document.getElementById("select_movie");
    var moviesKeys = Object.keys(movies);



    for (var i = 0; i < moviesKeys.length; i++) {
        var newElement = document.createElement("option"),
            selectedMovie = movies[moviesKeys[i]],
            template;

        newElement.value = moviesKeys[i];
        template = selectedMovie.title;

        newElement.innerHTML = template;
        select.appendChild(newElement);
    }
}

//REMOVE ONE MOVIE
function MovieRemoveForm() {
    var newForm = document.getElementById("movies-remove");
    var newElement = document.createElement("div");
    var topSlider = document.getElementById("main_slider");
    var template;

    topSlider.classList.add('hide');
    removeText.classList.add('hide');

    template = ''
        +    '<div class="form-container form_add--movie form_select">'
        +    '<form>'
        +    '<h1>Delete movie</h1>'
        +   '<div class="form-group">'
        +    '<select id="select_movie" name="movie">'
        +    '<option>--- SELECT ---</option>'
        +    '</select>'
        +'</div>      '
        +'</form>'
        +'<div class="button-container">'
        +    '<button id="delete_movie" class="btn_form" type="button">Delete</button>'
        +'</div>'
        +'</div>';

    newElement.innerHTML = template;
    newForm.appendChild(newElement);

    AddOptionToSelect();
    RemoveOneMovie();
}

function RemoveOneMovie() {
    var deleteButton = document.getElementById("delete_movie");
    var selectMovie = document.getElementById("select_movie");

    deleteButton.addEventListener("click", function(){
        delete movies[selectMovie.value];
        SaveToLocalStorage();
        window.location.href = "index.html";

    })
}

//ADD ONE MOVIE
function MovieCreateForm () {
    var newForm = document.getElementById("movies-form");
    var newElement = document.createElement("div");
    var topSlider = document.getElementById("main_slider");
    var template;

    topSlider.classList.add('hide');
    removeText.classList.add('hide');

    LoadFromLocalStorage();

    template = ''
        +  '<div class="form-container form_add--movie">'
        +    '<form>'
        +    '<h1>ADD movie</h1>'
        +'<div class="form-group">'
        +    '<input type="text" name="title" placeholder="Title"/>'
        +'</div>'
        +'<div class="form-group">'
        +    '<input type="number" name="rating" min="1" max="5" placeholder="Rating"/>'
        +'</div>'
        +'<div class="form-group">'
        +    '<input type="text" name="photo" placeholder="Photo adress"/>'
        +'</div>'
        +'<div class="form-group">'
        +    '<input type="text" name="about" placeholder="About"/>'
        +'</div>'
        +'<div class="form-group">'
        +    '<textarea name = "desc" placeholder="Description"></textarea>'
        +'</div>'
        +'</form>'
        +'<div class="button-container">'
        +    '<button id="create_movie" class="btn_form" type="button">Submit</button>'
        +'</div>'
        +'</div>';

    newElement.innerHTML = template;
    newForm.appendChild(newElement);

    AttachSaveButtonListener();
}

function AttachSaveButtonListener() {
    var saveButton = document.getElementById("create_movie");

    saveButton.addEventListener("click", function () {
        var form = document.forms[0];
        var newDate = new Date();
        var fullDate = newDate.getDate() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getFullYear().toString();
        var selectedTitle = form.title.value.replace(/\s/g,'');

        var newMovie = {
            title: selectedTitle,
            titleID: form.title.value,
            rating: starRating.repeat(form.rating.value),
            photo: form.photo.value,
            desc: form.desc.value,
            about: form.about.value,
            date: 'Edited: ' + fullDate
        };
        movies[newMovie.title] = newMovie;

        if(!newMovie.title) return alert('Add title');

        SaveToLocalStorage();
        CreateMoviesData();
    });

}

//EDIT MOVIE
function MovieEditForm() {
    var newForm = document.getElementById("movies-edit");
    var newElement = document.createElement("div");
    var topSlider = document.getElementById("main_slider");
    var template;

    topSlider.classList.add('hide');
    removeText.classList.add('hide');

    template = ''
        +'<div class="form-container form_add--movie">'
        +'<form>'
        +    '<h1>Edit movie</h1>'
        +'<div class="form-group">'
        +    '<select id="select_movie" name="movie">'
        +    '<option>--- SELECT ---</option>'
        +    '</select>'
        +'</div>'
        +'<input type="hidden" name="name"/>'
        +   ' <div class="form-group ">'
        +       '<input type="text" name="title" placeholder="Title" />'
        +      '</div>'

        +    '<div class="form-group">'
        +       '<input type="text" name="photo" placeholder="Photo" />'
        +   '</div>'

        +   ' <div class="form-group">'
        +       '<input type="text" name="about" placeholder="About" />'
        +      '</div>'
        +   ' <div class="form-group">'
        +       '<input type="number" name="rating" min="1" max="5" placeholder="rating">'
        +      '</div>'
        +'<div class="form-group">'
        +    '<textarea name="desc" placeholder="Description"></textarea>'
        +    '</div>'
        +    '</form>'
        +    '<div class="button-container">'
        +    '<button id="edit_movie" class="button btn_form" type="button"><span>Edit</span></button>'
        +'</div>'
        +'</div>';

    newElement.innerHTML = template;
    newForm.appendChild(newElement);

    AddOptionToSelect();
    EditOneMovie();
}


function EditOneMovie() {
    var editButton = document.getElementById("edit_movie");
    var selectMovie = document.getElementById("select_movie");
    var form = document.forms[0];

    selectMovie.addEventListener("change", function () {
        var movie = movies[selectMovie.value];

        form.title.value = movie.title;
        form.about.value = movie.about;
        form.photo.value = movie.photo;
        form.desc.value = movie.desc;
        form.rating.value = movie.rating;
    });

    editButton.addEventListener("click", function(){
        var newDate = new Date();
        var fullDate = newDate.getDate() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getFullYear().toString();
        var editMovie = {
            titleID: form.title.value,
            title: form.title.value,
            photo: form.photo.value,
            desc: form.desc.value,
            about: form.about.value,
            rating: starRating.repeat(form.rating.value),
            date: 'Edited: ' + fullDate
        };

        movies[selectMovie.value] = editMovie;
        console.log(editMovie);

        SaveToLocalStorage();
        LoadFromLocalStorage();
        window.location.href = "index.html";

    })

}

// START APP
function getActionFromUrl(action) {
    var pageUrl = window.location.href,
        name = action,
        regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(pageUrl);

    if (!results || !results[2]) return;
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function start() {
    var requestedAction = getActionFromUrl("action");

    switch (requestedAction) {
        case "createMovie" :
            MovieCreateForm();
            break;
        case "removeMovie" :
            MovieRemoveForm();
            break;
        case "editMovie" :
            MovieEditForm();
            break;
        default:
            CreateMoviesListView() ;
    }
}

start();
