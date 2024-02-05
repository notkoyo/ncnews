const dateFormat = (date) => {
  const dateObj = new Date(date);
  const formattedDate = `${dateObj.getDate()}-${dateObj.getMonth()}-${dateObj.getFullYear()}`
  return formattedDate;
}

export default dateFormat;