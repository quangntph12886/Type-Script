import React from 'react'
import { Outlet,Link } from 'react-router-dom'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <header>
            <ul className="nav-list">
              <li className="nav-item"><Link to=''>Home</Link></li>
              <li className="nav-item"><Link to='/admin'>Admin</Link></li>
              <li className="nav-item"><Link to='/admin/product/add'>Create product</Link></li>
            </ul>
        </header>
        <main className='main'>
            <Outlet />
        </main>
        <footer>
            Footer
        </footer>
    </div>
  )
}

export default WebsiteLayout