async function getMovies(e) {
    try {
       
        let movieList = document.getElementById("movie-list");
        let search = document.getElementById("search").value.trim();

        movieList.innerHTML = `<div class="loader"></div>`;

        await new Promise(resolve => setTimeout(resolve, 500));
 
        let response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=47ec7f2b`);
        let data = await response.json();
        let movies = data.Search;

        if (!movies) {
            movieList.innerHTML = "<h1 style='color:red'>Oops, no result!!!!!</h1>";
            return;
        }
        movieList.innerHTML = ``;
        movies.forEach(movie => {
            movieList.innerHTML += `
                <div class="card">
                    <h5>${movie.Type}</h5>
                    <h4>${movie.Title}</h4>
                    <img src="${movie.Poster === "N/A" ? "https://tse3.mm.bing.net/th?id=OIP.EmNXza-Ac8QB5GHhANYFlwAAAA&pid=Api&P=0&h=180" : movie.Poster}" alt="${movie.Title}">
                    <h4>${movie.Title}</h4>
                    <h4 style="background-color: red; cursor: pointer;">Watch now</h4>
                    <h6>Year of Release: ${movie.Year}</h6>
                </div>
            `;
        });
    } catch (err) {
        console.log(err.message);
        
    }
}
