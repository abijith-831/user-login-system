const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const securePassword = async(password) => {
    try{
        const passwordHash = await bcrypt.hash(password, 10);
        return passwordHash;
    } catch (error){
        console.log(error.messgae);
    }
}

const loadRegister = async(req, res) => {
    try{

        res.render('registration');

    } catch(error) {
        console.log(error.message);
    }
}

const insertUser = async (req, res) => {


    try{

        const exist = await User.findOne({email:req.body.email})

        if(exist){
            res.render('registration', {message: "Your registration has been failed...!!!"});
        }else{

        

        const spassword = await securePassword(req.body.password);

    
        
        const user = User({
            email: req.body.email,
            name: req.body.name,
            password: spassword,
            is_admin: 0
        });

        console.log('vssg'+user);
        const userData = await user.save();

        if(userData){
            res.redirect('/login?logged=ok')
        }
        else{
            res.render('registration', {message: "Your registration has been failed...!!!"});
        }
    }
    } catch(error){
        console.log(error.message);
    }
}

// LOGIN USER METHOD STARTED
const loginLoad = async(req, res) => {
    try{
        let logged = null
        if(req.query.logged){
             logged = 1
        }
        res.render('login',{logged})
    } catch (error){
        console.log(error.message);
    }
}

const verifyLogin = async(req, res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;

        const userData = await User.findOne({email: email});
        
        if(userData){
            const passwordMatch = await bcrypt.compare(password, userData.password);
            
            if(passwordMatch){
                if(userData.is_verified === 0){
                    res.render('login',{message: "Please verify your email"});

                }
                else{
                    req.session.user_id = userData._id;
                    res.redirect('/home');
                }
            }
            else {
                res.render('login',{message:"Email and Password is incorrect...!!!"});
            }
        }
        else{
            res.render('login',{message:"Email and Password is incorrect...!!!"});
        }

    } catch (error) {
        console.log(error.message);
    }
}

const loadHome = async(req, res) => {
    try{
        

            
            const userData = await User.findById({_id:req.session.user_id});
            if(userData){
                res.render('home',{user: userData});
            }else{
                res.redirect('/logout')

            }
        

    } catch(error){
        console.log(error.message);
    }
}
const found = async (req,res)=>{
    try {
        let search = req.body.UserName;
        let searchName = await User.findOne({name:search})
        if(searchName){
            res.send(" username found")
        }else{
            res.send("not found")
        }
    } catch (error) {
        console.log(error);
    }
}

const userLogout = async (req, res) => {
    try {
        req.session.user_id=null;
        res.redirect('/login');
        
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    loadRegister,
    insertUser,
    found,
    loginLoad,
    verifyLogin,
    loadHome,
    userLogout
    
}