import logo from './logo.svg';
import './App.css';

const App = () => {
    // nav bar to include: link to homepage, log in, sign up, create new entry
    // divs in sections will be user's card with name and photo
    // footer will stay at bottom of page and have links to our githubs, etc

    const showLogIn = () => {
        return (
            <form onSubmit={()=>{handleLogIn}}>
                <label for="username">User name:</label>
                <input type="text" name="username" required/>
                <label for="password"> Password:</label>
                <input type="password" name="password" required/>
                <input type="submit" value="Log In"/>
            </form>
        )
    }
    const handleLogIn = (event) => {
        event.preventDefault();
        ///// create new sessions here /////
        ////// authentication goes here /////
    }
    const showSignUp = () => {
        return (
            <form onSubmit={()=>{handleSignUp}}>
                <label for="username">User name:</label>
                <input type="text" name="username" required/>
                <label for="password"> Password:</label>
                <input type="password" name="password" required/>
                <input type="submit" value="Sign Up"/>
            </form>
        )
    }
    const handleSignUp = () => {
        event.preventDefault();
        //// create new user here /////
    }

    return (
        <main>
            <h1>KBJ Journal App</h1>
            <nav>
                <li onClick={showLogIn}>Log In</li>
                <li onClick={showSignUp}>Sign Up</li>
            </nav>
            <section>
                {
                    users.map((user) => {
                        return (<div>
                                <h3>user.username</h3>
                                <img src={user.photo} alt="profile photo of user"/>
                                <button onClick={}>View Profile</button>
                            </div>
                        )
                    })
                }
            </section>
            <footer></footer>
        </main>
    )
}

export default App;
