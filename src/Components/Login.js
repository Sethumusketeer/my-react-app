import React from 'react';

const Login = ({setUser, changeRoute}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('https://localhost:7245/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const userData = await response.json();
            if (response.ok) {
                setUser(userData);
                changeRoute('profile');
            } else {
                console.error(userData.message);
            }

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={() => changeRoute('register')}>Register</button>
        </div>
    );
};

export default Login;