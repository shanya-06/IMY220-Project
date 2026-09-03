function SignIn() {
    return(
        <form action="">
            <h3>Log-In</h3>
            <hr/>
            <br/>
            
            <label for="username">Username</label><br/>
            <input type="text" id="username" required="required"></input><br/><br/>

            <label for="password">Password</label><br/>
            <input type="password" id="password" required="required"></input><br/><br/>

            <button type="submit">Submit</button>
        </form>
    );
}

export default SignIn;