//
// const socket = io('http://localhost:9090',{
//     path: '/socketrin'
// })
const wHeight = $(window).height;
const wWidth = $(window).width;

let canvas = document.querySelector("#the-canvas");
let context = canvas.getContext("2d");
let player = {};

context.width = wWidth;
context.height = wHeight;

$(window).load(() => {
    $("#loginModal").modal("show");
});

$(".name-form").submit((event) => {
    event.preventDefault();

    console.log('Submitting')
});
console.log('ui stuff');
