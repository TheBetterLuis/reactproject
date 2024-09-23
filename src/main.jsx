import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {HashRouter as Router} from 'react-router-dom'
import Application from './components/Application'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Application></Application>
    </Router>
  </StrictMode>,
)
