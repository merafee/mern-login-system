module.exports = activeStatus = async (req, res) => {
    res.json(global.activeStatus);
}