var express = require('express');
var router = express.Router();
var multer = require('multer');
var storage = multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null,'./file/')  //경로지정
    },
    filename:function (req,file,cb) {
        cb(null,file.originalname)  //파일이름지정
    }
});

var upload = multer({storage:storage});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('upload', { title: 'Express' });
});

router.post('/',upload.single('userfile'),function (req,res) {
    /*alert('upload success!');*/
    /*res.send('upload! : '+req.file.filename);*/
    res.render('uploadSuccess',{title:'Music Instrument'});
    console.log(req.file);
});

module.exports = router;
