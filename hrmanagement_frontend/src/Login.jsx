
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let navigate = useNavigate();

    let handleLogin = async (event) => {
        event.preventDefault();

        if (email === "admin@gmail.com" && password === "Admin") {
            navigate("/AdminHome");
            return;
        }

        try {
            let req = await fetch(
                "http://localhost:3000/api/employee/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        emailid: email,
                        password: password
                    })
                }
            );

            let res = await req.json();
            console.log(res);

            if (req.ok && res.User) {
                if (res.User.role === "HR") {
                    navigate("/HrHome");
                } else if (res.User.role === "EMPLOYEE") {
                    navigate("/EmpHome");
                }
            } else {
                alert(res.msg || "Login failed");
            }
        } catch (error) {
            console.log("Login error:", error);
            alert("Cannot connect to the server. Check whether your backend is running.");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your emailid"
                    required
                />
                <br />

                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    required
                />
                <br />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
