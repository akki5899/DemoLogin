var db=require('../dbconnection')

var user={
    getdata:function(callback){
        return db.query("select * from loginsign",callback);
    },
sign_up:function(item,callback){
    return db.query(
        "insert into loginsign values(?,?,?,?,?,?,?)",
        [
            item.email_id,
            item.password,
            item.user_name,
            item.mobile_no,
            item.city,
            item.gender,
            item.address
        ],
        callback
    );
},
login:function(item,callback){
    return db.query(
        "select * from loginsign where email_id=? and password=?",
        [
            item.email_id,
            item.password
        ],
        callback
    );
},
getuserbyid:function(id,callback){
    return db.query(
        "select * from loginsign where email_id=?",[id],callback
    );
},
update:function(item,email_id,callback){
    return db.query("update loginsign set password=?,user_name=?, mobile_no=?, city=?, gender=?, address=? where email_id=?",
    [
        item.password,
        item.user_name,
        item.mobile_no,
        item.city,
        item.gender,
        item.address,
        email_id
    ],
    callback);
},
updatepass(item,email_id,callback){
    return db.query("update loginsign set password=? where email_id=?",
    [
        item.password,
        email_id
    ],
    callback);
},
getuserbypass:function(id,callback){
    return db.query(
        "select * from loginsign where password=?",[id],callback
    );
},

}


module.exports=user