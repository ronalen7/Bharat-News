// let apikey = 'f6dfdb17d67242df9e000780b48c8c4f';
let apikey = '5a86ef668f184887b6a3e41b9bfc1435';

let list = document.getElementById('newslist');

//creating an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let jsn = JSON.parse(this.responseText);
        // console.log(jsn);
        let art = jsn.articles;

        let def = document.getElementById('image');
        let u = "";
        if (art[0].description != u) {
            def.innerHTML = `<img src="${art[0].urlToImage}" alt="">`;
        }
        else {
            def.innerHTML = `<img src="IMG/news logo new.jpg" alt="">`;
        }

        let des = document.getElementById('description');
        let d = "";
        if (art[0].description != d) {
            des.innerHTML = `<div class="description" id="description">
                                <p>${art[0].description}</p>
                            </div>`;
        }
        else {
            des.innerHTML = `<div class="description" id="description" style="font-size:20px">
                                <p>${art[0].title}</p>
                            </div>`;
            // console.log("no description");
        }

        let html = "";
        for (let i = 0; i < 6; i++) {
            // art.forEach(element => {
            let news = `<div class="headlines">
                            <a href = "${art[i].url}" target = "_blank"><p id="listpara" onclick = "" onmouseout = """>${art[i].title}</p></a>
                        </div>`
            html += news;
            // console.log(art[i].title);
            // });
        }
        list.innerHTML = html;

        let trendnews = document.getElementById('trending');
        let trend = "";
        for (let i = 7; i < 13; i++) {
            if (art[i].urlToImage != null) {
                let news = `<a href = "${art[i].url}" target = "_blank">
                <div class = "box">
                <img src = "${art[i].urlToImage}" alt = "">
                <p>${art[i].title}</p>
                </div>
                </a>`
                trend += news;
            }
            else {
                let news = `<a href = "${art[i].url}" target = "_blank">
                <div class = "box">
                <img src = "IMG/news logo new.jpg" alt = "">
                <p>${art[i].title}</p>
                </div>
                </a>`
                trend += news;
            }
        }
        trendnews.innerHTML = trend;
    }
    else {
        console.log("Some error occured");
    }

}

//sending the request
xhr.send();

// ---------------------------------------------------

let popOne = document.getElementById('pop1');
const pop1 = new XMLHttpRequest();
pop1.open('GET', `https://newsapi.org/v2/top-headlines?sources=wired&apiKey=${apikey}`, true);

let html = "";
pop1.onload = function () {
    if (this.status === 200) {
        let jsn = JSON.parse(this.responseText);
        console.log(jsn);
        let art = jsn.articles;

        art.forEach(e => {
            let news = `<a href="${e.url}" target = "_blank">
                            <div class="popnews" id="popnews1">
                                <img src="${e.urlToImage}" alt="">
                                <p>${e.title}</p>
                            </div>
                        </a>`
            html += news;
        });
        // popOne.innerHTML = html;
    }
    else {
        console.log("Some error occured");
    }
}
pop1.send();

// let popTwo = document.getElementById('pop2');
const pop2 = new XMLHttpRequest();
pop2.open('GET', `https://newsapi.org/v2/top-headlines?sources=the-verge&apiKey=${apikey}`, true);

pop2.onload = function () {
    if (this.status === 200) {
        let jsn = JSON.parse(this.responseText);
        console.log(jsn);
        let art = jsn.articles;

        art.forEach(e => {
            let news = `<a href="${e.url}" target = "_blank">
                            <div class="popnews" id="popnews2">
                                <img src="${e.urlToImage}" alt="">
                                <p>${e.title}</p>
                            </div>
                        </a>`
            html += news;
        });
        popOne.innerHTML = html;
    }
    else {
        console.log("Some error occured");
    }
}
pop2.send();
