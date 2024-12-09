export function setDateInLS(dateObj) {
    // писать тут короче всю инфу в локал сторедж
    localStorage.setItem("date", dateObj);
    localStorage.setItem("health", 1);
    localStorage.setItem("sleep", 99);
    localStorage.setItem("hunger", 98);
}