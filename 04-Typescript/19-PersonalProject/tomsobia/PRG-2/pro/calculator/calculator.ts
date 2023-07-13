function calculateAlcohol(): void {
  try {
    const gender: string = (document.querySelector("#gender") as HTMLSelectElement)
    .value;
  const weight: number = Number(
    (document.querySelector("#weight") as HTMLInputElement).value
  );
  const drinks: number = Number(
    (document.querySelector("#drinks") as HTMLInputElement).value
  );
  const alcohol: number = Number(
    (document.querySelector("#alcohol") as HTMLInputElement).value
  );
  const ratio: number = gender === "male" ? 0.68 : 0.55;
  const totalAlcohol: number = drinks * alcohol;
  const estimatedBAC: number = totalAlcohol / (weight * ratio);
  const result: HTMLElement|null = document.querySelector("#result");
  result.textContent = `הכמות המשוערת של אלכוהול בדם שלך היא: ${estimatedBAC.toFixed(2)} %`;

} catch (error) {
  console.error(error);
}

}

