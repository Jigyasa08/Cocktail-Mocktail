window.addEventListener("load", function () {
  let btn = document.getElementById("findit");
  btn.addEventListener("click", renderXhr);
  // var cardImage = document.getElementById
  //   cardImage.addEventListener("click", displayCard(data[i].strDrink));
});

window.addEventListener("load", function () {
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=ita"
  );
  xhr.send();
  xhr.onload = function () {
    if (xhr.status == 200) {
      var res = JSON.parse(xhr.response).drinks;
      console.log(res);
      display(res);
    } else {
      console.log("Error Code is:" + xhr.status);
    }
  };
});

const display = (data) => {
  var cards = document.getElementById("cards");
  for (var i = 0; i < data.length; i++) {
    // console.log(data[i].strDrinkThumb);
    var drink = createCard(data[i]);
    cards.append(drink);
  }
};

const createCard = (data) => {
  var card = document.createElement("div");
  var cardImage = document.createElement("img");
  var cardText = document.createElement("p");
  cardImage.src = data.strDrinkThumb;
  cardImage.style.width = "200px";
  cardText.textContent = data.strDrink;
  card.append(cardImage);
  card.append(cardText);
  card.addEventListener("click", function (e) {
    localStorage.setItem("drinkData", JSON.stringify(data));
    routePage(e.target);
  });
  return card;
};

function routePage() {
  location.href = "cocktailPage.html";
}

const displayCard = (drink) => {
  console.log(drink);
};

function renderXhr() {
  var data = document.getElementById("searchCocktail").value;
  console.log(data);

  switch (data) {
    case "Margarita":
      location.href = "newpage_1.html";
      break;
    case "Blue Margarita":
      location.href = "newpage_2.html";
      break;
    case "Tommy's Margarita":
      location.href = "newpage_3.html";
      break;
    case "Whitecap Margarita":
      location.href = "newpage_4.html";
      break;
    case "Strawberry Margarita":
      location.href = "newpage_5.html";
      break;
    case "Smashed Watermelon Margarita":
      location.href = "newpage_6.html";
      break;
    default:
      alert("No drinks found");
  }
}
