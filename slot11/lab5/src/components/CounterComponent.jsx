import React, { useReducer } from "react";
import { useTheme } from "../contexts/ThemeContext";

// Reducer cho counter
const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

const CounterComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const { theme, toggleTheme } = useTheme();

  const containerStyle = {
    padding: "24px 32px",
    borderBottom: "1px solid #dee2e6",
    backgroundColor: theme === "light" ? "#ffffff" : "#1f2933",
    color: theme === "light" ? "#000000" : "#f9fafb",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: 600,
    marginBottom: "8px",
  };

  const subtitleStyle = {
    fontSize: "18px",
    marginBottom: "16px",
  };

  const btnBase = {
    padding: "8px 16px",
    marginRight: "8px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    color: "#fff",
    fontWeight: 500,
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Bộ Đếm Đa Năng</h2>
      <div style={subtitleStyle}>Giá trị hiện tại: {state.count}</div>
      <div>
        {/* Nút Dark/Light đổi theme cho cả app */}
        <button
          style={{ ...btnBase, backgroundColor: "#6c757d" }}
          onClick={toggleTheme}
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>

        <button
          style={{ ...btnBase, backgroundColor: "#0d6efd" }}
          onClick={() => dispatch({ type: "increment" })}
        >
          Tăng (+1)
        </button>
        <button
          style={{ ...btnBase, backgroundColor: "#ffc107", color: "#000" }}
          onClick={() => dispatch({ type: "decrement" })}
        >
          Giảm (-1)
        </button>
        <button
          style={{ ...btnBase, backgroundColor: "#dc3545" }}
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterComponent;
// import React, { useReducer } from 'react';
// import { Button, Card, Container } from 'react-bootstrap';
// import { useTheme } from '../contexts/ThemeContext';

// // Reducer cho counter
// const counterReducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     case 'reset':
//       return { count: 0 };
//     case 'toggle':
//       return { count: state.count > 0 ? 0 : 1 };
//     default:
//       return state;
//   }
// };

// const CounterComponent = () => {
//   const [state, dispatch] = useReducer(counterReducer, { count: 0 });
//   const { theme, toggleTheme } = useTheme();

//   // Styles dựa trên theme
//   const cardStyle = {
//     backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
//     color: theme === 'light' ? '#000000' : '#ffffff',
//     border: theme === 'light' ? '1px solid #ddd' : '1px solid #555',
//   };

//   const buttonVariant = theme === 'light' ? 'primary' : 'secondary';

//   return (
//     <Container className="mt-4">
//       <Card style={cardStyle}>
//         <Card.Body>
//           <Card.Title>Counter Component</Card.Title>
//           <Card.Text>Count: {state.count}</Card.Text>
//           <div className="d-flex gap-2 mb-3">
//             <Button variant={buttonVariant} onClick={toggleTheme}>
//               Toggle
//             </Button>
//             <Button variant={buttonVariant} onClick={() => dispatch({ type: 'increment' })}>
//               Increment
//             </Button>
//             <Button variant={buttonVariant} onClick={() => dispatch({ type: 'decrement' })}>
//               Decrement
//             </Button>
//             <Button variant={buttonVariant} onClick={() => dispatch({ type: 'reset' })}>
//               Reset
//             </Button>
//           </div>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default CounterComponent;