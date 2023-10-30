const formatTimeDifference = (date) => {
    const currentDate = new Date();
    const publishedDate = new Date(date);
    const timeDifference = currentDate - publishedDate;

    // Sumar 3 horas
    const adjustedTimeDifference = timeDifference + 3 * 60 * 60 * 1000; // 3 horas en milisegundos

    const seconds = Math.floor(adjustedTimeDifference / 1000);
    if (seconds < 60) {
        return `${seconds} segundo${seconds !== 1 ? 's' : ''} `;
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
        return `${minutes} minuto${minutes !== 1 ? 's' : ''} `;
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
        return `${hours} hora${hours !== 1 ? 's' : ''} `;
    }

    const days = Math.floor(hours / 24);
    if (days < 7) {
        return `${days} día${days !== 1 ? 's' : ''} `;
    }

    const weeks = Math.floor(days / 7);
    if (weeks < 52) {
        return `${weeks} semana${weeks !== 1 ? 's' : ''} `;
    }

    const years = Math.floor(weeks / 52);
    return `${years} año${years !== 1 ? 's' : ''} `;
};

export default formatTimeDifference;
