import SignIn from "../components/SignIn.jsx";


function splashpage(){
    return(
        <main>
            <h1>Welcome to Pictora!</h1>
            <p>Log in to to continue your story.</p>
            <p>Not a member? Sign up now to join the crew!</p>

            <SignIn />

        </main>
    );
}

export default splashpage;