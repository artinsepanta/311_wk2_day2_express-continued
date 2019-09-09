const express = require('express');
const router = express.Router();

//Get all things
router.get("/comments"),(req,res)=>res.json('comments');

//gets one thing
router.get("/comments/:id",(req,res)=>{
  const look= comments.some(comment=>comment.id===parseInt(req.params.id));
  if(look){
  res.json(comments.filter(comment => comment.id===parseIt(req.params.id)));
  }else{
    res.statusMessage(400).json({msg:' Not find'})
  }
});
module.exports = [
  {
    "_id": 1,
    "body": "ACA is great!",
    "postId": 1
  },
  {
    "_id": 2,
    "body": "I love promises!",
    "postId": 1
  },
  {
    "_id": 3,
    "body": "Fetch is great!",
    "postId": 1
  },
  {
    "_id": 4,
    "body": "I can't wait to do the check point!",
    "postId": 1
  }
];
