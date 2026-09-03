import { useState } from "react";

function SignIn() {

    const [formdata, setFormdata] = useState({
        username: "",
        password: "",
    });



    return(
        <form action="">
            <h3>Log-In</h3>
            <hr/>
            <br/>
            
            <label htmlFor="username">Username</label><br/>
            <input type="text" id="username" required value={formData.username}></input><br/><br/>

            <label htmlFor="password">Password</label><br/>
            <input type="password" id="password" required value={formData.password}></input><br/><br/>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}

            <button type="submit">Submit</button>
        </form>
    );
}

export default SignIn;