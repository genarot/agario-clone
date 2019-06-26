//
// const socket = io('http://localhost:9090',{
//     path: '/socketrin'
// })
const wHeight = $(window).height();
const wWidth = $(window).width();

let canvas = document.querySelector("#the-canvas");
let context = canvas.getContext("2d");
let player = {}; // This is all things "this" player

console.log(canvas)
canvas.width = wWidth;
canvas.height = wHeight;

$(window).load(() => {
    $("#loginModal").modal("show");
});

$(".name-form").submit((event) => {
    event.preventDefault();

    const DOMName = document.querySelector("#name-input");
    if ( !(DOMName.value).trim()) {
        alert('Type your name!');
        DOMName.value= "";
        return;
    }
    player.name =  DOMName.value;
    $("#loginModal").modal("hide");
    $("#spawnModal").modal("show");
    document.querySelector(".player-name").innerHTML = player.name;
    console.log('Submitting', DOMName.value)
});
$(".start-game").click((evt) => {
    $(".modal").modal("hide");
    $(".hiddenOnStart").removeAttr("hidden");
    init();
})
console.log('ui stuff');
