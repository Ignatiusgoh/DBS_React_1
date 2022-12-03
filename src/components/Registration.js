// import { Outlet, Link } from "react-router-dom";

// const Registration = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/blogs">Blogs</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   )
// };

// export default Layout;

// <!DOCTYPE html>
const Registration = () => {
  return (


    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>Register page</title>
        <meta charset="UTF-8" />
        <meta name="robots" content="follow,index" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Register</title>

        <meta
          name="description"
          content="🔐 An Open Source Template for Login Page From Scratch Without Any CSS Framework"
        />
        <meta name="keywords" content="login page css, login template, login css, login form template" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://mazipan.github.io/login-page-css/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://mazipan.github.io/login-page-css/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://mazipan.github.io/login-page-css/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="https://mazipan.github.io/login-page-css/manifest.json" />

        <meta name="msapplication-TileColor" content="#6371C5" />
        <meta name="theme-color" content="#6371C5" />
        <link rel="manifest" href="https://mazipan.github.io/login-page-css/manifest.json" />

        <link rel="stylesheet" href="../shared/normalize.css" />
        <link rel="stylesheet" href="../shared/additional.css" />
        <link rel="stylesheet" href="style.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />

      </head>
      <body>
        <div class="content-body">
          <div class="form-wrapper">
            <form class="bg-white">
              <h1 class="text-title">Register</h1>
              <div class="field-group">
                <label class="label" for="txt-email">User</label>
                <input class="input" type="user" id="txt-user" name="email" placeholder="Enter user" />
              </div>
              <div class="field-group">
                <label class="label" for="txt-password">Password</label>
                <input class="input" type="password" id="txt-password" name="password" placeholder="Enter password" />

              </div>
              <div class="field-group">
                <label class="label" for="txt-first-name">First Name</label>
                <input class="input" type="name" id="txt-first-name" name="password" placeholder="Enter first name" />

              </div>
              <div class="field-group">
                <label class="label" for="txt-last-name">Last Name</label>
                <input class="input" type="name" id="txt-last-name" name="password" placeholder="Enter last name" />

              </div>
              <div class="field-group">
                <label class="label" for="txt-email">Email</label>
                <input class="input" type="email" id="txt-email" name="password" placeholder="Enter email" />

              </div>
              <div class="field-group">
                <label class="label" for="txt-address">Address</label>
                <input class="input" type="adress" id="txt-address" name="password" placeholder="Enter address" />
              </div>

              <div class="field-group">
                <input class="btn-submit" type="submit" value="Register" />
              </div>
            </form>


          </div>
        </div>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>

      </body>
    </html>
  )
};

export default Registration;