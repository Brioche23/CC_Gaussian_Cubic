let N_POINTS = 100;
let x = [];
let z = [];
let y = [];
let y_controllo;
let volte;
let temp_y;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  camera(-2200, 0, 0, 0, height / 2, 0);
  perspective(PI / 3.5, width / height, 0.1, 5000);
  // ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 1000);
  for (let i = 0; i < N_POINTS; i++) {
    x[i] = randomGaussian(0, 150);
    z[i] = randomGaussian(0, 150);
    // y[i] = random(0, i * 3);
    // y[i] = (windowHeight / N_POINTS) * i;

    temp_y = i * i + 3 * i;
    if (temp_y < height) y[i] = temp_y;
    else if (round(1 / (height / temp_y)) % 2 == 0)
      y[i] = height * round(1 / (height / temp_y)) - temp_y;
    else if (round(1 / (height / temp_y)) % 2 == 1) {
      let delta = temp_y - height * round(1 / (height / temp_y));
      y[i] = height - delta;
    }

    console.log(round(1 / (height / temp_y)));

    // circle(x[i], y[i], 1);
    // text(i, x[i], y[i], y[i]);
  }
}

function draw() {
  // rotateZ(millis() / 1000);
  background(255);

  // orbitControl();
  rotateY(millis() / 2000);
  for (let i = 0; i < N_POINTS - 1; i++) {
    line(x[i], y[i], z[i], x[i + 1], y[i + 1], z[i + 1]);
  }
}

// Function to save the artwork with today's date
function keyPressed() {
  let d = day();
  let m = month();
  let y = year();

  if (key == "s" || key == "S")
    saveCanvas(y + "_" + m + "_" + d + "_Gen_Art", "png");
}
