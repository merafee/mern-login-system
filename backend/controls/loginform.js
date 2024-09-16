require('../db/connection');

const Users = require('../models/User');

module.exports = loginform = async (req, res) => {
    // let user = new Users(req.body);
    // let result = await user.save();
    // res.send(result);

    let {password, mail} = req.body;
    let user =await Users.findOne({password, mail});

    if(user){
        console.log("success");
        global.activeStatus = true;
        res.send({available: true,
            status: global.activeStatus
        });
    }
    else{
        console.log("error");
        global.activeStatus = false;
        res.send({available: false,
            status: global.activeStatus
        });
    }
}