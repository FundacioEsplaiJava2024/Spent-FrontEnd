export const nameValidator = (value: string, enabled:boolean=false) => {
    if (!enabled) return false;
    if (value.length < 3) return "El nombre debe tener al menos 3 caracteres";
    else if (value.length > 20) return "El nombre debe tener menos de 20 caracteres";
    else if(!/^[a-zA-Z ]+$/.test(value)) return "El nombre solo debe contener letras y espacios";
    else return false;
};

export const emailValidator = (value:string, enabled:boolean=false)=>{
    if (!enabled) return false;
    if(!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.(com|es)$/.test(value))
        return "Dirección de correo electronico inválida";
    else return false;
};

export const passwordValidator=(value:string, enabled:boolean=false)=>{
    if (!enabled) return false;
    if(value.length<8) return "La contraeña debe tener al menos 8 caracteres";
    else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value))
        return "La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un numero y un caracter especial";
    else return false;
};

export const usernameValidator=(value:string, enabled:boolean=false)=>{
    if (!enabled) return false;
    if(value.length<3) return "El nombre de usuario debe tener al menos 3 caracteres";
    else if(value.length>20) return "El nombre de usuario debe tener menos de 20 caracteres";
    else if(!/^[a-zA-Z0-9]/.test(value)) return "El nombre de usuario solo debe contener letras y numeros";
    else return false;
};