console.log('script loaded')

// function processData() {
//     let galleryHtml = '';
//     for (galleryItems of gallery) {
//         galleryHtml = galleryHtml + buildgalleryHtml(galleryItems);
//     }
//     document.querySelector('#gallery-card').innerHTML = galleryHtml;
// }

// const fileName = <%= galleryItems().fileName %>
// const title = <%= galleryItems().fileName %>

//     function buildgalleryHtml(galleryItems) {



//         return `
//     <figure>
//         <img src="/images/sm/${galleryItems.fileName}" alt="${galleryItems.title}" id="${galleryItems.id}">
//         <figcaption>${galleryItems.title}, by: ${galleryItems.attribution.credit}</figcaption>
//     </figure>
//     `;

//     }


// let film = [];

// fetch('https://swapi.co/api/films/').then(function (a) {
//     a.json().then(function (data) {
//         film = data.results;
//         console.log('data');

//         processData();
//     });
// });

// function processData() {
//     let filmHtml = '';
//     for (item of film) {
//         filmHtml = filmHtml + buildFilmHtml(item);
//     }
//     document.querySelector('#film-list').innerHTML = filmHtml;
// }

// function buildFilmHtml(item) {
//     return `
//         <ul id="films">
//             <h1>STAR WARS: EPISODE ${item.episode_id}</h1>
//             <h2>${item.title}</h2>
//             <li>Released: ${item.release_date}</li>
//             <li>${item.opening_crawl}</li>
//             <li>Directed by: ${item.director}</li>
//             <li>Produced by: ${item.producer}</li>
//         </ul> 
//     `;
// }

// console.log('end');