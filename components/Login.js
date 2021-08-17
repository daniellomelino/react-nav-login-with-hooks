const accounts = [
    {username: 'daniel', password: 'asdf', email: 'daniel@example.com', interest: 'people'},
    {username: 'eric', password: 'secret', email: 'eric@example.com', interest: 'planets'}
];

const Login = (props) => {
    const {setIsLoggedIn, setUser} = props;
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const logIn = (e) => {
        e.preventDefault();
        const account = accounts.find(account => account.username === username);
        if (account && account.password === password) {
            // valid login!
            setUser({ username, password, interest: account.interest });
            setIsLoggedIn(true);
        } else {
            // invalid login!
            setUsername('');
            setPassword('');
            document.querySelector('input#username').focus();
        }
    }

    return (
        <li>
            <form>
                <span>Username:</span>
                <input id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <span>Password:</span>
                <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button onClick={logIn}>Log In</button>
            </form>
        </li>
    );
}