const App = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [user, setUser] = React.useState(null);
    const [swData, setSwData] = React.useState([]);

    return (
        <React.Fragment>
            <div className="navbar">
                <ul className="nav">
                    {
                        isLoggedIn
                            ? <Logout user={user} setIsLoggedIn={setIsLoggedIn} setUser={setUser} setSwData={setSwData} />
                            : <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
                    }
                </ul>
            </div>
            <div className="main">
                {
                    user && <h3>{`${user.interest[0].toUpperCase()}${user.interest.substring(1)}`}</h3>
                }
                <ul>
                    {
                        swData.map(data => (
                            <li key={data.name}>{data.name}</li>
                        ))
                    }
                </ul>
            </div>
        </React.Fragment>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
