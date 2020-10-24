window.addEventListener("load", function () {
    let btn = document.getElementById('findit')
    btn.addEventListener('click', renderXhr)
})

function renderXhr() {
    var data = document.getElementById('searchCocktail').value;
    console.log(data)

    switch (data) {
        case "Margarita":
            location.href = 'newpage_1.html'
            break;
        case "Blue Margarita":
            location.href = 'newpage_2.html'
            break;
        case "Tommy's Margarita":
            location.href = 'newpage_3.html'
            break;
        case "Whitecap Margarita":
            location.href = 'newpage_4.html'
            break;
        case "Strawberry Margarita":
            location.href = 'newpage_5.html'
            break;
        case "Smashed Watermelon Margarita":
            location.href = 'newpage_6.html'
            break;
        default:
            alert('No drinks found')
    }

}