const data = {
    laws: [],
    budget: 1000000,
    citizensSatisfactions: 0
}

  
const MySingleton = {
    addLaw: obj => {
        data.laws.push(obj);
        data.citizensSatisfactions -= 10;
    },
    readLaws: () => data.laws.forEach( el => console.log(el.name,':', el.description)),
    readLaw: id => {
        let findLaw = data.laws.find( item => item.id === id );
            console.log(findLaw.name, ':', findLaw.description);
    },
    showStatistic: () => console.log(data.citizensSatisfactions),
    showBudget: () => console.log(data.budget),
    makeFeast: () => {
        data.budget = data.budget - 50000;
        data.citizensSatisfactions += 5;
    }
  };

  Object.freeze(MySingleton);
  
  export default MySingleton;
  