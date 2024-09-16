module.exports = logout = async (req, res) => {
    let userdata = req.body;
    console.log(userdata);
    global.activeStatus = false;
    res.send({
        status: global.activeStatus
       });
}