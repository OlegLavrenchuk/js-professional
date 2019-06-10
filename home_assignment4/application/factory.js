import DistributeTasks from './functions/DistributeTasks';
import DrinkSomeTea from './functions/DrinkSomeTea';
import MakeBackendMagic from './functions/MakeBackendMagic';
import MakeFrontendMagic from './functions/MakeFrontendMagic';
import MakeItLooksBeautiful from './functions/MakeItLooksBeautiful';
import Procrastinate from './functions/Procrastinate';
import WatchYoutube from './functions/WatchYoutube';

const MyFactory = () => {

  const ARR_WORKERS = [];

  const BackendDeveloper = ({ name, gender, age, type }) => {
    const state = {
      name,
      gender,
      age,
      type
    }

    return Object.assign(
      {},
      state,
      MakeBackendMagic(state),
      DrinkSomeTea(state),
      Procrastinate(state)
    )
  }

  const FrontendDeveloper = ({ name, gender, age, type }) => {
    const state = {
      name,
      gender,
      age,
      type
    }

    return Object.assign(
      {},
      state,
      MakeFrontendMagic(state),
      DrinkSomeTea(state),
      WatchYoutube(state)
    )
  }

  const Desinger = ({ name, gender, age, type }) => {
    const state = {
      name,
      gender,
      age,
      type
    }

    return Object.assign(
      {},
      state,
      MakeItLooksBeautiful(state),
      WatchYoutube(state),
      Procrastinate(state)
    )
  }

  const ProjectManager = ({ name, gender, age, type }) => {
    const state = {
      name,
      gender,
      age,
      type
    }

    return Object.assign(
      {},
      state,
      DistributeTasks(state),
      Procrastinate(state),
      DrinkSomeTea(state)
    )
  }

  class WorkersList {

    hire() {
      let findElement = ARR_WORKERS.find(item => item._id === this.parentNode.id);
      let commandTable = document.getElementById('my__command');
      let node = document.createElement('tr');
          node.id = findElement._id;
          node.innerHTML = `<td>${findElement.name}(${findElement.type}) ${~~findElement.rate}$/h</td>`;
          commandTable.appendChild(node);

      this.parentNode.remove();
    }

    render(obj) {
      let table = document.getElementById('table');
      let node = document.createElement('tr');
          node.id = obj._id;
          node.innerHTML = `
              <td>${obj.name}(${obj.age})</td>
              <td>${obj.type}</td>
              <td id="td"><button>Нанять</button></td>
          `;

          node.lastElementChild.addEventListener('click', this.hire);
          table.appendChild(node);
    }
  };


  class HeadHunt extends WorkersList {

    distribution(obj) {
      let Developer = null;

      switch (obj.type) {
        case 'backend':
          Developer = BackendDeveloper;
          break;
        case 'frontend':
          Developer = FrontendDeveloper;
          break;
        case 'design':
          Developer = Desinger;
          break;
        case 'project':
          Developer = ProjectManager;
          break;
        default:
          return 0;
      }

      return Developer(obj);
    }
  };


  const myApp = new HeadHunt();
  fetch('http://www.json-generator.com/api/json/get/cfeTmcNIXS?indent=2')
    .then(response => response.json())
    .then(data => data.map(item => {
      myApp.distribution(item);
      myApp.render(item);
      ARR_WORKERS.push(item)
    }));
}

export default MyFactory; 