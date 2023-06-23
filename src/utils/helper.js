export const fetchData = (key) => JSON.parse(localStorage.getItem(key));

export const deleteItem = ({ key }) => localStorage.removeItem(key);
