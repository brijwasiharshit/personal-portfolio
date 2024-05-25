 const useFormTest = ( email, name ) => {
    console.log(email,name);
    const mailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const nameValidation = /^[A-Za-zÀ-ÿ ,.'-]+$/;
    if (!name) {
        return "Full Name is required";
    }
    if (!nameValidation.test(name)) {
        return "Please enter a valid name";
    }
    if (!email) {
        return "Email is required";
    }
    if (!mailValidation.test(email)) {
        return "Invalid Email ID";
    }

    return true;
}
export default useFormTest;
