import '../css/auth.css'

export function Register() {
  return (
    <>
      <div class="register-page">
        <div class="register-outer">
          <div class="register-box">
            {/* <!-- Header --> */}
            <div class="register-header">
              <h2>Register</h2>
              <h3>...and order instantly!</h3>
            </div>
            {/* <!-- Error --> */}
            <p class="register-error">Example error message goes here</p>
            {/* <!-- Form --> */}
            <form class="register-form">
              <div class="form-group">
                <label for="firstname">
                  Firstname
                  <span class="required">*</span>
                </label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="Customer Firstname"
                />
              </div>
              <div class="form-group">
                <label for="lastname">
                  Lastname
                  <span class="required">*</span>
                </label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Customer Lastname"
                />
              </div>
              <div class="form-group">
                <label for="address_first">
                  First address line
                  <span class="required">*</span>
                </label>
                <input
                  type="text"
                  id="address_first"
                  placeholder="First Address Line"
                />
              </div>
              <div class="form-group">
                <label for="address_second">Second address line</label>
                <input
                  type="text"
                  id="address_second"
                  placeholder="Second Address Line (optional)"
                />
              </div>
              <div class="form-group">
                <label for="postcode">
                  Postcode
                  <span class="required">*</span>
                </label>
                <input type="text" id="postcode" placeholder="Postcode" />
              </div>
              <div class="form-group">
                <label for="email">
                  Email
                  <span class="required">*</span>
                </label>
                <input type="email" id="email" placeholder="Customer Email" />
              </div>
              <div class="form-group">
                <label for="phone">
                  Phone
                  <span class="required">*</span>
                </label>
                <input type="text" id="phone" placeholder="Customer Mobile" />
              </div>
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
              <button type="submit" class="button-primary register-btn">
                Register
              </button>
            </form>
            {/* <!-- Footer --> */}
            <div class="register-footer">
              <p>Already have an account with us?</p>
              <a href="/login" class="login-link">Login Now!</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}