import '../css/auth.css'

export function Login() {
  return (
    <>
      <div class="login-page">
        <div class="login-outer">
          <div class="login-box">
            <div class="login-header">
              <h2>Login</h2>
              <h3>To order from our high variety images!</h3>
            </div>
            {/* <!-- Error message placeholder --> */}
            <p class="login-error">Email and password are required!</p>
            <form class="login-form">
              {/* <!-- Email --> */}
              <div class="form-group">
                <label for="email">
                  Email
                  <span class="required">*</span>
                </label>
                <input type="email" id="email" placeholder="Customer Email" />
              </div>
              {/* <!-- Password --> */}
              <div class="form-group">
                <label for="password">
                  Password
                  <span class="required">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Customer Password"
                />
              </div>
              <button type="submit" class="login-btn">Login</button>
            </form>
            <div class="login-footer">
              <p>Not yet an account holder?</p>
              <a href="/register" class="register-link">Register Now!</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}