import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LoginForm from "./components/LoginForm";
import StudentsTable from "./components/StudentsTable";
import StudentForm from "./components/StudentForm";

function App() {
  const [vista, setVista] = useState("login");

  const renderVista = () => {
    switch (vista) {
      case "login":
        return <LoginForm />;
      case "estudiantes":
        return (
          <>
            <StudentForm />
            <StudentsTable />
          </>
        );
      default:
        return <LoginForm />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      <Navbar />

      <div style={{ display: "flex", flex: 1 }}>
        
        <Sidebar cambiarVista={setVista} />

        <div style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "#f4f6f9"
        }}>
          {renderVista()}
        </div>

      </div>

    </div>
  );
}

export default App;