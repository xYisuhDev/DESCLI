const now = new Date();
const eval = new Date(2026, 10, 20);
now.setHours(0, 0, 0, 0);

let leftHours = 0;

for (let i = new Date(now); i < eval; i.setDate(i.getDate() + 1)) {
  const currentDate = i.getDate();

  switch (currentDate) {
    case 2:
      leftHours += 2;
      break;

    case 3:
      leftHours += 2;
      break;

    case 5:
      leftHours += 2;
      break;
    default:
      break;
  }
}

console.log(`Quedan ${leftHours} horas de clase hasta la evaluación.`);
