const todayEl = document.getElementById("today");
const phraseEl = document.getElementById("pharse");

document.addEventListener("DOMContentLoaded", () => {

    const days = [
        { name: 'sunday', quote: 'time to chill' },
        { name: 'monday', quote: 'Back to work' },
        { name: 'tuesday', quote: 'time to chill' },
        { name: 'wednesday', quote: 'Hump day' },
        { name: 'Thursday', quote: 'Gone' },
        { name: 'Friday', quote: 'Good Day' },
        { name: 'Saturday', quote: 'time to chill' }

    ]
    const today = days[new Date().getDay()];
    console.log(today.quote);
    todayEl.textContent = today.name;
    phraseEl.textContent = today.quote;
})