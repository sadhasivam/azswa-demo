import React from "react";
import ReactDOM from "react-dom/client";
import App from "./WalTarMap";


let rootElement = document.getElementById("root");
if (!rootElement) {
    rootElement = document.createElement("div");
    rootElement.id = "root";
    document.body.appendChild(rootElement);
}

ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
                <h1>Hello DataWorks!!! </h1>
                <h2>  Azure Static Web Apps here</h2>
                <App></App>
        </React.StrictMode>,
);
