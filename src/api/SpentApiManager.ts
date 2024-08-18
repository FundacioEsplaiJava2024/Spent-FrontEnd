import { Sport, User } from "../types/types";
import SpentApi from "./SpentApi";

export const apiGetUser = async (username: string): Promise<User> => {
  const response = await SpentApi.get(`/${username}`, {
    headers: { authorization: localStorage.getItem("accessToken") },
  });
  console.log(response);
  const userData = response.data;
  const user: User = {
    id: userData.id,
    username: userData.username,
    email: userData.email,
    firstName: userData.firstName,
    rating: userData.rating,
    eventsCreated: userData.eventsCreated,
    joinedEvents: userData.joinedEvents,
  };
  return user;
};

export const apiGetSports = async (): Promise<Sport[]> => {
  const response = await SpentApi.get(`/sports`, {
    headers: { authorization: localStorage.getItem("accessToken") },
  });
  const apiSports = response.data;
  const sports: Sport[] = apiSports.map((sport: any) => ({
    id: sport.id,
    sportName: sport.name,
    description: sport.description,
  }));
  return sports;
};

export const apiCreateEvent = async (
  title: string,
  date: string,
  startTime: string,
  endTime: string,
  numParticipants: string,
  address: string,
  sportName: string
) => {
  await SpentApi.post(
    "/events",
    {
      title: title,
      date: date,
      startTime: startTime,
      endTime: endTime,
      numParticipants: numParticipants,
      address: address,
      sportName: sportName,
    },
    { headers: { authorization: localStorage.getItem("accessToken") } }
  );
};
