const MY_COMPANY = [];
const SELECTED_COMPANY = [];
let change = true;

class Operations {
    constructor() {
        let sortBalance = document.getElementById('balance');
            sortBalance.style.cursor = 'pointer';
            sortBalance.addEventListener('click', this.sortMoney);
        let sortPeople = document.getElementById('employees');
            sortPeople.style.cursor = 'pointer';
            sortPeople.addEventListener('click', this.sortEmployers) 
        let address = document.getElementById('showAddress');
            address.style.cursor = 'pointer';
            address.addEventListener('click', this.showAddress);
        let back = document.getElementById('special__back');
            back.style.cursor = 'pointer';
            back.addEventListener('click', this.backToCompanys);
        let input = document.getElementById('special__search');
            input.addEventListener('change', this.searchUsers);        
    }

    showAddress() {
        let addressInfo = document.querySelectorAll('#td3');
            MY_COMPANY.map( (item, ind) => {
                let obj = item.address;
                    addressInfo[ind].innerHTML = `${obj.city}, ${obj.country}, ${obj.house}, ${obj.state}`;
            });
    }

    sortEmployers() {
        let removeTR = document.querySelectorAll('#tr');
            removeTR.forEach( el => el.remove());
        let ARR = MY_COMPANY.slice().sort( (a, b) => a.employers.length - b.employers.length );
            MY_COMPANY.length = 0;  
            ARR.map( item => new Company(item).render());
    }

    sortMoney() {
        let removeTR = document.querySelectorAll('#tr');
            removeTR.forEach( el => el.remove());
        let ARR = MY_COMPANY.slice().sort( (a, b) => a.balance.replace(/[$]/g, "") - b.balance.replace(/[$]/g, ""));
            MY_COMPANY.length = 0;  
            ARR.map( item => new Company(item).render());
    }

    showEmployees(e) {
        let table = document.getElementById('table');
            table.hidden = true;
        let specialTable = document.getElementById('special__table');
            specialTable.hidden = false;
        let companyName = document.getElementById('special__company');
            companyName.innerText = e.target.parentNode.firstChild.innerText;
            change = false;

        MY_COMPANY.filter( item => {
            if(item.company === e.target.parentNode.firstChild.innerText){
                SELECTED_COMPANY.push(item);
                return new Company(item).render();
            }
        });
    }

    backToCompanys() {
        let specialTable = document.getElementById('special__table');
            specialTable.hidden = true;
        let allNodes = document.querySelectorAll('#special__tr');
            allNodes.forEach( el => el.remove());
        let table = document.getElementById('table');
            table.hidden = false;
            SELECTED_COMPANY.length = 0;
    }

    searchUsers(e) {
        let value = e.target.value;
        let myNode = document.querySelectorAll('#special__tr');
            myNode.forEach( el => {
                if( el.firstChild.innerText.includes(value) ) {
                    el.hidden = false;
                } else {
                    el.hidden = true;
                }
            });        
    }
};

class Company extends Operations {
    constructor({ company, balance, registered, address, employers }) {
        super();
        this.company = company;
        this.balance = balance;
        this.registered = registered;
        this.address = address;
        this.employers = employers;
        MY_COMPANY.push(this);
    }

    render() {     
        if(change) {
            const ARR_DATA = [this.company, this.balance, this.registered, '', this.employers.length, 'Показать сотрудников'];
            const TABLE = document.getElementById('table');
            let TR = document.createElement('tr');
                TR.id = 'tr'
                ARR_DATA.forEach( (el, i) => {
                    const TD = document.createElement('td');
                    TD.innerText = el;
                    TD.id = 'td' + i; 
                        if( i == 5 ) {
                            TD.style.cursor = 'pointer';
                            TD.addEventListener('click', super.showEmployees);
                        }
                    TR.appendChild(TD);
                });
                TABLE.appendChild(TR);
        } else {
            const ARR_USERS = ['name', 'gender', 'age', 'phones'];
            const TABLE_USERS = document.getElementById('special__table');
            this.employers.forEach( el => {
                let TR = document.createElement('tr');
                    TR.id = 'special__tr';
                    ARR_USERS.forEach( item => {
                        const TD = document.createElement('td');
                        TD.innerText = el[`${item}`];
                        TR.appendChild(TD);
                    })
                    TABLE_USERS.appendChild(TR);
            });  
        }
    }
};

new Operations();

let data = fetch('http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2')
    .then(response => response.json())
    .then(data => data.map(item => new Company(item).render()));






