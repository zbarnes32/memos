import { MemoController } from "./controllers/MemoController.js";


import { Router } from "./utils/Router.js";

export const router = new Router([
  {
    path: '',
    controllers: [MemoController],
    view: 'app/views/HomeView.html'
  },
 
  // {
  //   path: '',
  //   controllers: [],
  //   view: ''
  // }
 
])