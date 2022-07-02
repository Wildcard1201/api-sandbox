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
    let { date, age } = user.dob
    let { city, state, country } = user.location
    let email = user.email
    let phone = user.phone
    let cell = user.cell
    let { large, medium, thumbnail } = user.picture

    html += `<pre>
<img src="${medium}" alt="medium user picture" class="picture" />
Title: ${title}
First: ${first}
Last: ${last}
Age: ${age}
City: ${city}
State: ${state}
Country: ${country}
Email: ${email}
Phone: ${phone}
Cell: ${cell}
    </pre>`
    console.log(html)
    
    container.innerHTML = html
}

getData()