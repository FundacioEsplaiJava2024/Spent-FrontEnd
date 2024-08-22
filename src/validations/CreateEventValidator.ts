export const titleValidator = (value: string, enabled: boolean = true) => {
    if (!enabled) return false;
    if (value.length < 6) return "El titulo debe tener al menos 6 caracteres";
    else if (value.length < 40) return "El titulo debe tener menos de 40 caracteres";
    else return true;
}

export const descriptionValidator = (value: string, enabled: boolean = true) => {
    if (!enabled) return false;
    if (value.length < 10) return "La descripcion debe tener al menos 10 caracteres";
    else if (value.length < 140) return "La descripcion debe tener menos de 140 caracteres";
}

export const adressValidator = (value: string, enabled: boolean = true) => {
    if (!enabled) return false;
    if (value.length < 2) return "La direccion debe tener al menos 2 caracteres";
    else if (value.length < 30) return "La direccion debe tener menos de 30 caracteres";

}
export const numParticipantsValidator = (value: number, enabled: boolean = true) => {
    if (!enabled) return false;
    if (value < 2) return "Necesitas mas participantes para crear el evento"
    else if (value > 50) return "Necesitas un permiso del ayuntamiento para juntar tantas personas"

}

export const dateValidator = (dateString: string, enabled: boolean = true) => {
    if (!enabled) return false;

    const date = new Date(dateString);
    const today = new Date();
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate()); // Fecha de hoy sin la hora
    const endOfNextYear = new Date(today.getFullYear() + 1, 11, 31); // Último día del próximo año

    return date >= startOfToday && date <= endOfNextYear;
}

export const endTimeValidator = (time: string, enabled: boolean = true) => {
    if (!enabled) return false;
    const timeRegex = /^([01][0-9]|2[0-3]):([0-5][0-9])$/;
    if (!timeRegex.test(time))
        return "La hora debe estar en el formato HH:MM";

    const hour = parseInt(time.split(":")[0], 10);
    const minute = parseInt(time.split(":")[1], 10);
    if(hour<0|| hour>23||minute<0 || minute>59)
        return "Hora no valida"

}
