export const ALL_DATA = "ALL_DATA";

export const getDataFromUser = (data) => {
    return{
        type :ALL_DATA,
        data
    }
}