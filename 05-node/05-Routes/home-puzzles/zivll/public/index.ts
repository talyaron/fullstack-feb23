interface Task {
  id?: string;
  title: string;
  description: string;
  status: string;
}

async function handleGetProducts() {
  try {
    const response = await fetch("/API/tasks/getTasks");
    const result = await response.json();
    const { tasks } = result;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}