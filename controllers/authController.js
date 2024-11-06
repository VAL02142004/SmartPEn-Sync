const users = [];

exports.signup = (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    res.status(201).send("Signup successful");
};

exports.login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) res.status(200).send("Login successful");
    else res.status(401).send("Invalid credentials");
};

exports.logout = (req, res) => {
    res.status(200).send("Logout successful");
};
