import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
// import Landing from "./Components/Landing";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
import styled from 'styled-components'
const Container = styled.div`
    width: 100%;
    height: auto;
    border: 11px solid #000;
`
function App() {
  return (
    <Container className="App">
      <Router>
        <Toaster/>
        <Routes>
          {/* <Route path="/" element={<Landing/>}/> */}
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
