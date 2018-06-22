var users=require('../models/user_mod');
var express=require('express');
var router=express.Router();

router.post('',function(req,res,next){
    users.login(req.body,function(err,rows){
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
    users.update(req.body,req.params.email_id,function(err,rows){
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
    users.getuserbyid(req.params.id,function(err,rows){
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
router.get("",function(req,res,next){
    users.getdata(function(err,rows){
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