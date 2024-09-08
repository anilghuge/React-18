import { NetFlixRegister } from "../netflix-register/netflix-register";
import "./netflix-main.css";
export function NetflixMain() {
  return (
    <main>
      <div className="main-title">
        Laughter. Tears. Thrills. Find it all on Netflix.
      </div>
      <div className="main-subtitle">
        Endless entertainment starts at just ₹ 149. Cancel anytime.
      </div>
      <NetFlixRegister />
    </main>
  );
}
