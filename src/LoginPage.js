const LoginPage = () => {
    return (
        <div class="content-body" background ="https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80">
            <div class="form-wrapper">
                <form class="bg-white">
                    <img src="https://logos-download.com/wp-content/uploads/2016/12/DBS_Bank_logo_logotype.png" alt="DBS Logo" />
                        <h1 class="text-title">LOGIN </h1>
                        <div class="field-group">
                            <label class="label" for="txt-email">Email address</label>
                            <input class="input" type="email" id="txt-email" name="email" placeholder="youremail@gmail.com" />
                        </div>
                        <div class="field-group">
                            <label class="label" for="txt-password">Password</label>
                            <input class="input" type="password" id="txt-password" name="password" placeholder="Enter password" />
                            <a href="#forgot" class="link-forgot">Forgot?</a>
                        </div>

                        <div class="field-group">
                            <input class="btn-submit" type="submit" value="Log In" />
                        </div>
                </form>

                <div class="bg-grey">
                    <a href="#register" class="link-register">Sign Up</a>

                </div>
            </div>
        </div>
    )
}

export default LoginPage;