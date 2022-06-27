// script below
let urlDisplay = document.getElementById('url-display')
let container = document.getElementById('container')
let url = 'https://randomuser.me/api/'

function printUrl() {
    urlDisplay.innerHTML = url
}

printUrl()

async function getData() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.results)

    //display

    
}

getData()