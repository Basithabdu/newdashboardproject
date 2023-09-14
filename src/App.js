//import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Header2 from "./Header2/Header2";
import Header3 from "./Header3/Header3";
import HotNews from "./HotNews/HotNews";
import HumansContainer from "./HumansContainer/HumansContainer";
import TopNews from "./TopNews/TopNews";
import LatestNews from "./LatestNews/LatestNews";
import Space from "./Space/Space";
import SecretChines from "./SecretChines/SecretChines";
import BottomFooder from "./Bottom/BottomFooder";

function App() {
  return (
    <div className="App">
      <Header />
      <Header2 />
      <Header3 />
      <HotNews />
      <HumansContainer />
      <TopNews />
      <LatestNews />
      <Space />
      <SecretChines />
      <BottomFooder />
    </div>
  );
}

export default App;
