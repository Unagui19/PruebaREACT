import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import { PrimerCompo } from './primerComp'
// import PrimerCompo from './primerComp'

createRoot(document.getElementById('root')).render( // esta leyendo el index.html y renderiza
  <StrictMode>
    {/* <App /> */}
    <PrimerCompo/>
  </StrictMode>,
)
