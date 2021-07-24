const cardContainer = document.getElementById('card-wrapper');
const url = 'user_data.json';

// Get data by featch from json file. Your website should stay in a server to enjoy this featch data.

fetch(url)
    .then(response => response.json())
    .then((val) => {
        let row = val.map((data) => {
            return ` <div class="card">
                         <div class="card__inner">
                            <h2 class="card__name">${data.name}</h2>
                            <h4 class="card__title">${data.title}</h4>
                            <img class="card__img" src=${data.avatar} alt="">
                            <p class="card__desc">${data.para}</p>
                            <a class="card__cta" href="#">Explore <span class="card__cta-arrow">&RightArrow;</span></a>
                        </div>
                    </div>`;
        });
        row = row.join(' ');
        cardContainer.innerHTML = row;
    });

