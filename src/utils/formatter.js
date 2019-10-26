export const formatDate = (date) => {
    const formatter = new Intl.DateTimeFormat("pt-br")

    return formatter.format(date)
};
