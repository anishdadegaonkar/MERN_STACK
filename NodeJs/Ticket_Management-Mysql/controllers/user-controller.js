const db = require("../config/db");

function adduser(req, res) {
  const { uname,uemail,umobile,ugender,uage,udesignation,utype,upassword,uisdeleted,ucreatedby,umodifiedby } = req.body;
  console.log(uname,uemail,umobile,ugender,uage,udesignation,utype,upassword,uisdeleted,ucreatedby,umodifiedby);
  const query = "INSERT INTO user (uname,uemail,umobile,ugender,uage,udesignation,utype,upassword,uisdeleted,ucreatedby,umodifiedby) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
  db.query(query, [uname,uemail,umobile,ugender,uage,udesignation,utype,upassword,uisdeleted,ucreatedby,umodifiedby], (err,result) => {
    if ((err)) {
      throw err;
    }
    res.send(result);
  });
}

function getuser(req, res) {
    const query = "SELECT * FROM user";
    db.query(query, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
}

function updateuser(req,res) {
  try {
    const {
        uname, uemail, umobile, ugender, uage, udesignation, utype, upassword, uisdeleted,
        ucreatedby, umodifiedby, uid
    } = req.body;

    if (!uid) {
        return res.status(400).send("User ID is required for updating");
    }

    const query = 'UPDATE user SET uname =?, uemail =?, umobile =?, ugender =?, uage =?, udesignation =?, utype =?, upassword =?, uisdeleted =?, ucreatedby =?, umodifiedby =? WHERE uid =?';


    db.query(query, [uname, uemail, umobile, ugender, uage, udesignation, utype, upassword, uisdeleted,
        ucreatedby, umodifiedby,uid], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
} catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send("An error occurred while updating the user.");
}

}

function deleteuser(req,res) {
  try {
    const {
        uname, uemail, umobile, ugender, uage, udesignation, utype, upassword, uisdeleted,
        ucreatedby, umodifiedby, uid
    } = req.body;
    if (!uid) {
        return res.status(400).send("User ID is required for deleting");
    }
    const query = 'DELETE FROM user WHERE uid =?';
    db.query(query, [uid,uname, uemail, umobile, ugender, uage, udesignation, utype, upassword, uisdeleted,
        ucreatedby, umodifiedby], (err, result) =>{

        if (err) throw err;
        res.send(result);
    });
        } catch (error) {
            console.error("Error deleting user:", error);
            res.status(500).send("An error occurred while deleting the user.");
        }

}

module.exports = {
  adduser,
  getuser,
  updateuser,
  deleteuser,
};
