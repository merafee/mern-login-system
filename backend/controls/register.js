require('../db/connection');

const Users = require('../models/User');

module.exports = register = async (req, res) => {

    const {mail} = req.body;
    let user =await Users.findOne({mail});

    if(user){
        console.log("user already exists!!");
        global.activeStatus = false;
        res.send({available: true,
            status: global.activeStatus
        });
    }
    else{
        let add = new Users(req.body);
        let result = await add.save();
        console.log("new user added");
        global.activeStatus = true;
        res.send({available: false,
            status: global.activeStatus
        });
    }
}