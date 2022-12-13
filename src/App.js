import './App.css';
import Carousel from "./Pages/Carousel/Carousel";
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Navbar from './Pages/Navbar/Navbar';
import Open from './Pages/Open/Open';
import useBooks from './utilities/useBook';

function App() {
  const book = useBooks()

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Open/>
      <Carousel name={"Tranding Books"} books ={book.trandings}/>
      <Carousel name={"Classic Books"} books ={book.classics}/>
      <Carousel name={"Books We Love"} books ={book.loves}/>

      <Carousel name={"Recently Returned"} books ={book.trandings}/>
      <Carousel name={"Romance"} books ={book.classics}/>
      <Carousel name={"Kids"} books ={book.loves}/>

      <Carousel name={"Thrillers"} books ={book.trandings}/>
      <Carousel name={"Textbooks"} books ={book.classics}/>
      <Carousel name={"Authors Alliance & MIT Press"} books ={book.loves}/>
      <Footer/>
    </div>
  );
}

export default App;
