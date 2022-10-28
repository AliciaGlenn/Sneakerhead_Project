// $(function () {
const promise = $.ajax({
  //  url:'https://the-sneaker-database.p.rapidapi.com/sneakers'
  // method: 'GET',
  url: "https://the-sneaker-database.p.rapidapi.com/sneakers?limit=${numInput}",
  // params: {limit: 20},
  headers: {
    "X-RapidAPI-Key": "8e228d85bemsh56c6591ce73d9c1p18f21cjsn854021b29e31",
    "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
  },
});

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
  promise.then(
    (data) => {
      console.log(data.results);

      data.results.forEach((sneaker) => {
        const $h1 = $(`<h1>${sneaker.name}</h1>`);
        const $img = $(
          `<img src='${sneaker.image.small}' alt='${sneaker.name}' />`
        );

        // add error event to image
        $img.on("error", (event) => {
          $img.attr("src", "img/orange.jpg");
        });

        // `<img src='{$img}'
        // onerror="this.remove()"/>`; trynig to get this to work

        $("div.footer").append($h1, $img);
      });

      // render(data.results)
      return data;
    },

    (error) => {
      console.error(error);
      // console.log(error)
    }
  );
};

// $("button").click(hello);

// grab text from input
const numInput = $("input[type='number']").val();

$("form").on("submit", (numInput) => {
  // grab text from input

  // prevent the refresh
  numInput.preventDefault();

  // update the screen
  hello(numInput);
});
