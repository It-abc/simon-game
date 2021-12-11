var colorarr=["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
$(".startbtn").click(function(){
  if(!started)
  {
    $("#level-title").text("Level"+level);
    seq();
    started=true;
  }
});
function seq() {
  userClickedPattern = [];
  var n=Math.random();
  n=n*4;
  n=Math.floor(n);
  level++;
    $("#level-title").text("Level " + level);
  var randomchosen=colorarr[n];

  gamePattern.push(randomchosen);
  $("#"+ randomchosen).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(randomchosen);

}
function playsound(name)
{
  var audio=new Audio(name +".mp3");
  audio.play();
}

$(".btn").click(function(){
  var userChosenbtn=$(this).attr("id");
  userClickedPattern.push(userChosenbtn);
  playsound(userChosenbtn);
  animatePress(userChosenbtn);
checkanswer(userClickedPattern.length-1);
});

function checkanswer(currentlevel)
{
  if(gamePattern[currentlevel] === userClickedPattern[currentlevel])
  {
    if(userClickedPattern.length === gamePattern.length)
    {
      setTimeout(function(){
        seq();
      },1000);
    }
  }
  else
  {
    playsound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("game over, press any key to start again");
    setTimeout(function(){
    $("body").removeClass("game-over");
  },200);
  startOver();
  }
}


function startOver()
{
  started=false;
  gamePattern= [];
  level=0;
userClickedPattern = [];
}
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
