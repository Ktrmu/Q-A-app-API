const express = require('express');
const router = express.Router();
const Content = require('../Models/ContentModel');



router.post('/post',(req, res)=>{
    const content = new Content({
        title:req.body.title,
        body:req.body.body
    })
    try {
        const newContent = content.save();
        res.json({content: content._id});
    }
    catch(err){
        res.send(err)
    }
  
});

router.delete('/:id', (req, res)=>{
    Content.findByIdAndRemove({_id:req.params.id})
    .then((content)=>{
        res.send(content.title + ' deleted')
    })
    
});

router.get('/',async (req, res)=>{
    try {
        const cont = await Content.find();
        res.json(cont);
      } 
      catch (err) {
        res.json({message: err})
      }
      
});

router.put('/:id', (req, res)=>{
    Content.findByIdAndUpdate({_id:req.params.id}, req.body).then(()=>{
        Content.findOne({_id: req.params.id}).then((content)=>{res.send(content);
        });
    });
});






module.exports = router;