export function Header() {
  return (
    <>
      {/* <!-- Header --> */}
      <header class="header">
        <div class="header-inner">
          <h1 class="logo">
            <span class="logo-img">
              <img src="../images/logo.svg" alt="Spark Studios logo" />
            </span>
            Spark Studios
          </h1>

          <nav class="nav">
            <ul>
              <li><a href="/" class="nav-link">Events</a></li>

              {/* <!-- show only when logged out --> */}
              <li><a href="/login" class="nav-link">Login</a></li>

              {/* <!-- show only when logged in --> */}
              <li><a href="/profile" class="nav-link">Profile</a></li>
              <li class="basket-link">
                <a href="/basket" class="nav-link">
                  Basket
                  <span class="basket-count">0</span>
                </a>
              </li>
              <li><a href="/logout" class="nav-link">Logout</a></li>
              
              {/* <!-- always visible --> */}
              <li><a href="/register" class="nav-link">Register</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header