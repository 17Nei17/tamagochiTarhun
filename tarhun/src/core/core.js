export function setDateInLS(dateObj,health, sleep, hunger) {
    // писать тут короче всю инфу в локал сторедж
    localStorage.setItem("date", dateObj);
    localStorage.setItem("health", health);
    localStorage.setItem("sleep", sleep);
    localStorage.setItem("hunger", hunger);
}



export function initNewGame(dateObj) {
    // если не нашел данных
    localStorage.setItem("date", dateObj);
    localStorage.setItem("health", 10);
    localStorage.setItem("sleep", 10);
    localStorage.setItem("hunger", 10);
}