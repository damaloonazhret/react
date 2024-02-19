import {ENDPOINT} from "../../app/const/const.ts";

export const getRoot = async () => {
    let keys
    const response = await fetch(`${ENDPOINT}/`);
    if (response.ok) {
        keys = await response.json();
    } else {
        throw new Error(`Ошибка HTTP: ${  response.status}`)
    }
    return keys
}