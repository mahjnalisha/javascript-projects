const paragraphs = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit facere corporis quaerat! Cum aspernatur eaque architecto necessitatibus asperiores tempore labore deleniti animi eos voluptatem quibusdam, aliquam sed corrupti consequuntur?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit facere corporis quaerat! Cum aspernatur eaque architecto necessitatibus asperiores tempore labore deleniti animi eos voluptatem quibusdam, aliquam sed corrupti consequuntur?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit facere corporis quaerat! Cum aspernatur eaque architecto necessitatibus asperiores tempore labore deleniti animi eos voluptatem quibusdam, aliquam sed corrupti consequuntur?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit facere corporis quaerat! Cum aspernatur eaque architecto necessitatibus asperiores tempore labore deleniti animi eos voluptatem quibusdam, aliquam sed corrupti consequuntur?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit facere corporis quaerat! Cum aspernatur eaque architecto necessitatibus asperiores tempore labore deleniti animi eos voluptatem quibusdam, aliquam sed corrupti consequuntur?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit facere corporis quaerat! Cum aspernatur eaque architecto necessitatibus asperiores tempore labore deleniti animi eos voluptatem quibusdam, aliquam sed corrupti consequuntur?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit facere corporis quaerat! Cum aspernatur eaque architecto necessitatibus asperiores tempore labore deleniti animi eos voluptatem quibusdam, aliquam sed corrupti consequuntur?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit facere corporis quaerat! Cum aspernatur eaque architecto necessitatibus asperiores tempore labore deleniti animi eos voluptatem quibusdam, aliquam sed corrupti consequuntur?'

];
const itemsEl = document.getElementById("items");
const dataContainer = document.getElementById("data");


function shuffle(array) {
    let currentindex = array.length;
    let randomIndex;
    while (currentindex != 0) {
        randomIndex = Math.floor(Math.random() * currentindex);
        currentindex--;
        [array[currentindex], array[randomIndex]] = [
            array[randomIndex], array[currentindex]
        ]
    }
    return array;
}


function generatePara() {
    const itemsValue = itemsEl.value;
    if (itemsValue <= 0) {
        alert("Please enter the value greater than 0");

    }
    else if (itemsValue > paragraphs.length) {
        const randomIndex = Math.floor(Math.random() * paragraphs.length);
        dataContainer.innerHTML = `${paragraphs[randomIndex]}`
    } else {
        const shuffleParagraps = paragraphs;
        shuffle(paragraphs);
        const selectedParagraph = shuffleParagraps.slice(0, itemsValue);
        const paragraphHtml = selectedParagraph.map(pr => `<p>${pr}</p>`).join();
        dataContainer.innerHTML = paragraphHtml;
    }
}