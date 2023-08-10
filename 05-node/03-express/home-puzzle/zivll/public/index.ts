console.log(`indes is ready!`);
const getTitle = async () => {
  console.time("getTitle");
  const response = await fetch(`/dinamicTitle`);
  console.timeEnd("getTitle");
  console.log(response);
  const data = await response.json();
  console.log(data);
  document.querySelector(`#title`).innerHTML = data.title;
};
getTitle();
