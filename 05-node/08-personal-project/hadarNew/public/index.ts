interface Exercise {
  exercise: string;
  sets?: number;
  repetitions?: number;
  weight?: number;
  timer?: number;
  id?: string;
}

async function handleAddexercise(event: any) {
  try {
    event.preventDefault();
    const exercise = event.target.exercise.value;
    const sets = event.target.sets.value;
    const repetitions = event.target.repetitions.value;
    const weight = event.target.weight.value;
    const timer = event.target.timer.value;

    if (!exercise || !sets || !repetitions || !weight || !timer)
      throw new Error("Please complete all fields");

    const _exercise: Exercise = { exercise, sets, repetitions, weight, timer };
    const response = await fetch("/API/img/add-exercise", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(_exercise),
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

//get exercises from server

async function getExercises() {
  try {
    const response = await fetch("/API/img/get-exercises");
    const result = await response.json();
    const { exercises } = result;

    if (!Array.isArray(exercises)) throw new Error("exercises are not array");
    return exercises;
  } catch (error) {
    console.error(error);
    return [];
  }
}

function renderExercisesHTML(exercise: Exercise) {
  try {
    const html = `<div class="imgs">
           
        </div>
        <form class="exerciseForm" id=${exercise.id} onsubmit="updateExercise(event)">
        <div> <p>exercise</p> <input type="text" name="exercise" value="${exercise.exercise}" placeholder="exercise" /> </div>
        <div> <p>sets</p> <input type="number" name="sets" value="${exercise.sets}" placeholder="sets" /></div>
        <div> <p>repetitions</p> <input type="number" name="repetitions" value="${exercise.repetitions}" placeholder="repetitions" /></div>
        <div> <p>weight</p> <input type="number" name="weight" value="${exercise.weight}" placeholder="weight" /></div>
        <div> <p>timer</p> <input type="number" name="timer" value="${exercise.timer}" placeholder="timer" /></div>
        <button class="exerciseButton" type="submit">update</button>
        <button class="exerciseButton" onclick="handleDeleteExercise('${exercise.id}')">Delete</button>
        </form>
        `;
    return html;
  } catch (error) {
    console.error(error);
    return "";
  }
}

function renderExercises(exercises: Exercise[], HTMLElement: HTMLElement) {
  try {
    if (!HTMLElement) throw new Error("HTMLElment is not found");
    if (!Array.isArray(exercises)) throw new Error("exercises is not array");
    const exercisesHTML = exercises.map((exercise) => renderExercisesHTML(exercise)).join("");
    HTMLElement.innerHTML = exercisesHTML;
  } catch (error) {
    console.error(error);
  }
}

async function handleGetExercises() {
  const exercises = await getExercises();

  const root = document.querySelector("#root");
  renderExercises(exercises, root as HTMLDivElement);
}

async function handleDeleteExercise(id: string) {
  try {
    const response = await fetch("API/img/delete-exercise", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const result = await response.json();
    const { exercises } = result;

    renderExercises(
      exercises,
      document.querySelector("#root") as HTMLDivElement
    );
  } catch (error) {
    console.error(error);
  }
}

async function updateExercise(event: any) {
  try {
    event.preventDefault();
    const exercise = event.target.url.value;
    const sets = event.target.url.value;
    const repetitions = event.target.url.value;
    const weight = event.target.url.value;
    const timer = event.target.url.value;
    const id = event.target.id;
    console.log(id, exercise, sets, repetitions, weight, timer);

    const response = await fetch("API/img/update-exercise", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, exercise, sets, repetitions, weight, timer}),
    });
    const result = await response.json();
    console.log(result);
    const { exercises } = result;
    renderExercises(exercises, document.querySelector(`#root`) as HTMLDivElement);
  } catch (error) {
    console.error(error);
  }
}
