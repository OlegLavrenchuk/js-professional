// import myFreeze from './objectfreeze';
import mySingle from './singleton';

// let universe = {
//   infinity: Infinity,
//   good: ['cats', 'love', 'rock-n-roll'],
//   evil: {
//     bonuses: ['cookies', 'great look']
//   }
// }

// let FarGalaxy = myFreeze(universe);
//     FarGalaxy.good.push('javascript'); // false
//     FarGalaxy.something = 'Wow!'; // false
//     FarGalaxy.evil.humans = [];   // false


mySingle.addLaw({id: 1, name: 'Программирование', description: 'Нельзя кодить в общественных местах'});
mySingle.addLaw({id: 2, name: 'Отдых', description: 'Можно отдыхать когда хочешь'});
mySingle.addLaw({id: 3, name: 'Сон', description: 'Нельзя спать на рабочем месте'});
mySingle.readLaws();
mySingle.makeFeast();
mySingle.readLaw(2);
mySingle.showBudget();
mySingle.showStatistic();