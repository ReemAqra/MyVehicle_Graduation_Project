const {check} = require("express-validator");


const USER_VALIDATION=[
    check('name').notEmpty().withMessage('required name'),
    check('city').custom(value =>{
        if(value){
            let countries =['Jerusalem', 'Ramallah','Hebron', 'Jericho', 'Nablus',
                'Tulkarm','Bethlehem', 'Qalqilya', 'Jenin', 'Al-Bireh', 'Tubas' ];
            const country = countries.find((countries) => countries === value);
            if (!country) {
                return Promise.reject({
                    message:'country not found in the list.',
                    city: countries,
                })
            }
            return true;
        }else {
            return Promise.reject('required Country of residence')
        }
    }),
    check('email').notEmpty().withMessage(' email cannot be empty').isEmail(),
    check('phonenumber').notEmpty().withMessage(' phone number cannot be empty'),
    check('phonenumber').isLength({min:10}).withMessage('phone number must be 10 dight'),
    check('password').notEmpty().withMessage('password is required')
]

module.exports = USER_VALIDATION;