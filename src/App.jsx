import "./styles/all.css"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/header/header";
import Homepage from "./pages/home"
import Requestpage from "./pages/request"
import Article from "./components/article/article"
import Allbranch from "./components/all branch/allbranch";
// start branhces
import Branchone from "./components/branch details/branch one/branch"
import Branchtwo from "./components/branch details/branch two/branch"
import Branchthree from "./components/branch details/branch three/branch"
import Branchfour from "./components/branch details/branch four/branch"
import Branchfive from "./components/branch details/branch five/branch"
// end branches
import Error from "./components/eror/eror";

import Footer from "./components/footer/footer";
function App() {
  return (
    <>
    <BrowserRouter>
          <Header/>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/request" element={<Requestpage />} />
      <Route path="/article" element={<Article />} />
      <Route path="/service" element={<Allbranch />} />
      <Route path="/branchone" element={<Branchone />} />
      <Route path="/branchtwo" element={<Branchtwo />} />
      <Route path="/branchthree" element={<Branchthree />} />
      <Route path="/branchfour" element={<Branchfour />} />
      <Route path="/branchfive" element={<Branchfive />} />
          <Route path="*" element={<Error />} />

    </Routes>
          <Footer/>

    </BrowserRouter>
    </>
    
   
  );
}

export default App;
