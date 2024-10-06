import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import QuestionProvider from './store/QuestionProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<h2>Looading...</h2>}>
    <QuestionProvider>
      <App />
    </QuestionProvider>
  </Suspense>
)
