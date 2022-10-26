$(function() {

const promise = $.ajax({
//  url:'https://the-sneaker-database.p.rapidapi.com/sneakers'
// method: 'GET',
url: 'https://the-sneaker-database.p.rapidapi.com/sneakers?limit=20',
// params: {limit: 20},
headers: {
'X-RapidAPI-Key': '8e228d85bemsh56c6591ce73d9c1p18f21cjsn854021b29e31',
'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com'

}

});



// const options = {
//     method: 'GET',
//     url: 'https://the-sneaker-database.p.rapidapi.com/sneakers',
//     params: {limit: '<REQUIRED>'},
//     headers: {
//       'X-RapidAPI-Key': '8e228d85bemsh56c6591ce73d9c1p18f21cjsn854021b29e31',
//       'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com'
//     }
//   };




promise.then(
    (data) => {
        console.log(data)
        // render(data.results)
        return data
    },

    (error) => {
        console.error(error)
        // console.log(error)
    }
)
})

//render function to the screen using a function 

function render(sneakers){
    sneakers.forEach((sneaker) => {
const sneakerData = getsneakerData(sneaker)
console.log(sneakerData)
const $h1 = $(`<h1>${sneakers.name}</h1>`)
$('body').append($h1)
})
}

function sneakerData(sneaker){
    console.log(sneaker)
    const promise = $.ajax({
        url:sneaker.url
    })
}