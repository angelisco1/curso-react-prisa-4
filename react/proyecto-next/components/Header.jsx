import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>Mis posts</a>
          </Link>
        </li>
        <li>
          <Link href="/nuevo-post">
            <a>Crear post</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
