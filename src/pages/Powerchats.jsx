import React, { useState, useEffect } from 'react';
import '../App.css'; // This will be your style.css, renamed or linked.

function Powerchats() {
  const [activeTab, setActiveTab] = useState('aba1');
  const [loading, setLoading] = useState(false);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleReload = (tabId) => {
    setLoading(true);
    const iframe = document.querySelector(`#${tabId} iframe`);
    if (iframe) {
      const src = iframe.src;
      iframe.src = ""; // Clear src to force reload
      setTimeout(() => {
        iframe.src = src;
      }, 100);
    }
  };

  // Effect to hide loader when iframe loads
  useEffect(() => {
    const iframes = document.querySelectorAll('iframe');
    const handleLoad = () => setLoading(false);

    iframes.forEach(iframe => {
      iframe.addEventListener('load', handleLoad);
    });

    return () => {
      iframes.forEach(iframe => {
        iframe.removeEventListener('load', handleLoad);
      });
    };
  }, [activeTab]); // Rerun if activeTab changes to attach listener to new iframe if any

  // Adjust layout on window resize (optional, might be handled by CSS iframes take full height)
  useEffect(() => {
    const adjustLayout = () => {
      const tabHeight = document.querySelector('.tabs')?.offsetHeight;
      if (tabHeight) {
        document.querySelectorAll('.tab-content').forEach(content => {
          content.style.top = `${tabHeight}px`;
        });
      }
    };

    adjustLayout();
    window.addEventListener('resize', adjustLayout);
    return () => window.removeEventListener('resize', adjustLayout);
  }, []);


  return (
    

    <div className="app-container">
      <div className="tabs">
        <div className="tab-header">
          <button
            className={`tab-btn ${activeTab === 'aba1' ? 'active' : ''}`}
            onClick={() => handleTabClick('aba1')}
          >
            POWERCHATS
          </button>
          <button className="reload-btn" onClick={() => handleReload('aba1')}>
            ↻
          </button>
        </div>
      
      </div>

      <div id="loader" style={{ display: loading ? 'block' : 'none' }}>
        Carregando...
      </div>

      <div id="aba1" className={`tab-content ${activeTab === 'aba1' ? 'active' : ''}`}>
        <iframe src="https://app.powerchats.com.br/" frameBorder="0"></iframe>
      </div>
      
    </div>
  );
}

export default Powerchats;