// this application made by arindam saha

// global variables
var yourName = document.getElementById("yourname"),
  theirName = document.getElementById("theirname"),
  calcBtn = document.querySelector("button"),
  yourlovescoreis = document.getElementById("yourlovescoreis"),
  loveScore = Math.random() * 100,
  loveInfo = document.getElementById("loveinfo"),
  reloadBtn = document.getElementById("reload");
loveScore = Math.floor(loveScore) + 1;

//capitalize input values
function capitalize_Words(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// Love Score Counter
function love() {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  (async function() {
    var i = 0;
    while (i < loveScore) {
      document.getElementById("score").innerHTML = i + "%";
      await sleep(20);
      i++;
    }
  })();
}

// Add eventlistener to button
calcBtn.addEventListener("click", function(e) {
  loveScore = Math.random() * 100; //delete this line if you want to keep the same value in the same session.
  e.preventDefault();
  if (yourName.value == "" && theirName.value == "") {
    alert("You can't leave fields empty");
  }
  if (yourName.value == "") {
    alert("Please Enter Your Name");
  }
  if (theirName.value == "") {
    alert("Please Enter His/Her Name");
  }

  //lovescore conditions
  else if (loveScore <= 10) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " love each other like Oil & Water. I'm sorry, but this is not enough for a perfect relationship.";
  } else if (loveScore <= 20) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " love each other like Bird & Sky. But need to put a little concentration on your love.";
  } else if (loveScore <= 30) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " love each other like Soil & Seed. You should take care of your love more! ";
  } else if (loveScore <= 40) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " love each other like Romeo & Juliet. There is no fake things in your love. Go Ahead!";
  } else if (loveScore <= 50) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " love each other like Marie & Pierre Curie. That's a good combination. You are a good example of true love.";
  } else if (loveScore <= 60) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " love each other like The Earth & The Moon. You cannot live without each other.";
  } else if (loveScore <= 70) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " love each other like River & Sea. Spread Love, not Hate.";
  } else if (loveScore <= 80) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " love each other like glue. Nothing can seperate you from each other. Love is Forever.";
  } else if (loveScore <= 90) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " love each other more than anything in the world! You are the best example of true love.";
  } else if (loveScore <= 100) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " , Your love score is like a kite flying high in the sky. It shows the special bond you both have, making every day colorful with love, kindness, and happiness. looks like you two have a secret recipe for happiness, leaving love everywhere it goes. You should get married with " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " very soon. Best of Luck!";
  }
});