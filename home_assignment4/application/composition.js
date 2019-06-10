import DistributeTasks from './functions/DistributeTasks';
import DrinkSomeTea from './functions/DrinkSomeTea';
import MakeBackendMagic from './functions/MakeBackendMagic';
import MakeFrontendMagic from './functions/MakeFrontendMagic';
import MakeItLooksBeautiful from './functions/MakeItLooksBeautiful';
import Procrastinate from './functions/Procrastinate';
import WatchYoutube from './functions/WatchYoutube';

const Composition = () => {

    const BackendDeveloper = (name, gender, age) => {
        const state = {
            name,
            gender,
            age
        }

        return Object.assign(
            {},
            state,
            MakeBackendMagic(state),
            DrinkSomeTea(state),
            Procrastinate(state)
        )
    }

    const FrontendDeveloper = (name, gender, age) => {
        const state = {
            name,
            gender,
            age
        }

        return Object.assign(
            {},
            state,
            MakeFrontendMagic(state),
            DrinkSomeTea(state),
            WatchYoutube(state)
        )
    }

    const Desinger = (name, gender, age) => {
        const state = {
            name,
            gender,
            age
        }

        return Object.assign(
            {},
            state,
            MakeItLooksBeautiful(state),
            WatchYoutube(state),
            Procrastinate(state)
        )
    }

    const ProjectManager = (name, gender, age) => {
        const state = {
            name,
            gender,
            age
        }

        return Object.assign(
            {},
            state,
            DistributeTasks(state),
            Procrastinate(state),
            DrinkSomeTea(state)
        )
    }

    const Alex = BackendDeveloper('Alex', 'man', 25);
        Alex.backendMagic();
        Alex.drinkTea();
        Alex.procrastinate();
    console.log(Alex);

    const Oleg = FrontendDeveloper('Oleg', 'man', 22);
        Oleg.frontendMagic();
        Oleg.drinkTea();
        Oleg.watchYoutube();
    console.log(Oleg);

    const Ania = Desinger('Ania', 'female', 21);
        Ania.looksBeautiful();
        Ania.watchYoutube();
        Ania.procrastinate();
    console.log(Ania);

    const Vadim = ProjectManager('Vadim', 'man', 23);
        Vadim.distrTasks();
        Vadim.procrastinate();
        Vadim.drinkTea();
    console.log(Vadim);
}

export default Composition;



