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

    let html = ''

    const user = data.results[0]
    let { title, first, last} = user.name
    let { date, age } = user.dob
    let { city, state, country } = user.location
    let email = user.email
    let phone = user.phone
    let cell = user.cell
    let { large, medium, thumbnail } = user.picture

    html += `
        <img src="${medium}" alt="medium user picture" class="picture" />
        <div class="card-divider">
            Title: ${title} <br>
            First: ${first} <br>
            Last: ${last} <br>
            Age: ${age}
        </div>
        <div class="card-divider">
            City: ${city} <br>
            State: ${state} <br>
            Country: ${country}
        </div>
        <div class="card-divider">
            Email: <br> ${email} <br>
            Phone: ${phone} <br>
            Cell: ${cell}
        </div>
    `
    
    container.innerHTML = html
}

getData()