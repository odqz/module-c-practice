export function Header() {
  return (
    <>
      {/* <!-- Header --> */}
      <header className="header">
        <div className="header-inner">
          <h1 className="logo">
            <span className="logo-img">
              <img src="../images/logo.svg" alt="Spark Studios logo" />
            </span>
            Spark Studios
          </h1>

          <nav className="nav">
            <ul>
              <li><a href="/" className="nav-link">Events</a></li>

              {/* <!-- show only when logged out --> */}
              <li><a href="/login" className="nav-link">Login</a></li>

              {/* <!-- show only when logged in --> */}
              <li><a href="/profile" className="nav-link">Profile</a></li>
              <li className="basket-link">
                <a href="/basket" className="nav-link">
                  Basket
                  <span className="basket-count">0</span>
                </a>
              </li>
              <li><a href="/logout" className="nav-link">Logout</a></li>
              
              {/* <!-- always visible --> */}
              <li><a href="/register" className="nav-link">Register</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header