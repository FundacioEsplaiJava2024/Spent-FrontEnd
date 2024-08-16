export interface Sport {
    id: string;
    sportName: string;
    description: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    firstName: string;
    rating: number;
    eventsCreated: Event[];
    joinedEvents: Event[];
}

export interface Event {
    id: string;
    title: string;
    date: string;
    startTime: string;
    endTime: string;
    numParticipants: number;
    address: string;
    sport: Sport;
    userCreator: User;
    eventParticipants: User[];
}