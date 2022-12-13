import './App.css';
import Carousel from "./Pages/Carousel/Carousel";
import useBooks from './utilities/useBook';

function App() {
  const book = useBooks()
  // console.log(trands.trandings)
  const trand = "Tranding Books"
  const classic = "Classic Books"
  const love = "Books We Love"
  return (
    <div className="App">
      <Carousel name={trand} books ={book.trandings}/>
      <Carousel name={classic} books ={book.classics}/>
      <Carousel name={love} books ={book.loves}/>
    </div>
  );
}

export default App;
