import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";

function App() {
  return (
    <>
     <Navbar title = "Converter"/>
     <div className="container">
       {/* <TextForm  heading ="Enter text here"/>  */}
       <About/>
     </div>
    
    </>
  );
}

export default App;
