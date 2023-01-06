
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,10}$/;


export default function validate(inputs) {

    const errors = {};

    if (!inputs.username) {
        errors.username = "Este campo esta vacio"
    }
    if (!regexEmail.test(inputs.username)) {
        errors.username = "Debe ser un correo electronico"
    }

    if (inputs.username.length > 35) {
        errors.username = "Maximo 35 caracteres"
    }

    if (!inputs.password) {
        errors.password = "Este capo esta vacio"
    }
    if (!regexPassword.test(inputs.password)) {
        errors.password = "Debe contener mayusculas, numeros y simbolos especiales"
    }
    if (inputs.password.length < 6) {
        errors.password = "La contraseña es muy corta";
    }
    if (inputs.password.length > 10) {
        errors.password = "La contraseña es muy larga"
    }
    return errors;
}