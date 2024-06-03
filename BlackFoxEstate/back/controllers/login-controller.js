const User = require('../models/User');

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        res.json(username);
    } catch (error) {
        res.status(500).json({ error: 'Failed to login' });
    }
};

exports.check = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const isAdmin = user.isAdmin;
        res.json(isAdmin);
    } catch (error) {
        res.status(500).json({ error: 'Failed to check' });
    }
};