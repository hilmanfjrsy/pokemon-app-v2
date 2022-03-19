import { faBoxOpen, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const tabs = [{
    route: "/",
    icon: faHouse,
    label: "Home"
  }, {
    route: "/my-pokemon",
    icon: faBoxOpen,
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
              <NavLink to={item.route} className={({isActive})=>(isActive? "active center":'center')}>
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.label}</span>
              </NavLink>
            </div>
          ))
        }
      </nav>
    </div>
  )
}