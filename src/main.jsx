import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/index.css'
import './Styles/Grid.css'

import App from './App.jsx'
import Landing from './pages/Landing.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import MyWork from './pages/MyWork.jsx'
import NotFound from './pages/NotFound.jsx'
import Footer from './components/Footer'
import Header from './components/Header'
import Navigation from './components/Navigation'
const router = createBrowserRouter([
  {path:'/',element: <App/>},
  {path: '/contact',element:<Contact/>},
  {path: '/mywork',element:<MyWork/>},
  {path: '*',element:<NotFound />}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='mainContainer'>
  <RouterProvider router={router} />
  </div>
  </StrictMode>,
)
