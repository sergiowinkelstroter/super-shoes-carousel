import logo from "./static/images/super-shoes.png";
import "./App.css";
import { Slide } from "./components/Slide/Slide";

export const App = () => {
  return (
    <main className="container">
      <div className="logo">
        <img src={logo} alt="Super Shoes logo" />
      </div>
      <Slide />
    </main>
  );
};
