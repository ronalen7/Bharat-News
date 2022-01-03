// let apikey = 'f6dfdb17d67242df9e000780b48c8c4f';
// let apikey = '5a86ef668f184887b6a3e41b9bfc1435';

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apikey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let jsn = JSON.parse(this.responseText);
        console.log(jsn);
        let art = jsn.articles;

        //image
        let def = document.getElementById('image');
        let u = "";
        if ((art[1].urlToImage == null) || (art[1].urlToImage == u)) {
            def.innerHTML = `<img src="IMG/news logo new.jpg" alt="">`;
        }
        else {
            def.innerHTML = `<img src="${art[1].urlToImage}" alt="">`;
        }

        //description
        let d = "";
        let des = document.getElementById('description');
        if ((art[1].description == null) || (art[1].description == d)) {
            des.innerHTML = `<div class="description" id="description" style="font-size:20px">
                                <p>${art[1].title}</p>
                            </div>`;
        }
        else {
            des.innerHTML = `<p>${art[1].description}</p>`;
            console.log("no description");
        }

        //title
        let tl = document.getElementById('title');
        let date = art[1].publishedAt.slice(0, 10);
        let time = art[1].publishedAt.slice(11, 19);
        tl.innerHTML = `<h3>${art[1].title}</h3>
                        <p>${art[1].source.name}</p>
                        <p>${date}&nbsp&nbsp&nbsp&nbsp&nbsp${time}</p>`;

        //cotent
        let c = "";
        if ((art[1].content == null) || (art[1].content == c)) {
            console.log('no content');
        }
        else {
            let con = document.getElementById('content');
            con.innerHTML = `<p>${art[1].content}</p>
            <button id="btn"><a href="${art[1].url}" target="_blank">Read More</a></button>`;
        }
    }
    else {
        console.log("Some error occured");
    }
}
//sending the request
xhr.send();

let popOne = document.getElementById('pop1');
const pop1 = new XMLHttpRequest();
pop1.open('GET', `https://newsapi.org/v2/top-headlines?sources=talksport&apiKey=${apikey}`, true);

let html = "";
pop1.onload = function () {
    if (this.status === 200) {
        let jsn = JSON.parse(this.responseText);
        console.log(jsn);
        let art = jsn.articles;
        let i = "";
        art.forEach(e => {
            if ((e.urlToImage == null) || (e.urlToImage == i)) {
                let news = `<a href="${e.url}" target = "_blank">
                <div class="popnews" id="popnews1">
                <img src="IMG/news logo new.jpg" alt="">
                <p>${e.title}</p>
                </div>
                </a>`
                html += news;
            }
            else {
                let news = `<a href="${e.url}" target = "_blank">
                <div class="popnews" id="popnews1">
                <img src="${e.urlToImage}" alt="">
                <p>${e.title}</p>
                </div>
                </a>`
                html += news;
            }
        });
        popOne.innerHTML = html;
    }
    else {
        console.log("Some error occured");
    }
}
pop1.send();