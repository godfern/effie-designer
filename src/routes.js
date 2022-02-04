

import Home from './pages/home';
import MyWork from './pages/mywork';
import Experience from './pages/experience';
import Contact from './pages/contact';


const routes = [
  {
    route: "/",
    component: <Home/>
  },
  {
    route: "/mywork",
    component: <MyWork/>,
  },
  {
    route: "/experience",
    component: <Experience/>,
  },
  {
    route: "/contact",
    component: <Contact/>,
  }
];

export default routes;
