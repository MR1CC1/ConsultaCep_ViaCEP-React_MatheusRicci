import "./App.css";
import * as React from "react";
import ApiViaCep from "./components/ApiViaCep";

function App() {
  return (
    <div className="box">
      <div className="inputs">
        <h1 style={{ textAlign: "center", color: "#bcc4cd" }}>
          <p className="">Consulta CEP - API VIACEP</p>
          <p>
            <a
              style={{ textDecoration: "underline", color: "#bcc4cd" }}
              href="https://www.linkedin.com/in/matheus-ricci-228a06182/"
            >
              Linkedin Matheus Ricci
            </a>
          </p>
        </h1>
        <ApiViaCep />
      </div>
    </div>
  );
}

export default App;
