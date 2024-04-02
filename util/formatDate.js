const validDate = (date) => {
  return !isNaN(new Date(date).getTime());
};
const formatDate = (createdAt) => {
  if (!validDate(createdAt)) {
    return "unknown date";
  }
  const newDate = new Date(createdAt);
  const modifiedDate = newDate.toLocaleDateString("en-Us").replaceAll("/", ".");
  return modifiedDate;
};

export { formatDate };
