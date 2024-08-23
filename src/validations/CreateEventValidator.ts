export const titleValidator: (value: string, enabled?: boolean) => string | false = (value, enabled = true) => {
    if (!enabled) return false;
    if (value.length < 6) return "El titulo debe tener al menos 6 caracteres";
    else if (value.length > 40) return "El titulo debe tener menos de 40 caracteres";
    else return false;
}

export const descriptionValidator = (value: string) => {
    if (value.length < 10) return "La descripcion debe tener al menos 10 caracteres";
    else if (value.length > 140) return "La descripcion debe tener menos de 140 caracteres";
    else return false;
}

export const addressValidator = (value: string) => {
    if(value.length<1) return "La dirección esta vacia"
    return false;
}

export const numParticipantsValidator = (value: string) => {
    const numValue = parseInt(value, 10);
    if (isNaN(numValue)) return "El numero de participantes debe ser un numero";
    if (numValue < 2) return "Necesitas mas participantes para crear el evento"
    else if (numValue > 50) return "Necesitas un permiso del ayuntamiento para juntar tantas personas"
    return false;

}

export const dateValidator = (dateString: string, enabled: boolean = true) => {
    if (!enabled) return false;

    const date = new Date(dateString);
    const today = new Date();
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate()); 
    const endOfNextYear = new Date(today.getFullYear() + 1, 11, 31); // Último día del próximo año

    if (date < startOfToday || date > endOfNextYear) {
        return "La fecha debe estar entre hoy y el final del próximo año";
    } else {
        return false;
    }
}
