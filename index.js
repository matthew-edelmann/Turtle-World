
function playSound()
{
    var audio = new Audio("audio/Where_are_the_TURTLES.mp3");
    audio.play();
}

$(".noise").click(function()
{
    playSound();
});

$(".lff1").click(function()
{
    document.getElementById("hide-it1").style.visibility = "visible";
});

$(".lff2").click(function()
{
    document.getElementById("hide-it2").style.visibility = "visible";
});

$(".lff3").click(function()
{
    document.getElementById("hide-it3").style.visibility = "visible";
});

$(".lff4").click(function()
{
    document.getElementById("hide-it4").style.visibility = "visible";
});
