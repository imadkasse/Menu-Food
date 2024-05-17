import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import CardsList from "./components/CardsList";
import { items } from "./Data";
import { useState } from "react";
function App() {
  const [itemData, setItemData] = useState(items);

  const allCategory = ["الكل", ...new Set(items.map((i) => i.category))];
  console.log(allCategory);
  //filter data by category

  const filterData = (cat) => {
    if (cat === "الكل") {
      setItemData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemData(newArr);
    }
  };

  //filter data by Search

  const filterDataSearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word);
      setItemData(newArr);
    }
  };
  return (
    <div className="color-body font">
      <NavBar filterDataSearch={filterDataSearch} />
      <Container>
        <Header />
        <Category filterData={filterData} allCategory={allCategory} />
        <CardsList itemData={itemData} />
      </Container>
    </div>
  );
}

export default App;
