import {ENDPOINT} from "../../app/const/const.ts";

export const getPeople = async () => {
    let characters;
    const response = await fetch(`${ENDPOINT}/people/?page=1`);
    if (response.ok) {
        characters = await response.json();
    } else {
        throw new Error(`Ошибка HTTP: ${  response.status}`)
    }
    return characters;
}