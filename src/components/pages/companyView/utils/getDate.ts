export default (value: number) => {
  const date = new Date(value);
  const daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = daysName[date.getDay()];
  const hours = date.getHours();
  const minutes = date.getMinutes() < 10 ? `${date.getMinutes()}0` : date.getMinutes();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return [minutes, hours, day, dayName, month, year];
};
