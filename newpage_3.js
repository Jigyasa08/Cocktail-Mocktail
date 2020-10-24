window.addEventListener("load", function () {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    xhr.send()
    xhr.onload = function () {
        if (xhr.status == 200) {
            var res = JSON.parse(xhr.response).drinks
            console.log(res)
            display(res)

        }
        else {
            console.log("Error Code is:" + xhr.status)
        }
    }
})

function display(data) {
    var item = data[2]
    var items = document.getElementById('cont');
    
    var img = document.createElement('img')
    var drink = document.createElement('h2')
    var gap = document.createElement('br')
    var ins = document.createElement('h4')
    var instructions = document.createElement('p')
    var category = document.createElement('p')
    var glass = document.createElement('p')
    var a = document.createElement('a')
    var tag = document.createElement('p')
    var strInstructionsDE = document.createElement('p')
    var strIngredients = document.createElement('h4')
    var strIngredient1 = document.createElement('li')
    var strIngredient2 = document.createElement('li')
    var strIngredient3 = document.createElement('li')
    var strIngredient4 = document.createElement('li')
    img.src = 'https://i2-prod.rsvplive.ie/article21882690.ece/ALTERNATES/s615/0_Cocktail-of-the-week-Margarita-cocktail-2.jpg'
    img.style.width = '400px';
    img.style.height = 'auto';
    a.href = 'https://www.youtube.com/watch?v=GhH-MMSsg64'
    var linkText = document.createTextNode("Youtube Link");
    a.appendChild(linkText);
    a.title = "my title text";
    drink.innerHTML = item.strDrink
    ins.textContent = 'Instructions'
    instructions.innerHTML = item.strInstructions
    category.innerHTML = 'Category: ' + item.strCategory
    glass.innerHTML = 'Glass: ' + item.strGlass
    tag.innerHTML = 'Tag: ' + item.strTags
    strInstructionsDE.innerHTML = 'Instructions_DE: ' + item.strInstructionsDE
    strIngredients.textContent = 'Ingredients'
    strIngredient1.innerHTML = item.strIngredient1
    strIngredient2.innerHTML = item.strIngredient2
    strIngredient3.innerHTML = item.strIngredient3
    strIngredient4.innerHTML = item.strIngredient4

    items.append(drink)
    items.append(img)
    items.append(ins)
    items.append(instructions)
    items.append(category)
    items.append(glass)
    items.append(tag)
    items.append(strInstructionsDE)
    items.append(strIngredients)
    items.append(strIngredient1)
    items.append(strIngredient2)
    items.append(strIngredient3)
    // items.append(strIngredient4)
    items.append(gap)
    items.append(a)
}