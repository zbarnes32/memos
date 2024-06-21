
import { ActiveMemoController } from "./controllers/ActiveMemoController.js";
// import { HomeController } from "./controllers/HomeController.js";
import { MenuController } from "./controllers/MenuController.js";
import { Router } from "./utils/Router.js";

export const router = new Router([
  // {
  //   path: '',
  //   controllers: [HomeController],
  //   view: 'app/views/HomeView.html'
  // },
  {
    path: '#/offcanvasExample',
    controllers: [MenuController],
    view: 'app/views/MenuView.html'
  }, 
  {
    path: '#/activeMemoView',
    controllers: [ActiveMemoController],
    view: 'app/views/ActiveMemoView.html'
  },
  // {
  //   path: '',
  //   controllers: [],
  //   view: ''
  // }
 
])