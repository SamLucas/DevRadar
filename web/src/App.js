import React, { useState, useEffect } from "react";

import "./styles/global.css";
import "./styles/app.css";
import "./styles/aside.css";
import "./styles/main.css";

import api from "./services/api";

import DevItem from "./components/Devitem";
import DevForm from "./components/DevForm";

export default function App() {
  const [devs, setDevs] = useState([]);

  async function loadDevs() {
    const response = await api.get("/devs");
    setDevs(response.data);
  }

  useEffect(() => loadDevs(), []);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmite={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem dev={dev} key={dev._id} />
          ))}
        </ul>
      </main>
    </div>
  );
}
