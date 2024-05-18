import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import styles from "./App.module.css";
import AccessPage from "./components/AccessPage/AccessPage";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className={styles.App}>
      <Router>
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
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;