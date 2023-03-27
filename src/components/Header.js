import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    

  return (
    <div>
        <header>
            <div className='container'>
                <div className="inner-content">
                    <div className="brand">
                        <Link to={"/"}>Film List</Link>
                    </div>
                    <ul className="nav-links ">
                        <li className='nav-item btn btn-light'>
                            <Link to={"/watched"} className="nav-link text-dark">İzlenenler</Link>
                        </li>
                        <li>
                            <Link to={"/add"} className="btn btn-danger ">
                                <i className='fa-solid fa-heart'></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header
