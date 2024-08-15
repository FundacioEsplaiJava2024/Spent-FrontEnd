import { User } from "../types/types";
import SpentApi from "./SpentApi";


export const apiGetUser = async (username: string): Promise<User> => {
    const response = await SpentApi.get(`/${username}`);
    console.log(response);
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
