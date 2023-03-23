const dates = ["2022-01-01", "2021-12-01", "2023-03-23", "2022-03-23"];

dates.sort((a, b) => {
  const firstDate = new Date(a);
  const secondDate = new Date(b);
  return firstDate - secondDate;
});
console.log(dates);
