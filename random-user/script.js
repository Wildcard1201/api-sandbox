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
    let html = ''
    const user = data.results[0]
    let { title, first, last} = user.name



    html += `<pre>
    Title: ${title}
    First: ${first}
    Last: ${last}
    </pre>`
    console.log(html)
    
    container.innerHTML = html
}

getData()