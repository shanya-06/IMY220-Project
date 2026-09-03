import SignIn from "../components/SignIn.jsx";

function SplashPage(){
    return(
        <main>
            <h1>Welcome to Pictora!</h1>
            {/*put logo pic here*/}
            <p>Log in to to continue your story.</p>
            <p>Not a member? Sign up now to join the crew!</p>

            <SignIn />

        </main>
    );
}

export default SplashPage;