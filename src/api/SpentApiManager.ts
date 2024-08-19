import { Sport, User, Event } from "../types/types";
import SpentApi from "./SpentApi";


export const apiGetUser = async (username: string): Promise<User> => {
    const response = await SpentApi.get(`/${username}`, { headers: { 'authorization': localStorage.getItem('accessToken') } });
    const userData = response.data;
    const user: User = {
        id: userData.id,
        username: userData.username,
        email: userData.email,
        firstName: userData.firstName,
        rating: userData.rating,
        eventsCreated: userData.eventsCreated,
        joinedEvents: userData.joinedEvents
    };
    return user;
};

export const apiGetEvents = async (): Promise<Event[]> => {
    const response = await SpentApi.get(`/events`, {
        headers: { 'authorization': localStorage.getItem('accessToken') }
    });

    const apiEvents = response.data;

    // Mapear todos los datos de la API a la estructura del tipo Event
    const events: Event[] = apiEvents.map((event: any) => ({
        id: event.id,
        title: event.title,
        date: event.date,
        startTime: event.startTime,
        endTime: event.endTime,
        numParticipants: event.numParticipants,
        address: event.address,
        
        // Mapeo del deporte (Sport)
        sport: {
            id: event.sport.id,
            sportName: event.sport.name,  // Asegúrate que el campo se llama 'name' en la API
            description: event.sport.description,
        } as Sport,

        // Mapeo del usuario creador (User)
        userCreator: {
            id: event.userCreator.id,
            username: event.userCreator.username,
            email: event.userCreator.email,
            firstName: event.userCreator.firstName,
            rating: event.userCreator.rating,
            eventsCreated: [], // Aquí puedes mapear eventos creados si lo deseas
            joinedEvents: [],  // Aquí puedes mapear eventos unidos si es necesario
        } as User,

        // Mapeo de los participantes del evento (User[])
        eventParticipants: event.eventParticipants.map((participant: any) => ({
            id: participant.id,
            username: participant.username,
            email: participant.email,
            firstName: participant.firstName,
            rating: participant.rating,
            eventsCreated: [],  // Puedes mapear si lo necesitas
            joinedEvents: [],   // Puedes mapear si lo necesitas
        })) as User[],
    }));

    return events;
};