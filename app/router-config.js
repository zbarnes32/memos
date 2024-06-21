import { MemoController } from "./controllers/MemoController.js";
import { HomeController } from "./controllers/HomeController.js";
import { MenuController } from "./controllers/MenuController.js";

import { Router } from "./utils/Router.js";

export const router = new Router([
  {
    path: '',
    controllers: [HomeController, MenuController, MemoController],
    view: 'app/views/HomeView.html'
  },
 
  // {
  //   path: '',
  //   controllers: [],
  //   view: ''
  // }
 
])