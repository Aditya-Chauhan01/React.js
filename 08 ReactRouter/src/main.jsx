import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import GitHub, { githubInfoLoader } from './components/git hub/GitHub.jsx'

// we can create like this
// const router = createBrowserRouter([
//   {
//     path: "/",  // top level element
//     element: <Layout />,
//     children: [        // this is nesting
//       {
//         path: "",
//         element: <Home />
//       },
    
//       {
//         path: "about",
//         element: <About />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      {/* <Route path='user/:userid' element={<User />} /> */}
      <Route
      loader = {githubInfoLoader} 
      path='github' 
      element={<GitHub />} 
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router} />
  </StrictMode>
)
