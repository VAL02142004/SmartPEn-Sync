exports.getSettings = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/settings.html'));
};

exports.updateSettings = (req, res) => {
    const { newSettings } = req.body;
    res.status(200).send("Settings updated");
};
