import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import "../App.css";
import GmButton from "../components/GmButton";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleClick() {
    alert("You clicked me!");
    navigate("/singup");
  }

  return (
    <>
      <section id="center">
        <div className="hero"></div>
        <div>
          <h2>Welcome to Gate App</h2>
          <p>A society gate management application prototype.</p>
        </div>
        <GmButton caption={"➔"} onClick={handleClick} />
      </section>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Learn with us</h2>
          <p>React</p>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}
