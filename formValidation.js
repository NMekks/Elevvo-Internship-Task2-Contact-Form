const validateForm = () => {
    let fullNameValidation = document.forms["contactForm"]["fullName"].value;
    let emailValidation = document.forms["contactForm"]["email"].value;
    let subjectValidation = document.forms["contactForm"]["subject"].value;
    let messageValidation = document.forms["contactForm"]["message"].value;

    if(fullNameValidation == ""){
        alert("Please enter your full name");
        return false;
    }
    // if these characters are present in an email address then it's valid
    else if(emailValidation == "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"){
        alert("Please enter a valid email address");
        return false;
    } else if(subjectValidation == ""){
        alert("Please enter a valid subject");
        return false;
    } else if(subjectValidation == ""){
        alert("Subject cannot be empty");
        return false;
    } else if(messageValidation == ""){
        alert("Message cannot be empty");
        return false;
    }
}