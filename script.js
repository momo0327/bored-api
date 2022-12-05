//detta är så man skriver en API 
const BASE_URL = 'https://www.boredapi.com/api/activity'

const button = document.querySelector('#btn').addEventListener('click', function(){
    async function getGoals() {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log(data)
        
        document.querySelector('.text').innerHTML = data.activity
    }
    getGoals()
})






