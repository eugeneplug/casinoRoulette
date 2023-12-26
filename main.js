const cells = 31;

const items = [
    {name: 'Пакет с землей', img: 'img/case/zip.png', chance: 10},
    {name: 'Пачку сиг', img: 'img/case/cigs.png', chance: 20},
    {name: 'Баночку флешика', img: 'img/case/flash.png', chance: 40},
    {name: 'Мешок картошки', img: 'img/case/potato.png', chance: 60}
    
];




function getItem() {
    let item;

    while (!item) {
        const chance = Math.floor(Math.random() * 100000)


        items.forEach(elm => {
            if(chance < elm.chance && !item) item = elm
        });
    };

    return item;
};


function generateItems() {
    document.querySelector('.list').remove()
    document.querySelector('.scope').innerHTML = `
    <ul class="list"></ul>
    `

    const list = document.querySelector('.list')
    // list.innerHTML = ''

    for (let i = 0; i< cells; i++) {
        const item = getItem();

        const li = document.createElement('li');
        li.classList.add('list__item');
        li.innerHTML = `<img src="${item.img}" alt=""/> `

        list.append(li)
    }
};

generateItems()

let isStarted = false 



// function start () {

//     if (isStarted) return
//     else isStarted = true



//     generateItems();
//     const list = document.querySelector('.list');

//     setTimeout(() => {
//         list.style.left = '50%'
//         list.style.transform = 'translate3d(-50%, 0, 0)'
//     }, 0)

//     const item = list.querySelectorAll('li')[15]

//     list.addEventListener('transitionend', () => {
//         isStarted = false
//         item.classList.add('active')

//     })

//     console.log(list.querySelectorAll('li').length);
// };


function start () {
    if (isStarted) return;
    else isStarted = true;

    generateItems();
    const list = document.querySelector('.list');

    setTimeout(() => {
        list.style.left = '50%';
        list.style.transform = 'translate3d(-50%, 0, 0)';
    }, 0);

    const item = list.querySelectorAll('li')[15];

    list.addEventListener('transitionend', () => {
        isStarted = false;
        item.classList.add('active');
        displaySelectedItem(item);
    });

    console.log(list.querySelectorAll('li').length);
}; 



function displaySelectedItem(item) {
    const imgSrc = item.querySelector('img').src; // Получаем src изображения выбранного элемента
    const displayArea = document.getElementById('selectedItemImage');
    
    // displayArea.innerHTML = `<img src="${imgSrc}" alt="Selected Item"/>`; // Отображаем изображение

    displayArea.innerHTML = `
  <h1>Поздравляю, вы выиграли! ${name} </h1>
  <img src="${imgSrc}" alt="Selected Item"/>
  <button onclick="closePrice()">Крутить дальше!</button>
`;
    

    displayArea.style.width = '500px';
    displayArea.style.height = '300px';
    displayArea.style.display = 'flex';
    displayArea.style.transform = 'translate(71px, -190px)'
}



function closePrice() {
    let displayArea = document.getElementById('selectedItemImage');
    displayArea.style.display = "none"
}