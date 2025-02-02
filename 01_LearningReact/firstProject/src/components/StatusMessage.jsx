import React, { useState } from "react";

const StatusMessage = () => {
  const [status, setStatus] = useState("loading");

  const handleClick = () => {
    const newStatus = status === "loading" ? "success" : "loading";
    setStatus(newStatus);
  }

  return (
    <div>
      <button onClick={handleClick}>Cambiar estado</button>
      {status === "loading" && <p>Cargando...</p>}
      {status === "success" && <p>Carga completa!</p>}
    </div>
  )
}

export default StatusMessage;
