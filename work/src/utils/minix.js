
export const getItem = (val) => {
    return JSON.parse(sessionStorage.getItem(val));
}