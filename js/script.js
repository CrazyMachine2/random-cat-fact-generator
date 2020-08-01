const btn = document.getElementById('generator');
const content = document.querySelector('.content');

const catHolder = createElement('img', './img/cats-holder.png','cat-holder');
const randomCat = createElement('img', '','random-cat');

const imagesContainer = createElement('div', '','', 'images-container');
imagesContainer.appendChild(catHolder);
imagesContainer.appendChild(randomCat);

const catFact = document.querySelector('.fact');

console.log(catFact);

btn.addEventListener('click', generateContent)

async function generateContent(event) {
    const randomImageUrl = await getRandomCatImageUrl();
    const randomFact = await getRandomCatFact();
    
    const randomCat = document.getElementById('random-cat');
    randomCat.src = randomImageUrl;
    catFact.textContent = randomFact;
}

async function getRandomCatImageUrl(){
    
    try {
        const resp = await fetch('https://api.thecatapi.com/v1/images/search')
        const data = await resp.json();
        const imageUrl = await data[0].url;
        return imageUrl;
    } catch (err) {
        console.log(err);
    }

}

async function getRandomCatFact(){

    try {
        const resp = await fetch('https://meowfacts.herokuapp.com/');
        const data = await resp.json();
        const fact = await data.data[0];
        return fact;
    } catch(err){
        console.log(err);
    }
}

function createElement(element, src, id, ...classes) {
    const el = document.createElement(element);

    if (src) {
        el.src = src;
    }

    if(id) {
        el.id = id;
    }

    classes.forEach(cl => el.classList.add(cl));

    return el;
}
