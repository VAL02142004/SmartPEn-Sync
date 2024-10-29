module.exports = (req, res, next) => {
    const authenticated = true;
    if (authenticated) next();
    else res.status(401).send("Unauthorized");
};
