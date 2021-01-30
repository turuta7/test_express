const validationEmail = (email) => {
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return re.test(email);
}

const validationText = (text) => {
    const re = /^.{1,99}$/;
    return re.test(text);
}

module.exports = {validationEmail, validationText}
