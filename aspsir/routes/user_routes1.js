var users=require('../models/user_mod');
var express=require('express');
var router=express.Router();

router.post('',function(req,res,next){
    users.sign_up(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.get("/:id",function(req,res,next){
    users.getuserbypass(req.params.id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
router.put("/:email_id",function(req,res,next){
    users.updatepass(req.body,req.params.email_id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }  
    });
});
module.exports=router;