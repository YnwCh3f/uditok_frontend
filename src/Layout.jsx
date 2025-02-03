import React from 'react'
import './App.css'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {

    const navigate = useNavigate();

  return (
    <div className='layout'>
        <div className='buttons'>
            <div style={{ display: "flex", gap: "10px" }}>
                <input onClick={() => navigate("/uditok")} type="button" value="Üdítők" />
                <input onClick={() => navigate("/szerkeszt")} type="button" value="Szerkeszt" />
            </div>
            <input onClick={() => navigate("/nevjegy")} type="button" value="Névjegy" />
        </div>
        <Outlet />
    </div>
  )
}

export default Layout
