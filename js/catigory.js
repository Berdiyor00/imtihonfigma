const input = document.querySelector('.search_blog_input');
const posts = document.querySelector('#articleContainer');
const pages = document.querySelector('.pagination');
let news;
let pageSize = 10;

async function allData() {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3816343ee18c40278630044af0497ee1');
    const data = await response.json();
    news = data.articles;
    newCard(news);
    pagination();
    console.log(news);
}
allData();

function newCard(postData) {
    posts.innerHTML = "";
    postData.forEach((element) => {
        posts.innerHTML += `<div class="allNews">
        <img src="${element.urlToImage}"> 
       <div class="allNewsTitle"><h4>${element.title}</h4>
       <p>${element.description}</p></div>
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
});

function pagination() {
    const totalPages = Math.ceil(news.length / pageSize);
    pages.innerHTML = "";
    for (let i = 0; i < totalPages; i++) {
        let button = document.createElement('button');
        button.textContent = i + 1;
        pages.appendChild(button);
        button.addEventListener('click', () => {
            newCard(news.slice(i * pageSize, (i + 1) * pageSize));
        });
    }
}
const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3816343ee18c40278630044af0497ee1';

async function MyFun(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
MyFun(url)