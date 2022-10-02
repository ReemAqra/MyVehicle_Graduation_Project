var express = require('express');
var router = express.Router();
const {validationResult} = require("express-validator");

const USER_VALIDATION =require('../Validations/user_validation');
const { getAuth,createUserWithEmailAndPassword } =require ("firebase/auth");

const appfb =require('../FirebaseDB');
const {getDatabase, ref, set ,push} = require("firebase/database");
const {PersonalAccount,Merchantِccount,login}=require('../controller/Auth_controller')

/* POST new user . */
router.post('/register/personalAcount',USER_VALIDATION, PersonalAccount);
router.post('/register/merchantِAcount', Merchantِccount);
router.post('/login',login);
module.exports = router;
