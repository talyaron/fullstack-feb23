console.log(`index is ready!`);
const getTitle = async () => {
  console.time("fetching title");
  const response = await fetch("/dinamicTitle");
  console.timeEnd("fetching title");
  console.log(response);
  const data = await response.json();
  console.log(data);
  const title = document.querySelector("#title");
  if (!title) throw new Error("title not found!");
  title.innerHTML = data.title;
};

const getDescription = async () => {
  console.time("fetching description");
  const response = await fetch("/dinamicDescription");
  console.timeEnd("fetching description");
  console.log(response);
  const data = await response.json();
  console.log(data);
  const title = document.querySelector("#desc");
  if (!title) throw new Error("Description is not found!");
  title.innerHTML = data.description;
};
getDescription();
getTitle();
