import './App.css';

function App() {
  return (
    <div className="parent container h-100 d-flex justify-content-center align-items-center" style={{backgroundColor: "yellow"}}>
      <div className="card border-warning border border-3 text-center" style={{maxWidth: "540px;"}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="https://i.pinimg.com/originals/db/b5/8b/dbb58bcf9c5aeb5a0d019c5d6653ecf8.gif" className="card-img"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">
              🐱Hola <span className='text-warning fw-bold fst-italic'>Karla Chavira</span>
              </h1>
              <h4 className="card-text py-4 fst-italic text-muted">
                "La vida es como una cámara: sólo <span className='text-warning'>enfócate</span> en lo que es importante, <span className='text-warning'>captura</span> los buenos momentos, saca de lo <span className='text-warning'>negativo</span> un aprendizaje <span className='text-warning'>revelado</span>, y si las cosas no salen como deseabas, intenta una nueva <span className='text-warning'>toma</span>."
              </h4>
              <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/track/2iThPS3xkcRgg8V3ZgZWPQ?utm_source=generator&theme=0" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
