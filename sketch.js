let N_POINTS = 100;
let x = [];
let y = [];
let y_controllo;
let volte;
let temp_y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  for (let i = 0; i < N_POINTS; i++) {
    x[i] = randomGaussian(windowWidth / 2, 100);
    // y[i] = random(0, i * 3);
    // y[i] = (windowHeight / N_POINTS) * i;

    temp_y = i * i + 5 * i;
    if (temp_y < height) y[i] = temp_y;
    else if (round(1 / (height / temp_y)) % 2 == 0)
      y[i] = height * round(1 / (height / temp_y)) - temp_y;
    else if (round(1 / (height / temp_y)) % 2 == 1) {
      let delta = temp_y - height * round(1 / (height / temp_y));
      y[i] = height - delta;
    }

    console.log(round(1 / (height / temp_y)));

    // circle(x[i], y[i], 1);
    text(i, x[i], y[i]);
  }

  for (let i = 0; i < N_POINTS - 1; i++) {
    line(x[i], y[i], x[i + 1], y[i + 1]);
  }
}

function draw() {}
