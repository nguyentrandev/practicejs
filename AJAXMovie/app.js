//Get Movie Event Listener
document.getElementById('button1').addEventListener('click', loadMovie);


//Connect AJAX
function loadMovie(){
    let title = document.getElementById('Title').value;
    let year = document.getElementById('Year').value;



    //connect to AJAX
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://www.omdbapi.com/?s=${title}&y=${year}&apikey=b78bdf55&`,true);

    xhr.onload = function(){
        if(this.status === 200){
            const movies = JSON.parse(this.responseText);
            console.log(movies);

            let output = '<div class="card-columns">';

            movies.Search.forEach(function(movie){
                output += `
                            <div class="card">
                                <img class="card-img-top" src="${movie.Poster}" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">${movie.Title}</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Type: ${movie.Type}</li>
                                    <li class="list-group-item">Year: ${movie.Year}</li>
                                    <li class="list-group-item">imdbID: ${movie.imdbID}</li>
                                </ul>
                            </div>
              `;
            });
        
            document.getElementById('movie').innerHTML = output + '</div>';
        }else{
            console.log('error');
        }
       
    }

    xhr.send();
    
}
