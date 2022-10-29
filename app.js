// // grab text from input
// const numInput = $("input[type='number']").val();

// // $(function () {
// const promise = $.ajax({
//   //  url:'https://the-sneaker-database.p.rapidapi.com/sneakers'
//   // method: 'GET',
//   // grab text from input

//   url: `https://the-sneaker-database.p.rapidapi.com/sneakers?limit=${numInput}`,
//   // params: { limit: 20 },
//   headers: {
//     "X-RapidAPI-Key": "8e228d85bemsh56c6591ce73d9c1p18f21cjsn854021b29e31",
//     "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
//   },
// });

// create a text input box (string interpolation)
// below that add the click button that we created
// user types in the number of sneakers he /she wants returned and after they will click on the button and it will return the number of shoes they specifc

// const options = {
//     method: 'GET',
//     url: 'https://the-sneaker-database.p.rapidapi.com/sneakers',
//     params: {limit: '<REQUIRED>'},
//     headers: {
//       'X-RapidAPI-Key': '8e228d85bemsh56c6591ce73d9c1p18f21cjsn854021b29e31',
//       'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com'
//     }
//   };

// put inside of function. Have button on click call  the function

const hello = () => {
  console.log("hello");
  // clear out list of 20 then add to it

  // grab text from input
  const numInput = $("input[type='number']").val();

  if (numInput > 10 && numInput < 51) {
    // $(function () {
    const promise = $.ajax({
      //  url:'https://the-sneaker-database.p.rapidapi.com/sneakers'
      // method: 'GET',
      // grab text from input

      url: `https://the-sneaker-database.p.rapidapi.com/sneakers?limit=${numInput}`,
      // params: { limit: 20 },
      headers: {
        "X-RapidAPI-Key": "8e228d85bemsh56c6591ce73d9c1p18f21cjsn854021b29e31",
        "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
      },
    });

    promise.then(
      (data) => {
        console.log(data.results);

        data.results.forEach((sneaker) => {
          const $h1 = $(`<h1>${sneaker.name}</h1>`);
          const $img = $(
            `<img src='${sneaker.image.small}' alt='${sneaker.name}' />`
          );

          const $h2 = $(`<h1>${sneaker.links.flightClub}</h1>`);

          // add error event to image
          $img.on("error", (event) => {
            $img.attr("src", "img/orange.jpg");
          });

          // `<img src='{$img}'
          // onerror="this.remove()"/>`; trynig to get this to work

          $("main").append($h1, $img, $h2);
        });

        // render(data.results)
        return data;
      },

      (error) => {
        console.error(error);
        // console.log(error)
      }
    );
  } else {
    alert("pick a number between 10-50");
  }
};

$("button").click(hello);

// // grab text from input
// const numInput = $("input[type='number']").val();

$("form").on("submit", (numInput) => {
  // grab text from input

  // prevent the refresh
  numInput.preventDefault();

  // update the screen
  hello(numInput);
});

// There wasn't a lot of documentaition for my API, so it was tough because I think it relied on a lot of assumed knowledge
// so I worked with the GA team to get the API connected (David + Alex)
// the way the API works, is you have to put in a number, and it will return that amount of sneakers.
//There's a default image, if the sneaker image provided by the API doesn't work
// so the API is a sneaker database with images and links to resell sites
// Lessons learned, I to understand better where to put code, because some errors occured because of code placement
//I got comfortable with committing to git
