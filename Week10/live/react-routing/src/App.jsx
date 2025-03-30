import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './Layout'
import { Landing } from "./Landing";
import { Class11Program } from "./Class11Program";
import { Class12Program } from "./Class12Program";
import { NoPage } from './NoPage'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route path="/" element={<Landing />} />
          <Route
            path="/neet/online-class-11"
            element={<Class11Program />}
          />
          <Route
            path="/neet/online-class-12"
            element={<Class12Program />}
          />
          <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
