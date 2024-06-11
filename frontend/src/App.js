import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import styles from "./App.module.css";

// pages & components
import AccessPage from "./components/AccessPage/AccessPage";
import HomePage from "./components/HomePage/HomePage";
import GamePage from "./components/GamePage/GamePage";
import EndPage from "./components/EndPage/EndPage";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<AccessPage />}
          />
          <Route
            exact
            path="/home"
            element={<HomePage />}
          />
          <Route
            path="/game/:quizId"
            element={<GamePage />}
          />
          <Route
            path="/end"
            element={<EndPage />}
          />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;