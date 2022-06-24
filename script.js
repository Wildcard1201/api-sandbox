async function getFact() {
    let url = 'https://cat-fact.herokuapp.com/facts'
    try {
        let fact = await fetch(url)
        console.log('fetch ok')
        return await fact.json()
    } catch (error) {
        console.log(error)
    }
}

async function renderFact() {
    let facts = getFact()
    let html = ''

    console.log('made it this far')

    facts.forEach((fact) => {
        html += fact.fact
    })


    let container = document.getElementById('container')
    container.innerHTML = html;
}

renderFact();