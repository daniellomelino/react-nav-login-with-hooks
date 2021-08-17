const Logout = (props) => {
    const {setIsLoggedIn, setSwData, setUser, user} = props;

    React.useEffect(() => {
        // when this component mounts, log a welcome message
        console.log("Welcome to the system!");
        // fetch data from an API
        console.log('has user', user);
        fetch(`https://swapi.dev/api/${user.interest}/`)
            .then(res => res.json())
            // use that data to update component state
            .then(data => setSwData(data.results))

        return () => {
            // when this component unmounts, clear out user state and say goodbye
            setUser(null);
            setSwData([]);
            console.log('goodbye');
        }
    }, [])

    const logOut = () => {
        setIsLoggedIn(false);
    }

    return (
        <li>
            <span>Hello, {user.username}!</span>
            <button onClick={logOut}>Log Out</button>
        </li>
    );
}