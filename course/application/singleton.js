const data = {
    store: [],
    time: []
};

const Store = {
    render(e) {
        let selectedNode = e.target;
        if (selectedNode.style.background !== 'red') {
            let boxBuy = document.getElementById('buy-place');
            let selectedPlace = document.createElement('div');
                selectedPlace.id = `money-${selectedNode.id}`;
                selectedPlace.innerHTML = `Ряд: ${selectedNode.parentNode.dataset.row}, Место: ${selectedNode.dataset.place}, Цена: ${this.price} грн`;
                selectedNode.style.background = 'red';
                data.store.push(selectedNode.id);
                boxBuy.appendChild(selectedPlace);
            let button = document.getElementById('button');
                button.innerHTML = `Додати до кошика ${data.store.length * this.price} грн`;
        }
    },

    timeWaiting(e) {
        let timeOut = setTimeout(()=> {
            let nodes = document.getElementById('buy-place').childNodes;
                nodes.forEach( item => {
                    if(item.id.includes(e.target.id)) {
                        item.remove();
                        data.store.forEach( (el, i) => {
                            if(el === e.target.id) {
                                data.store.splice(i, 1);
                            }
                        }); 
                    }
                });
            e.target.style.background = 'white';
            
        }, 1000 * 60);
        data.time.push(timeOut);  
    },
    saveInLocalStorage() {
        data.time.forEach( item => {
            clearTimeout(item);
        });
        localStorage.setItem(`sell`, JSON.stringify(data.store));     
    },
    returnLocalStorage: () => {
        let dataStorage = [...JSON.parse(localStorage.getItem('sell'))];
            dataStorage.forEach( el => data.store.push(el));
        return data.store;
    }
};


export default Store;