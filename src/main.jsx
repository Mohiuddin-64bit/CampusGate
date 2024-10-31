import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/AppRoutes.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { AuthProvider } from './contexts/authContext/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      </Provider>
  </StrictMode>,
)
