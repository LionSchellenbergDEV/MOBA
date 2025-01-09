// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Funktion, die beim Absenden des Formulars aufgerufen wird
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Beispiel für eine einfache Validierung
        if (!email || !password) {
            setError('Bitte alle Felder ausfüllen');
            return;
        }

        // Simuliere die Anmeldung
        try {
            // Hier könntest du eine API-Anfrage an dein Backend schicken, z.B.:
            // const response = await fetch('/api/login', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify({ email, password }),
            // });

            // Angenommen, die Anmeldung war erfolgreich:
            // const data = await response.json();
            // if (data.success) {
            //   navigate('/dashboard'); // Weiterleitung nach erfolgreichem Login
            // } else {
            //   setError('Fehler bei der Anmeldung');
            // }

            // Für dieses Beispiel gehen wir davon aus, dass die Anmeldung immer funktioniert:
            setTimeout(() => {
                navigate('/dashboard'); // Weiterleitung zur Dashboard-Seite nach erfolgreicher Anmeldung
            }, 1000);

        } catch (error) {
            setError('Fehler bei der Anmeldung');
        }
    };

    return (
        <div>
            <h1>Anmelden</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">E-Mail:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Deine E-Mail"
                    />
                </div>
                <div>
                    <label htmlFor="password">Passwort:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Dein Passwort"
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Anmelden</button>
            </form>
        </div>
    );
}

export default Login;
