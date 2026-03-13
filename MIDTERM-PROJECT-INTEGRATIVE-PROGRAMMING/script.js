// CAROUSEL FUNCTIONALITY
let currentIndex = 0;
const images = document.querySelectorAll('.hero-right img');

function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}
setInterval(showNextImage, 3000);

// FUNCTIONALITY FOR PORTFOLIO.HTML 
function tempConverter(){
    let celsius = parseFloat(prompt("Enter temperature in Celsius: "));
    let fahrenheit = (celsius * 9/5) + 32;
    alert("Temperature in Fahrenheit: " + fahrenheit.toFixed(2));
}

function longerWord(){
    let w1 = prompt("Enter the 1st word: ").trim();
    if (!isNaN(w1)){
        alert("Please enter word only");
    }else{
        let w2 = prompt("Enter the 2nd word: ").trim();
    
        if (!isNaN(w2)){
            alert("Please enter words only");
        }else{
            if (w1.length>w2.length){
                alert("The Longer Word is: "+ w1)
            }else if(w1.length == w2.length){
                alert("Both word is the same length")
            }else{
                alert("The longer word is: "+ w2)
            }
        }
    }
}


function showBirthStone(birthmonth) {
    birthmonth = prompt("Enter your birth month: ").toLowerCase().trim();

    if (!isNaN(birthmonth)) {
        alert("Invalid Input");
        return;
    }
    switch (birthmonth) {
        case "january":
            alert("Garnet");
            break;
        case "february":
            alert("Amethyst");
            break;
        case "march":
            alert("Aquamarine");
            break;
        case "april":
            alert("Diamond");
            break;
        case "may":
            alert("Emerald");
            break;
        case "june":
            alert("Alexandrite & Pearl");
            break;
        case "july":
            alert("Ruby");
            break;
        case "august":
            alert("Peridot");
            break;
        case "september":
            alert("Sapphire");
            break;
        case "october":
            alert("Opal & Tourmaline");
            break;
        case "november":
            alert("Citrine & Topaz");
            break;
        case "december":
            alert("Blue Zircon, Turquoise & Tanzanite");
            break;
        default:
            alert("Invalid month. Please enter a valid month.");
            break;
        }
    }



function arithmetic(){
    let num1 = parseInt(prompt("Enter 1st number: "));
    if (isNaN(num1)){
        alert("Numbers only");
    } else {
        let num2 = parseInt(prompt("Enter 2nd number: "));
        if (isNaN(num2)){
            alert("Numbers only");
        } else {
            let operator = parseInt(prompt("Basic Operations\n1.Add\n2.Sub\n3.Multiply\n4.Divide\nChoose operator: "));
            let total;
            switch(operator){
                case 1:
                    total = num1 + num2;
                    break;
                case 2:
                    total = num1 - num2;
                    break;
                case 3:

                    total = num1 * num2;
                    break;
                case 4:

                    if (num2 === 0){
                        alert("Cannot divide by 0");
                        break;
                    } else {
                        total = num1 / num2;
                    }
                    break;
                default:
                    alert("Invalid operator");
                    break;
            }
            alert("Answer: " + total);
        }
    }
}


function computeAcceleration(){
    let initialVelocity = parseFloat(prompt("Enter initial velocity(m/s): "));
    let finalVelocity = parseFloat(prompt("Enter final velocity(m/s): "));
    let changeInTime = parseFloat(prompt("Enter change in time(seconds): "));

    if (isNaN(initialVelocity) && isNaN(finalVelocity) && isNaN(changeInTime)){
        alert("Invalid input. Please enter numeric values.");
    }
    else {
        let acceleration = (finalVelocity - initialVelocity) /changeInTime;
        alert("Acceleration: " + acceleration);
    }
}

// FUNCTIONALITY FOR FAVORITES.HTML
function toggleLike(element) {
    let heartImg = element.querySelector("img");

    if (heartImg.dataset.liked === "true") {
        heartImg.style.filter = "grayscale(100%)";
        heartImg.dataset.liked = "false";
    } else {
        heartImg.style.filter = "invert(21%) sepia(85%) saturate(7483%) hue-rotate(358deg) brightness(91%) contrast(120%)";
        heartImg.dataset.liked = "true";
    }
 }

function addComment(button) {

    let commentInput = button.previousElementSibling;
    let commentText = commentInput.value.trim();

    if (commentText !== "") {

        let card = button.closest(".comments-section");
        let commentList = card.querySelector(".comments-list");

        let newComment = document.createElement("li");
        newComment.textContent = commentText;

        commentList.appendChild(newComment);

        commentInput.value = "";
    }
}

function openPage(url){
    window.open(url, '_blank');
    self.close();
}