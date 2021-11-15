const movieContainer = document.querySelector('.movie-container');
const renderData = data => {
  const html = `
        <div class="col-md-3 col-sm-6">
          <div class="card" style=" margin-top:20px;border-radius:30px;">
            <img
              class="card-img-top"
              data-src="holder.js/291px180/"
              alt="127%x180"
              src="${data.flags['png']}"
              data-holder-rendered="true"
              style="height: 180px; width: 100%; display: block; border-radius:30px; border:1px solid black;"
            />
            <hr style="border:1px solid black; width:50%;margin-left:25%">
            <div class="card-body">
              <h5 class="card-title">${data.name['common']}</h5>
              <p class="card-text">

                Native Names: ${
                  data.name.nativeName == null
                    ? 'Not Available'
                    : Object.keys(data.name.nativeName)
                        .map(key => data.name.nativeName[key].official)
                        .slice(1)
                        .join(`, `)
                }
                <br>
                Region : ${data.region} <br>
                
                TimeZone : ${data.timezones}
                <br>
                Languages Spoken : 
                  ${
                    data.languages == null
                      ? 'Not Available'
                      : Object.keys(data.name.nativeName)
                          .map(key => data.languages[key])
                          .join(`, `)
                  }}
                

                <br>
                Population : ${data.population}(${(
    data.population / 1000000
  ).toFixed(2)} M)
                <br>
                Independent : ${data.independent ? 'Yes' : 'No'}
                <br>
                Land Locked : ${data.landlocked ? 'yes' : 'No'} 
              </p>
            </div>
            
          </div>
        </div>
    `;
  movieContainer.insertAdjacentHTML('beforeend', html);
};

// const TopMovies = fetch(
//   'https://imdb-api.com/en/API/MostPopularMovies/k_988uuq6s'
// )
//   .then(res => res.json())
//   .then(data => {
//     top100Data = data.items.slice(0, 99);
//     console.log(data.items);
//     top100Data.forEach(item => renderData(item));
//   });

const TopMovies = fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => {
    //console.log(data);
    // console.log([data[0].currencies][0]['AFN'].name);
    // let dataIn = data[74];
    // // console.log(data);
    // renderData(dataIn);
    // let OtherData1 = data.slice(0, 74);
    // let OtherData2 = data.slice(75, data.length - 1);
    data.forEach(item => renderData(item));
  });
