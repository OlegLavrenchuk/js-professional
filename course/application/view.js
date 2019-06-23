import singleton from './singleton';

const App = () => {

class Render {
    constructor(place, row) {
        this.place = place;
        this.row = row;
        this.price = 150;
        this.data = [];
    }

    render() {
        if(localStorage.key('sell')) {
            this.data = singleton.returnLocalStorage();
        }

        let nodeCinema = `
            <div class="row justify-content-around">
                <div class="row" id ='cinema-place'></div>
                <div class="row-2" id ='buy-place'></div>
            </div>`;

            document.body.innerHTML = nodeCinema;
        let boxCinema = document.getElementById('cinema-place');
        let boxBuy = document.getElementById('buy-place');

        let button = document.createElement('button');
            button.innerHTML = 'Додати до кошика';
            button.id = 'button';
            button.classList = 'btn btn-primary';
            button.addEventListener('click', singleton.saveInLocalStorage.bind(this));
            boxBuy.appendChild(button);

        for (var i = 1; i <= this.row; i++) {
            let row = document.createElement('div');
                row.classList = 'col-lg-auto';
            let table = document.createElement('table');
                row.appendChild(table);
            for (var j = 1; j <= (this.place / this.row) / 4; j++) {
                let tr = document.createElement('tr');
                    tr.dataset.row = j;
                    table.appendChild(tr);
                for (var k = 1; k <= 4; k++) {
                    let td = document.createElement('td');
                        td.id = `tr${j}-tb${i}-td${k}`;
                        td.innerHTML = k;
                        td.dataset.place = k;
                        td.addEventListener('click', singleton.render.bind(this));
                        td.addEventListener('click', singleton.timeWaiting.bind(this));
                    let isThere = this.data.some(item => item === td.id);
                    if (isThere) {
                        td.style.background = 'red';
                    }
                    tr.appendChild(td);
                }
            }
            boxCinema.appendChild(row);
        }
    }
};

const cinema = new Render(100, 4, 120).render();
}

export default App;

