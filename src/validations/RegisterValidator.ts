export const nameValidator = (value: string, enabled: boolean = true) => {
    if (!enabled) return false;
    if (value.length < 2) return "The name must have at least 2 characters";
    else if (value.length > 20) return "The name must have fewer than 20 characters";
    else if (!/^[a-zA-Z ]+$/.test(value)) return "The name should only contain letters and spaces";
    else return false;
};

export const emailValidator = (value: string, enabled: boolean = true) => {
    if (!enabled) return false;
    if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.(com|es)$/.test(value))
        return "Invalid email address";
    else return false;
};

export const passwordValidator = (value: string, enabled: boolean = true) => {
    if (!enabled) return false;
    if (value.length < 7) return "The password must have at least 7 characters";
    else if (value.length > 20) return "The password must have fewer than 20 characters";
    else if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$$/.test(value))
        return "The password must contain at least one uppercase letter, one lowercase letter, and one number";
    else return false;
};

export const usernameValidator = (value: string, enabled: boolean = true) => {
    if (!enabled) return false;
    if (value.length < 3) return "The username must have at least 3 characters";
    else if (value.length > 15) return "The username must have fewer than 15 characters";
    else if (!/^[a-zA-Z0-9]/.test(value)) return "The username should only contain letters and numbers";
    else return false;
};