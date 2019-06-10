const ITEA_COURSES = ["Курс HTML & CSS", "JavaScript базовый курс", "JavaScript продвинутый курс", "JavaScript Professional", "Angular 2.4 (базовый)", "Angular 2.4 (продвинутый)", "React.js", "React Native", "Node.js", "Vue.js"];
// 1 task
const LENGTH_ELEMENTS = ITEA_COURSES.map( ({ length} ) => length );
console.log('length elements:',LENGTH_ELEMENTS);

// 2 task
const ARR_SORT = ITEA_COURSES.sort();
const BODY = document.body;
const UL = document.createElement('ul');
ARR_SORT.forEach( item => {
    let li = document.createElement('li');
        li.innerText = item;
        UL.appendChild(li);
});
BODY.appendChild(UL);

// 3 task
let input = document.createElement('input');
let button = document.createElement('button');
    button.innerText = 'search';
    BODY.appendChild(input);
    BODY.appendChild(button);

button.onclick = function searchElements() {
    let strSearch = input.value;
        ITEA_COURSES.forEach( item => {
            if( item.includes(strSearch) ) {
                let findItem = document.createElement('div');
                    findItem.innerText = item;
                    BODY.appendChild(findItem);
            } 
        })         
}


















