let quiz = [
  {
    question: "1. What is the most common form of marine litter?",
    options: ["A.Plastics", "B.Balloons", "C.Broken bottles", "D.Cigarette butts"],
    correct: 3,
    explanation: "Cigarette butts are the most common form of ocean litter.",
    type: "mcq"
    //https://oceanservice.noaa.gov/facts/most-common-ocean-litter.html#:~:text=In%20all%20that%20litter%2C%20there,coasts%20by%20runoff%20and%20stormwater.
  },
   {
    question: "2. How much oxygen comes from the ocean?",
    options: ["A.10-20%", "B.40%", "C. around 50%", "D.70-100%"],
    correct: 2,
    explanation: "About half of Earth’s oxygen comes from the ocean.",
    type: "mcq"
     //https://oceanservice.noaa.gov/facts/ocean-oxygen.html#:~:text=It's%20important%20to%20remember%20that,use%20oxygen%20for%20cellular%20respiration.
  },
  {
    question: "3. What are microplastics?",
    options: ["A. less than 5mm long small plastic pieces", "B. Many plastic bottles", "C. Non-recycled plastics", "D. Plastic litters in ocean"],
    correct: 0,
    explanation: "Microplastics are small plastic pieces less than 5 millimeters long which can be harmful to marine life.",
    type: "mcq"
    //https://oceanservice.noaa.gov/facts/microplastics.html
  },
   {
    question: "4. How long does it take for a plastic bottle to decompose in the ocean?",
    options: ["A. 50 years", "B. 100 years", "C. 250 years", "D. 450 years"],
    correct: 3,
    explanation: "It takes the ocean 450 years to break down the plastic.",
    type: "mcq"
    //https://www.weforum.org/agenda/2018/11/chart-of-the-day-this-is-how-long-everyday-plastic-items-last-in-the-ocean/#:~:text=Depending%20on%20how%20thirsty%20you,to%20break%20down%20the%20plastic.
  },
  {
    question: "5. What is the Great Pacific Garbage Patch?",
    options: ["A. Trash island", "B. A popular tourist attraction in the Pacific Ocean", "C.The largest plastic accumulation zones in the world’s oceans. ", "D. A region known for its abundant marine life"],
    correct: 2,
    explanation: "The Great Pacific Garbage Patch (GPGP) is the largest of the five offshore plastic accumulation zones in the world’s oceans. It is located halfway between Hawaii and California.",
    type: "mcq"
    //https://theoceancleanup.com/great-pacific-garbage-patch/?gad_source=1&gclid=CjwKCAjw59q2BhBOEiwAKc0ijcywnTn1xLTEpijv6bXwP_N1tEErMgdZ33O5k2-k1nQ3hzshHTH5yxoCQiMQAvD_BwE
  },
  {
  question: "6. A 'Dead zone' in the ocean refers to an area where oxygen levels are so low that most marine life cannot survive.",
    correct: true,
    explanation: "'Dead zone' is a more common term for hypoxia, which refers to a reduced level of oxygen in the water.",
    type: "tf"
    //https://oceanservice.noaa.gov/facts/deadzone.html#:~:text=There%20are%20many%20physical%2C%20chemical,those%20zones%20created%20by%20humans.
  },
  {
    question: "7. What is the main cause of dead zones in the ocean?",
    options: ["A. Overfishing", "B. Excessive nutrient pollution from human activities", "C.Natural variations in ocean temperature. ", "D. Marine traffic and shipping"],
    correct: 1,
    explanation: "There are many physical, chemical, and biological factors that combine to create dead zones, but nutrient pollution is the primary cause of those zones created by humans.",
    type: "mcq"
    //https://oceanservice.noaa.gov/facts/deadzone.html#:~:text=There%20are%20many%20physical%2C%20chemical,those%20zones%20created%20by%20humans.
  },
  {
  question: "8. Marine animals can become entangled in or ingest plastic debris, causing suffocation, starvation, and drowning.",
    correct: true,
    explanation: "9. Plastic pollution causes physical harm or entanglement, leading to injury or death",
    type: "tf"
    //https://www.pewtrusts.org/en/research-and-analysis/articles/2018/09/24/plastic-pollution-affects-sea-life-throughout-the-ocean#:~:text=It%20is%20estimated%20that%20up,suffocation%2C%20starvation%2C%20and%20drowning.
  },
  {
  question: "10. Kyoto protocol aims to protect the marine environment from pollution by ships?",
    correct: false,
    explanation: "MARPOL is the main international convention aimed at the prevention of pollution from ships caused by operational or accidental causes. ",
    type: "tf"
    //https://www.infrastructure.gov.au/infrastructure-transport-vehicles/maritime/protection-marine-environment/marpol#:~:text=International%20Convention%20for%20the%20Prevention%20of%20Pollution%20from%20Ships%20(MARPOL),-Listen&text=MARPOL%20is%20the%20main%20international,Organization%20(IMO)%20in%201973.
  },
];

let currentQuestion = 0;
let userAnswer = -1;
let score = 0;
let timer = 10;
let intervalId;
let state = "start";
let feedbackMessage = "";
let feedbackColor;
let feedbackTimer;
let feedbackX;

let values = [];
let step;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(20);
  feedbackX = -width;
  
  step = width / 8;
  generateNewEllipses();
}

function draw() {
  background(220);
  
  drawEllipses();
  
  noStroke(); // Remove stroke from text
  
  if (state === "start") {
    displayStartScreen();
  } else if (state === "quiz") {
    displayQuestion();
    displayTimer();
  } else if (state === "feedback") {
    displayFeedback();
    animateFeedback();
  } else if (state === "end") {
    displayEndScreen();
  }
}

function generateNewEllipses() {
  values = [];
  for (let i = 0; i <= 8; i++) {
    values[i] = random(5, 60);
  }
}

function drawEllipses() {
  let y = height / 4;
  
  for (let i = 0; i < values.length; i++) {
    let x = i * step + step / 2;
    let r = values[i];
    
    let red = random(255);
    let green = random(255);
    let blue = random(255);
    stroke(red,green,blue);
    fill(0,0,50);
    ellipse(x, y, r);
  }
}

function displayStartScreen() {
  textAlign(CENTER);
  textSize(32);
  fill(0);
  text("Welcome to the Quiz!", width / 2, height / 2 + 30);
  textSize(20);
  text("Tap to Start", width / 2, height / 2 + 60);
}

function startQuiz() {
  state = "quiz";
  resetTimer();
}

function resetTimer() {
  clearInterval(intervalId);
  timer = 10;
  intervalId = setInterval(() => {
    timer--;
    if (timer <= 0) {
      checkAnswer(-1);
    }
  }, 1000);
}

function displayQuestion() {
  let q = quiz[currentQuestion];
  textAlign(LEFT);
  textSize(20);
  textStyle(BOLD);
  fill(0);
  textWrap(WORD);
  text(q.question, 20, height / 2 - 60, width - 40);

  if (q.type === "mcq") {
    for (let i = 0; i < q.options.length; i++) {
      fill(0, 0, 0, 20); 
      rect(20, height / 2 + 10 + i * 40, width - 40, 30, 5);
      fill(255);
      textSize(16);
      textStyle(NORMAL);
      text(q.options[i], 30, height / 2 + 30 + i * 40);
    }
  } else if (q.type === "tf") {
    fill(0, 0, 0, 20);
    rect(20, height / 2 + 10, (width - 60) / 2, 40, 10);
    rect(40 + (width - 60) / 2, height / 2 + 10, (width - 60) / 2, 40, 10);
    fill(255);
    textSize(16);
    textStyle(NORMAL);
    text("True", 30 + (width - 60) / 4, height / 2 + 35);
    text("False", 50 + 3 * (width - 60) / 4, height / 2 + 35);
  }
}

function displayTimer() {
  textAlign(CENTER);
  textSize(46);
  textStyle(BOLD);
  fill(0);
  text(timer, width / 2, 80);
  textStyle(NORMAL);
}

function checkAnswer(selectedOption) {
  let q = quiz[currentQuestion];
  clearInterval(intervalId);

  if ((q.type === "mcq" && selectedOption === q.correct) ||
    (q.type === "tf" && selectedOption === q.correct)) {
    score++;
    feedbackMessage = "Correct!\n" + q.explanation;
    feedbackColor = color(0, 210, 0);
  } else {
    feedbackMessage = "Incorrect!\n" + q.explanation;
    feedbackColor = color(255, 0, 0);
  }

  state = "feedback";
  feedbackTimer = millis();
  feedbackX = 10;
}

function animateFeedback() {
  if (feedbackX < width / 2) {
    feedbackX += 15;
  }
}

function displayFeedback() {
  textAlign(CENTER);
  textSize(24);
  fill(feedbackColor);
  textWrap(WORD);
  text(feedbackMessage, width / 2 - 200, height / 2, 400);

  if (millis() - feedbackTimer > 2000) {
    nextQuestion();
  }
}

function displayEndScreen() {
  textAlign(CENTER);
  textSize(32);
  fill(0);
  text("Quiz Over!", width / 2, height / 2 - 50);
  textSize(24);
  text("Your Score: " + score + " / " + quiz.length, width / 2, height / 2);
  textSize(20);
  text("Tap to Restart", width / 2, height / 2 + 50);
}

function keyPressed() {
  if (state === "start" && (keyCode === ENTER || mouseIsPressed)) {
    startQuiz();
  } else if (state === "end" && (keyCode === ENTER || mouseIsPressed)) {
    currentQuestion = 0;
    score = 0;
    state = "start";
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= quiz.length) {
    state = "end";
  } else {
    state = "quiz";
    generateNewEllipses();
    resetTimer();
  }
}

// Use touchStarted() for touch events
function touchStarted() {
  if (state === "quiz") {
    let q = quiz[currentQuestion];
    if (q.type === "mcq") {
      for (let i = 0; i < q.options.length; i++) {
        if (mouseX > 20 && mouseX < width - 20 && mouseY > height / 2 + 10 + i * 40 && mouseY < height / 2 + 40 + i * 40) {
          checkAnswer(i);
          return false; // Prevents default behavior
        }
      }
    } else if (q.type === "tf") {
      if (mouseX > 20 && mouseX < (width - 60) / 2 + 20 && mouseY > height / 2 + 10 && mouseY < height / 2 + 50) {
        checkAnswer(true);
        return false; // Prevents default behavior
      } else if (mouseX > 40 + (width - 60) / 2 && mouseX < width - 20 && mouseY > height / 2 + 10 && mouseY < height / 2 + 50) {
        checkAnswer(false);
        return false; // Prevents default behavior
      }
    }
  } else if (state === "start") {
    startQuiz();
    return false; // Prevents default behavior
  } else if (state === "end") {
    currentQuestion = 0;
    score = 0;
    state = "start";
    return false; // Prevents default behavior
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  step = width / 25;
  generateNewEllipses();
}
