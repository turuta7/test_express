const validationEmail = (email) => {
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return re.test(email);
}

const validationMessage = (message) => {
    const re = /^.{1,99}$/;
    return re.test(message);
}

module.exports = {validationEmail, validationMessage}