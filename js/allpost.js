const input = document.querySelector('.search_blog_input');
const catigoryPost = document.querySelector('#articleContainer');
const catigoryPage = document.querySelector('.pagination');
let news;
let pageSize = 10;
let currentPage = 5;

async function allData() {
    const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-09-25&sortBy=publishedAt&apiKey=3816343ee18c40278630044af0497ee1');
    const data = await response.json();
    news = data.articles;
    newCard(news);
    pagination();
    console.log(news);
}
allData();

function newCard(postData) {
    catigoryPost.innerHTML = "";
    const start = (currentPage - 5) * pageSize;
    const end = start + pageSize;
    postData.slice(start, end).forEach((element) => {
        catigoryPost.innerHTML += `<div class="allNews">
        <img src="${element.urlToImage}"> 
       <div class="allNewsTitle"><h4 class="about__starup__title">${element.title}</h4>
       <p class="about__startup__text">${element.description}</p>
       <p class="date">${element.publishedAt}</p>
       </div>
      
        </div>`;
    });
}

function serch() {
    let foundTitle = [];
    foundTitle = news.filter((i) =>
        i.title.toLowerCase().startsWith(input.value.toLowerCase()));
    newCard(foundTitle);
}
input.addEventListener('input', () => {
    serch();
    currentPage = 5;
    pagination();
});

function pagination() {
    const totalPages = Math.ceil(news.length / pageSize);
    catigoryPage
        .innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        let button = document.createElement('button');
        button.textContent = i;
        catigoryPage.appendChild(button);
        button.addEventListener('click', () => {
            currentPage = i;
            newCard(news);
        });
    }
}

const url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-09-25&sortBy=publishedAt&apiKey=3816343ee18c40278630044af0497ee1';

async function MyFun(url) {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            console.log(data);
        } else {
            console.error('HTTP xato kodi: ' + response.status);
        }
    } catch (error) {
        console.error(error);
    }
}

MyFun(url);