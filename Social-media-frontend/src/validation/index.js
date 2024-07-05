import * as Yup from "yup";


export const signUp = Yup.object({
    fName : Yup.string().min(3).max(15).required("Please Enter your First name"),
    lName : Yup.string().min(3).max(15).required("Please Enter your Last name"),
    email: Yup.string().email().required("Please Enter a valid email"),
    password : Yup.string().min(6).required("Please enter your password"),
    gender : Yup.string().required("Please Select your gander"),
    // confirmpassword : Yup.string().oneOf([Yup.ref("password"), null],"Passwoord must be matched").required("please give a confirm password"),
});

// export const signIn = Yup.object ({
//     email: Yup.string().email().required("Please Enter a valid email"),
//     password : Yup.string().min(6).required("Please enter your password"),
// });