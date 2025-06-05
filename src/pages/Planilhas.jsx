import React, { useState, useEffect } from 'react';
import '../App.css'; // This will be your style.css, renamed or linked.

function planilhas() {
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
            PLANILHA DE ATENDIMENTOS
          </button>
          <button className="reload-btn" onClick={() => handleReload('aba1')}>
            ↻
          </button>
        </div>
        <div className="tab-header">
          <button
            className={`tab-btn ${activeTab === 'aba2' ? 'active' : ''}`}
            onClick={() => handleTabClick('aba2')}
          >
            POWERCHAT
          </button>
          <button className="reload-btn" onClick={() => handleReload('aba2')}>
            ↻
          </button>
        </div>
        <div className="tab-header">
          <button
            className={`tab-btn ${activeTab === 'aba3' ? 'active' : ''}`}
            onClick={() => handleTabClick('aba3')}
          >
            SAIDAS / DEMONSTRAÇÃO
          </button>
          <button className="reload-btn" onClick={() => handleReload('aba3')}>
            ↻
          </button>
        </div>
        <div className="tab-header">
          <button
            className={`tab-btn ${activeTab === 'aba4' ? 'active' : ''}`}
            onClick={() => handleTabClick('aba4')}
          >
            ACESSOS CLIENTES
          </button>
          <button className="reload-btn" onClick={() => handleReload('aba4')}>
            ↻
          </button>
        </div>
        <div className="tab-header">
          <button
            className={`tab-btn ${activeTab === 'aba5' ? 'active' : ''}`}
            onClick={() => handleTabClick('aba5')}
          >
            PLANILHA SABADOS
          </button>
          <button className="reload-btn" onClick={() => handleReload('aba5')}>
            ↻
          </button>
        </div>
        <div className="tab-header">
          <button
            className={`tab-btn ${activeTab === 'aba6' ? 'active' : ''}`}
            onClick={() => handleTabClick('aba6')}
          >
            PLANILHA BLOQUEIOS
          </button>
          <button className="reload-btn" onClick={() => handleReload('aba6')}>
            ↻
          </button>
        </div>
      </div>

      <div id="loader" style={{ display: loading ? 'block' : 'none' }}>
        Carregando...
      </div>

      <div id="aba1" className={`tab-content ${activeTab === 'aba1' ? 'active' : ''}`}>
        <iframe src="https://docs.google.com/spreadsheets/d/1HQr0xQ_9J-XknmXBdgLEWLzTMU7NrNRFnqLldsBoBgk/edit?gid=1852971832#gid=1852971832" frameBorder="0"></iframe>
      </div>
      <div id="aba2" className={`tab-content ${activeTab === 'aba2' ? 'active' : ''}`}>
        <iframe src="https://app.powerchats.com.br/" frameBorder="0"></iframe>
      </div>
      <div id="aba3" className={`tab-content ${activeTab === 'aba3' ? 'active' : ''}`}>
        <iframe src="https://docs.google.com/spreadsheets/d/1QyKqMe-dHuIXHmS5A9qhGcw5LQHYsEZzDFZV0P05Euc/edit?pli=1&gid=900920329#gid=900920329" frameBorder="0"></iframe>
      </div>
      <div id="aba4" className={`tab-content ${activeTab === 'aba4' ? 'active' : ''}`}>
        <iframe src="https://docs.google.com/spreadsheets/d/1ep0hFw7CdT7l7HsLQNdPLIFZ1fyRSeKZFhvmFSY-hwQ/edit?gid=0#gid=0" frameBorder="0"></iframe>
      </div>
      <div id="aba5" className={`tab-content ${activeTab === 'aba5' ? 'active' : ''}`}>
        <iframe src="https://docs.google.com/spreadsheets/d/1B1GufNXVUOJ8rGGxfDTrP_qQ_taZ-D0VMhgPpuSl5gA/edit?gid=1740082606#gid=1740082606" frameBorder="0"></iframe>
      </div>
      <div id="aba6" className={`tab-content ${activeTab === 'aba6' ? 'active' : ''}`}>
        <iframe src="https://docs.google.com/spreadsheets/d/13s2djg-M_PmL36zkRwrEGa1u1U46JULBepiFxJo_JiM/edit?gid=698920338#gid=698920338" frameBorder="0"></iframe>
      </div>
    </div>
  );
}

export default planilhas;