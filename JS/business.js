// let apikey = 'f6dfdb17d67242df9e000780b48c8c4f';
// let apikey = '5a86ef668f184887b6a3e41b9bfc1435';

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apikey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let jsn = JSON.parse(this.responseText);
        console.log(jsn);
        let art = jsn.articles;

        //image
        let def = document.getElementById('image');
        let u = "";
        if ((art[0].urlToImage == null) || (art[0].urlToImage == u)) {
            def.innerHTML = `<img src="IMG/news logo new.jpg" alt="">`;
        }
        else {
            def.innerHTML = `<img src="${art[0].urlToImage}" alt="">`;
        }

        //description
        let d = "";
        let des = document.getElementById('description');
        if ((art[0].description == null) || (art[0].description == d)) {
            des.innerHTML = `<div class="description" id="description" style="font-size:20px">
                                <p>${art[0].title}</p>
                            </div>`;
            console.log("no description");
        }
        else {
            des.innerHTML = `<p>${art[0].description}</p>`;
        }

        //title
        let tl = document.getElementById('title');
        let date = art[0].publishedAt.slice(0, 10);
        let time = art[0].publishedAt.slice(11, 19);
        tl.innerHTML = `<h3>${art[0].title}</h3>
                        <p>${art[0].source.name}</p>
                        <p>${date}&nbsp&nbsp&nbsp&nbsp&nbsp${time}</p>`;

        //cotent
        let c = "";
        if ((art[0].content == null) || (art[0].content == c)) {
            console.log('no content');
        }
        else {
            let con = document.getElementById('content');
            con.innerHTML = `<p>${art[0].content}</p>
            <button id="btn"><a href="${art[0].url}" target="_blank">Read More</a></button>`;
        }

        let popOne = document.getElementById('pop1');
        let html = "";
        for (let i = 1; i < 11; i++) {
            // art.forEach(e => {
            if ((art[i].urlToImage == null) || (art[i].urlToImage == c)) {
                let news = `<a href="${art[i].url}" target = "_blank">
                    <div class="popnews" id="popnews1">
                    <img src="IMG/news logo new.jpg" alt="">
                    <p>${art[i].title}</p>
                    </div>
                    </a>`
                html += news;
            }
            else {
                let news = `<a href="${art[i].url}" target = "_blank">
                    <div class="popnews" id="popnews1">
                    <img src="${art[i].urlToImage}" alt="">
                    <p>${art[i].title}</p>
                    </div>
                    </a>`
                html += news;
            }
            // });
        }
        popOne.innerHTML = html;
    }
    else {
        console.log("Some error occured");
    }
}
//sending the request
xhr.send();