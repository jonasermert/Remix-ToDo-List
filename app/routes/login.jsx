export default function login() {
  return (
      <form method="post" id="login-form">
          <p>
              <label htmlFor="username">
                  Username
              </label>
              <input type="text" id="username" name="username" required />
          </p>
          <p>
              <label htmlFor="password">
                Password
              </label>
              <input type="password" id="password" name="password" required />
          </p>
          <div className="form-actions">
              <button>Login</button>
          </div>
      </form>
  )
}