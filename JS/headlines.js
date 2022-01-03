// let apikey = 'f6dfdb17d67242df9e000780b48c8c4f';
let apikey = '5a86ef668f184887b6a3e41b9bfc1435';

let list = document.getElementById('newslist');

const hdlns = new XMLHttpRequest();
hdlns.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`, true);

hdlns.onload = function () {
    if (this.status === 200) {
        let jsn = JSON.parse(this.responseText);
        console.log(jsn);
        let art = jsn.articles;

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
    }
    else {
        console.log("Some error occured");
    }

}
//sending the request
hdlns.send();