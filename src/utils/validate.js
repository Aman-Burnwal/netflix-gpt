export const check_Validata_Email_Password = (email, password , fullName) => {


    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/.test(email);
    const passwordValidator = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
    const fullNameValidator = /^[a-zA-Z ,.'-]+$/.test(fullName);


    if (!isEmailValid) return "Email is not a valid email";
    if (!passwordValidator) return "Password is not a valid";
    if(!fullNameValidator) return "full name is not a valid"

    return null;
    
}