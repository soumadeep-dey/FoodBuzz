import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import "./Home.css";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <main>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </main>
  );
};

export default Home;
