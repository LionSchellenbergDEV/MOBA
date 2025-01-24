// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [vorname, setVorname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Funktion, die beim Absenden des Formulars aufgerufen wird
    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!email || !password) {
            setError('Bitte alle Felder ausfüllen');
            return;
        }
    };

    return (

        <div id="anmeldung-wrapper">
            <div id="anmeldung">
                <div>
                    <h1>Anmeldung</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Deine E-Mail"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Dein Passwort"
                            />
                        </div>
                        <br/>
                        <br/>
                        {error && <p style={{color: 'red'}}>{error}</p>}
                        <button type="submit">Anmelden</button>
                    </form>
                </div>

                <div>
                    <h1>Registrierung</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                id="vorname"
                                value={email}
                                onChange={(e) => setVorname(e.target.value)}
                                placeholder="Dein Vorname"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Deine E-Mail"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Dein Passwort"
                            />
                        </div>
                        {error && <p style={{color: 'red'}}>{error}</p>}
                        <button type="submit">Account erstellen</button>
                    </form>
                </div>

            </div>
        </div>

    );
}

export default Login;
