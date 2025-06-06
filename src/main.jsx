import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Vite's default global CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Service Worker registration
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js') // Path relative to public folder
//       .then(registration => {
//         console.log('SW registered: ', registration);
//         // You might want to update the SW more frequently in production
//         // For development, it's often better to unregister or use browser's update on reload
//         setInterval(() => registration.update(), 60 * 60 * 1000); // Update every hour
//       })
//       .catch(registrationError => {
//         console.log('SW registration failed: ', registrationError);
//       });
//   });
// }
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const pathname = window.location.pathname;

    let swPath = "/sw.js";
    let scope = "/";

    if (pathname.startsWith("/powergestor")) {
      swPath = "/sw.js";
      scope = "/powergestor/";
    } else if (pathname.startsWith("/planilhas")) {
      swPath = "/sw.js";
      scope = "/planilhas/";
    } else if (pathname.startsWith("/powerchats")) {
      swPath = "/sw.js";
      scope = "/powerchats/";
    }

    navigator.serviceWorker
      .register(swPath, { scope })
      .then((registration) => {
        console.log("SW registered for scope:", scope);
        setInterval(() => registration.update(), 60 * 60 * 1000); // Atualiza a cada 1 hora
      })
      .catch((error) => {
        console.error("SW registration failed:", error);
      });
  });
}
