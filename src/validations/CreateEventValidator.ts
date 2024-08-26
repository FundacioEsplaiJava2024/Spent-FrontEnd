export const titleValidator: (value: string, enabled?: boolean) => string | false = (value, enabled = true) => {
    if (!enabled) return false;
    if (value.length < 6) return "The title must have at least 6 characters";
    else if (value.length > 40) return "The title must have fewer than 40 characters";
    else return false;
}

export const descriptionValidator = (value: string) => {
    
    if (value.length > 140) return "The description must have fewer than 140 characters";
    else if (value.length < 10) return "The description must have at least 10 characters";
    else return false;
}

export const addressValidator = (value: string) => {
    if (value.length < 2) return "The address must have a length of at least 2 characters";
    else if (value.length > 30) return "The address must have fewer than 30 characters";
    return false;
}

export const numParticipantsValidator = (value: string) => {
    const numValue = parseInt(value, 10);
    if (isNaN(numValue)) return "The number of participants must be a number";
    if (numValue < 2) return "You need more participants to create the event";
    else if (numValue > 50) return "You need a permit from the city council to gather so many people";
    return false;
}

export const dateValidator = (dateString: string, enabled: boolean = true) => {
    if (!enabled) return false;

    const date = new Date(dateString);
    const today = new Date();
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endOfNextYear = new Date(today.getFullYear() + 1, 11, 31); // Last day of next year

    if (date < startOfToday || date > endOfNextYear) {
        return "The date must be between today and the end of next year";
    } else {
        return false;
    }
}