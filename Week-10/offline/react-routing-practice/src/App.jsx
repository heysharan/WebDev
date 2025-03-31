import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Landing } from "./Landing";
import { Class11Program } from "./Class11Program";
import { Class12Program } from "./Class12Program";
import { NoPage } from "./NoPage";

const App = () => {
  const routes = [{
    path: '/',
    element: <Landing />
  },{
    path: '/neet/online-class-11',
    element: <Class11Program />
  },{
    path: '/neet/online-class-12',
    element: <Class12Program />
  },{
    path: '*',
    element: <NoPage />
  }]


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {routes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;