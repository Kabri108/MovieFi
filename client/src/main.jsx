import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './Redux/store.jsx'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
)
