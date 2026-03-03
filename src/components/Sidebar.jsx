function Sidebar({ cambiarVista }) {
  return (
    <div style={{
      width: "220px",
      backgroundColor: "#2c3e50",
      color: "white",
      padding: "20px"
    }}>
      <h3>Menú</h3>

      <p style={{cursor:"pointer"}} onClick={() => cambiarVista("login")}>
        Login
      </p>

      <p style={{cursor:"pointer"}} onClick={() => cambiarVista("estudiantes")}>
        Estudiantes
      </p>
    </div>
  );
}

export default Sidebar;