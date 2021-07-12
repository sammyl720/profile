import React from 'react'

import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <main>
            
            <nav className="nav">
              <a href='https://github.com/sammyl720' target='_blank'>
                <i className='fab fa-github icon-bg' />
              </a>
              <div className="flex-row">
                <a href="#portfolio">Portfolio</a>
                <a href="#certificates">Certificates</a>
                <a href="#sites">Sites</a>
              </div>
            </nav>
        { children }
      </main>
      <footer className="footer">
            <div className="flex-row">
              <a href="https://www.linkedin.com/in/shmuel-leider-3284b6189/" target='_blank'>
                <i className='fab fa-linkedin-in' />
              </a>
              <a href="https://www.facebook.com/shmuel.leider/" target='_blank'>
                <i className='fab fa-facebook' />
              </a>
              <a href="https://twitter.com/sammyl720" target='_blank'>
                <i className='fab fa-twitter' />
              </a>
              <a href="https://github.com/sammyl720" target='_blank'>
                <i className='fab fa-github' />
              </a>
            </div>
      </footer>
    </div>
  )
}
