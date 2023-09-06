let form = document.querySelector('.form');

/**
 * @param {HTMLElement[]} elements Gerekli olan inputların olduğu liste
 * @description Gerekli olan inputların boş olup olmadığını kontrol eder.
 */
function checkerOfRequired(elements) {
    elements.forEach(element => {
        element.value !== "" ? writerOfSuccess(element) : writerOfError(element, "is required");
    })
}

/**
 *@param {HTMLElement} email Email inputu
 * @description Email inputunun formatını kontrol eder.
 */
function checkerOfEmail(email) {
    let emailValue = email.value;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    emailPattern.test(emailValue) ? writerOfSuccess(email) : writerOfError(email, "format is not valid");
}

/**
 * @param {HTMLElement} password Password inputu
 * @param {*} confirm_password Confirm password inputu
 * @description Password ve confirm password inputlarının eşleşip eşleşmediğini kontrol eder.
 */
function checkerOfPassword(password, confirm_password) {
    if (confirm_password.value === "") {
        writerOfError(confirm_password, "is required");
    } else if (confirm_password.value !== password.value) {
        writerOfError(confirm_password, "doesn't match");
    }
}

// Form submit edildiğinde çalışır.
form.addEventListener("submit", e => {
    e.preventDefault();
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirm_password = document.getElementById("confirm_password");

    checkerOfRequired([name, email, password, confirm_password]);
    checkerOfEmail(email);
    checkerOfPassword(password, confirm_password);
})

/**
 * @param {*} element Hata mesajı yazılacak elementi temsil eder.
 * @param {string} message Hata Mesajı
 * @description Hata mesajını elementin altına yazar.
 */
function writerOfError(element, message) {
    element.classList = "form-control is-invalid";
    let dataName = element.getAttribute("data-name");
    element.nextElementSibling.innerHTML = `${dataName} ${message}`;
    element.nextElementSibling.classList.add("invalid-feedback");
}

/**
 * @param {HTMLElement} element Başarılı mesajı yazılacak elementi temsil eder.
 * @description Başarılı mesajını elementin altına yazar.
 */
function writerOfSuccess(element) {
    element.classList = "form-control is-valid";
    element.nextElementSibling.innerHTML = "";
}