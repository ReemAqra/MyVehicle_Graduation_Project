
const {validationResult} = require("express-validator");
const {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } = require("firebase/auth");
const {set, ref, getDatabase,update} = require("firebase/database");
const { getStorage } = require("firebase/storage");

const PersonalAccount =async function (req,res){
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ error: errors})
    }
    const data={
        name : req.body.name,
        email : req.body.email,
        phonenumber:req.body.phonenumber,
        city:req.body.city,
        password:req.body.password,
    }

    console.log(data)
    let db = getDatabase();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            set(ref(db, 'personalAcount/'+user.uid),{
                username: data.name,
                email: data.email,
                phonenumber:data.phonenumber,
                city:data.city,
            })
            res.send('Data saved successfully!')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            res.send(errorMessage)
        });

};
const Merchantِccount=async function(req,res){
    const data={
        ExhibitionName: req.body.ExhibitionName	,
        ExhibitionNo: req.body.ExhibitionNo,
        SalesManagerName: req.body.SalesManagerName,
        SalesManagerNumber: req.body.SalesManagerNumber,
        address: req.body.address,
        email : req.body.email,
        city:req.body.city,
        password:req.body.password,
        exhibitionPicture:req.body.exhibitionPicture,
    }
};
const login = async function(req,res){
    const data={
        email : req.body.email,
        password:req.body.password,
    }
    let db = getDatabase();


    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            const date =new Date();
            update(ref(db, 'personalAcount/'+user.uid),{
                last_login:date,
            })
            res.send(user)

            // ...

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            res.send(errorCode)
        });
};
module.exports={PersonalAccount,Merchantِccount ,login};