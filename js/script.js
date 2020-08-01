const btn = document.getElementById('generator');
const content = document.querySelector('.content');
const randomCat = document.getElementById('random-cat');
const catFact = document.querySelector('.fact');

btn.addEventListener('click', generateContent)

async function generateContent(event) {
    const randomImageUrl = await getRandomCatImageUrl();
    const randomFact = await getRandomCatFact();
    
    randomCat.src = randomImageUrl;
    catFact.textContent = randomFact;

    content.scrollIntoView();
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
