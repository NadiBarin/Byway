import Categories from "./components/categories/Categories.jsx";
import Courses from "./components/courses/Courses.jsx";
import Header from "./components/header/Header.jsx";
import Promo from "./components/promo/Promo.jsx";
import Info from "./info/Info.jsx";

function App() {
  return (
    <div className="App">
      
      <Header />
      <Promo />
      <Info />
      <Categories />
      <Courses />
      
  
    </div>
  );
}

export default App;
