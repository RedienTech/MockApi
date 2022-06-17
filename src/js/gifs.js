//Card to show the gifs

const GifElements = document.getElementById("gifs-home");

class GifList {
    constructor(gifs) {
        this.gifs = gifs;
    }

    render() {
        const gifList = this.gifs.map(gif => {
            return `<div class="col-md-4 col-xs-1 text-align-center">
                        <div class="card mx-auto mb-3" style="width: 80%; height: auto;">
                            <img src="${gif.url}" class="card-img-top" alt="...">
                            <div class="card-body">
                              <p class="card-text">${gif.title}</p>
                            </div>
                        </div>
                    </div>`;
        }).join('');
        return gifList
    }
}

fetch("https://62aa7e933b3143855447f1ca.mockapi.io/api/v1/Gifs", {method: "GET"})
    .then(response => {
        response.json()
         .then(res => {
            const gifList = new GifList(res);
            GifElements.innerHTML = gifList.render();
        })
    })