import React from 'react'
import ReactDOM from 'react-dom/client'
// import AuthLayout from './layouts/auth-layout'
import AdminLayout from './layouts/admin-layout'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthLayout /> */}
    <AdminLayout />

  </React.StrictMode>
)