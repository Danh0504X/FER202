import React, { useReducer } from "react";
import { useTheme } from "../contexts/ThemeContext";

// Reducer cho light switch
const switchReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { isOn: !state.isOn };
    case "turnOn":
      return { isOn: true };
    case "turnOff":
      return { isOn: false };
    default:
      return state;
  }
};

const LightSwitch = () => {
  const [state, dispatch] = useReducer(switchReducer, { isOn: false });
  const { theme, toggleTheme } = useTheme();

  const containerStyle = {
    padding: "24px 32px",
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

  const trangThai = state.isOn ? "Bật" : "Tắt";

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Công Tắc Đèn</h2>
      <div style={subtitleStyle}>Đèn hiện đang: {trangThai}</div>
      <div>
        {/* Nút Dark/Light đổi theme cho cả app */}
        <button
          style={{ ...btnBase, backgroundColor: "#6c757d" }}
          onClick={toggleTheme}
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>

        {/* Nút chuyển đổi chỉ đổi trạng thái đèn */}
        <button
          style={{ ...btnBase, backgroundColor: "#0d6efd" }}
          onClick={() => dispatch({ type: "toggle" })}
        >
          Chuyển Đổi
        </button>

        <button
          style={{ ...btnBase, backgroundColor: "#198754" }}
          onClick={() => dispatch({ type: "turnOn" })}
        >
          Bật Đèn
        </button>
        <button
          style={{ ...btnBase, backgroundColor: "#dc3545" }}
          onClick={() => dispatch({ type: "turnOff" })}
        >
          Tắt Đèn
        </button>
      </div>
    </div>
  );
};

export default LightSwitch;
// import React, { useReducer } from 'react';
// import { Button, Card, Container } from 'react-bootstrap';
// import { useTheme } from '../contexts/ThemeContext';

// // Reducer cho light switch
// const switchReducer = (state, action) => {
//   switch (action.type) {
//     case 'toggle':
//       return { isOn: !state.isOn };
//     case 'turnOn':
//       return { isOn: true };
//     case 'turnOff':
//       return { isOn: false };
//     default:
//       return state;
//   }
// };

// const LightSwitch = () => {
//   const [state, dispatch] = useReducer(switchReducer, { isOn: false });
//   const { toggleTheme } = useTheme();
//   // Styles dựa trên local state
//   const cardStyle = {
//     backgroundColor: state.isOn ? '#ffffff' : '#333333',
//     color: state.isOn ? '#000000' : '#ffffff',
//     border: state.isOn ? '1px solid #ddd' : '1px solid #555',
//   };

//   const buttonVariant = state.isOn ? 'success' : 'warning';

//   return (
//     <Container className="mt-4">
//       <Card style={cardStyle}>
//         <Card.Body>
//           <Card.Title>Light Switch Component</Card.Title>
//           <Card.Text>Switch is: {state.isOn ? 'ON' : 'OFF'}</Card.Text>
//           <div className="d-flex gap-2 mb-3">
//             <Button variant={buttonVariant} onClick={toggleTheme}>
//               Toggle
//             </Button>
//             <Button variant={buttonVariant} onClick={() => dispatch({ type: 'turnOn' })}>
//               Turn On
//             </Button>
//             <Button variant={buttonVariant} onClick={() => dispatch({ type: 'turnOff' })}>
//               Turn Off
//             </Button>
//           </div>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default LightSwitch;