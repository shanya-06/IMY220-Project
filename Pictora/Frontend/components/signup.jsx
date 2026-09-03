import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {

    const [formData, setFormData] = useState({
        Fname: "",
        sName: "",
        email: "",
        username: "",
        password1: "",
        password2: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.id]: e.target.value});
    }

    const validateString = (word) => {
    // >3 chars, at least 2 letters, 1 number, 1 special char
    const regex = /^(?=(?:.*[A-Za-z]){2,})(?=.*\d)(?=.*[!@#$%^&*]).{4,}$/;
    return regex.test(word);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password1 !== formData.password2) {
            setError("Passwords do not match");
            return;
        }

        if (!validateString(formData.username)) {
            setError(
            "Username must be >3 chars, contain at least 2 letters, 1 number, and 1 special character");
            return;
        }

        if (!validateString(formData.password1)) {
            setError(
            "password must be >3 chars, contain at least 2 letters, 1 number, and 1 special character");
            return;
        }

        setError("");
        setSuccess("");
        
        
        try {
            const response = await fetch("http://localhost:5000/api/signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                    fname: formData.fname,
                    sname: formData.sname,
                    email: formData.email,
                    username: formData.username,
                    password: formData.password1,
                    }),
                });

                const data = await response.json();
                setSuccess(data.message || "Signup successful!");

                navigate(`/home`)
            } catch (err) {
            setError("Error connecting to server");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign-Up</h3>
            <hr/>
            <br/>
            
            <label htmlFor="Fname">First Name/s</label><br/>
            <input type="text" id="Fname" onChange={handleChange} required value={formData.Fname}></input><br/><br/>

            <label htmlFor="sName">Surname</label><br/>
            <input type="text" id="sName" onChange={handleChange} required value={formData.sName}></input><br/><br/>

            <label htmlFor="email">email address</label><br/>
            <input type="email" id="email" onChange={handleChange} required value={formData.email}></input><br/><br/>

            <label htmlFor="username">Username</label><br/>
            <input type="text" id="username" onChange={handleChange} required value={formData.username}></input><br/><br/>

            <label htmlFor="password1">Password</label><br/>
            <input type="password" id="password1" onChange={handleChange} required value={formData.password1}></input><br/><br/>

            <label htmlFor="password2">Repeat Password</label><br/>
            <input type="password" id="password2" onChange={handleChange} required value={formData.password2}></input><br/><br/>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}

            <button type="submit">Submit</button>
        </form>
    ); 
}

export default SignUp;