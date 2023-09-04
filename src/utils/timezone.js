export function getDateTime(date: string, offset: number) {
    if (!date) return ''

    date = date.replace(' ', 'T')
    offset = offset ? offset : 0

    const year = date.substr(0,4)
    const month = date.substr(5,2)
    const day = date.substr(8,2)
    const hour = date.substr(11,2)
    const minute = date.substr(14,2)
    const second = date.substr(17,2)

    let d = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`)
    d.setHours(d.getHours() + offset)
    return d
}

const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }

export function formatTime(dateTime: Date) {
    let time = dateTime.toLocaleString('en-US') ?? '';
    return time.split(' ')[1].slice(0, -3) + ' ' + time.slice(-2);
}

export function formatDate(dateTime: Date) {
    return dateTime.toLocaleString('en-US', options as any)
}

export function formatDateTime(dateTime: Date) {
    return formatTime(dateTime) + ', ' + formatDate(dateTime)
}

export function formmatDateDMY(dateTime: Date) {
    const day = dateTime.getDate().toString();
    const month = (dateTime.getMonth() + 1).toString();
    const year = dateTime.getFullYear().toString();
    return `${day}/${month}/${year}`;
}

export function getCurrentTime(offset: number) {    
    let d = new Date();
    let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    let nd = new Date(utc + (3600000*offset));
    const time = nd.toLocaleString().split(', ')[1]?.split(' ')[0]?.slice(0, -3)
    const half = nd.toLocaleString().split(', ')[1]?.split(' ')[1] // AM or PM
    return `${time} ${half}`
}


export function getCreatedTime(timestamp: number) {

    const timestampMilliseconds = timestamp;
    const timestampSeconds = timestampMilliseconds / 1000;

const date = new Date(timestampSeconds * 1000);

const year = date.getUTCFullYear();
const month = ('0' + (date.getUTCMonth() + 1)).slice(-2);
const day = ('0' + date.getUTCDate()).slice(-2);
const hours = ('0' + date.getUTCHours()).slice(-2);
const minutes = ('0' + date.getUTCMinutes()).slice(-2);
const seconds = ('0' + date.getUTCSeconds()).slice(-2);

const formattedDateTime = `${hours}:${minutes}`;

return formattedDateTime;
}
