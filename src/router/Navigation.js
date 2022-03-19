import React, { Component, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ContextProvider } from '../context/BaseContext';

export default function Navigation() {
  const context = useContext(ContextProvider)
  const tabs = [{
    route: "/",
    icon: "fa-solid fa-house",
    label: "Home"
  }, {
    route: "/my-pokemon",
    icon: "fa-solid fa-box-open",
    label: "My Pokemon"
  }]

  return (
    <div>
      <nav className='nav-top space-between sticky-top'>
        <div >
          <NavLink to='/' className='logo'>POKEPICK</NavLink>
        </div>
        <div className='nav space-between'>
          <NavLink to='/' className={({isActive})=>(isActive? "active":'')}>Home</NavLink>
          <NavLink to='/my-pokemon' className={({isActive})=>(isActive? "active":'')}>My Pokemon</NavLink>
        </div>
      </nav>
      <nav className='nav-bot space-around fixed-bottom'>
        {
          tabs.map((item, index) => (
            <div key={index}>
              <NavLink to={item.route} className={({isActive})=>(isActive? "active":'')}>
                <i className={`${item.icon} f-20`}></i>
                <span>{item.label}</span>
              </NavLink>
            </div>
          ))
        }
      </nav>
    </div>
  )
}