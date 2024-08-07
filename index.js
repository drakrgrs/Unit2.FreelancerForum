const freelancers = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
  { name: "Carol", price: 70, occupation: "programmer" },
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const maxWorkers = 10;

const initialWorkers = [
  { name: "Alice", occupation: "writer", price: 30 },
  { name: "Bob", occupation: "teacher", price: 50 },
];

const addWorkerIntervalId = setInterval(addWorkers, 1000);

render();
function render() {
  const workers = document.querySelector("#workers");
  const newWorkers = initialWorkers.map((worker) => {
    const element = document.createElement("li");
    element.textContent =
      worker.name + " " + worker.price + " " + worker.occupation;
    return element;
  });
  workers.replaceChildren(...newWorkers);
  averagePrice();
}

function addWorkers() {
  const randWorker =
    freelancers[Math.floor(Math.random() * freelancers.length)];
  initialWorkers.push(randWorker);
  if (initialWorkers.length >= maxWorkers) {
    clearInterval(addWorkerIntervalId);
  }
  render();
}

function averagePrice() {
  const workers = document.querySelector("#workers");
  const avg = document.querySelector("#avg");
  const initialValue = 0;
  const sum =
    initialWorkers.reduce((a, b) => a + b.price, initialValue) /
    initialWorkers.length;
  avg.textContent = `Average Price: ${parseInt(sum)}`;
  console.log(sum);
}
console.log(averagePrice());
