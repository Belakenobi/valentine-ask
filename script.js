// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "WIIIIIIII!";

    //catImg.src = "cat_dance.gif";
    catImg.src = "cutelilcat.gif";



    document.querySelector<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Valentine Letter</title>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Aldrich&family=Pixelify+Sans:wght@400..700&display=swap"
      rel="stylesheet"
    />
    
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main id="envelope-container">
      <img src="envelope.png" alt="Closed Envelope" id="envelope" />
      <p>♡ Letter for You ♡</p>
    </main>

    <section id="letter-container" aria-hidden="true">
      <div class="letter-window">
        <h1 id="letter-title">Will you be my Valentine?</h1>

        <img src="cat_heart.gif" alt="Cute Valentine Cat" class="cat" id="letter-cat" />

        <div class="buttons" id="letter-buttons">
          <button type="button" class="btn-wrapper" id="yes-trigger">
            <img src="yes.png" class="btn yes-btn" alt="Yes" />
          </button>

          <div class="no-wrapper">
            <button type="button" class="btn-wrapper" id="no-trigger">
              <img src="no.png" class="btn no-btn" alt="No" />
            </button>
          </div>
        </div>

        <p id="final-text" class="final-text" style="display: none">
          <strong>Valentine Date:</strong> Meow me later!
        </p>
      </div>
    </section>

    <script src="script.js"></script>
  </body>
</html>(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
