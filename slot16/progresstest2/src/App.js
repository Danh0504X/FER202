import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import LoginForm from './components/LoginForm';
import ProtectedRoute from './routes/ProtectedRoute';

import ExpensesDashboard from './components/ExpenseDashboard';  

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* Route login */}
          <Route path="/login" element={<LoginForm />} />

          {/* Route được bảo vệ */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ExpensesDashboard   />
              </ProtectedRoute>
            }
          />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;