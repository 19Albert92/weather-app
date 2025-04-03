export const parseDate = (date) => {
    if (date) return Intl.DateTimeFormat('ru-RU', { day: '2-digit', month: 'short', year: 'numeric'}).format(new Date(date));
}

export const parseTime = (date) => {
    if (date) return Intl.DateTimeFormat('ru-RU', { hour: '2-digit', minute: '2-digit'}).format(new Date(date));
}

export const parseWeekDayShort = (date) => {
    if (date) return Intl.DateTimeFormat('ru-RU', { weekday: 'short'}).format(new Date(date));
}
