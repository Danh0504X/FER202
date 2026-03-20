import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import LoginForm from "./components/LoginForm";
import ExpenseDashboard from "./components/ExpenseDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ExpenseDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;