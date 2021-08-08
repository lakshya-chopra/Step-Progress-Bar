const previousBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')

previousBtn.disabled = true

const bullets = [...document.querySelectorAll('.bullet')]
console.log(bullets);

let currentStep = 0; //starting step count from index 0.

nextBtn.addEventListener('click', () => {
    const currentBullet = bullets[currentStep]

    if (currentStep < bullets.length - 1) { //if current step is less than the index of the last step.
        currentBullet.classList.add('done')
        currentStep++
        previousBtn.disabled = false
    }
    else {
        currentBullet.classList.add('lastStep') //we are adding a different class to the last step that doesn't have an arrow afterwards 
        currentStep++
        nextBtn.disabled = true;
    }

})
previousBtn.addEventListener('click', () => {
    const currentBullet = bullets[currentStep - 1]

    if (currentStep - 1 == 3) { //if currentStep - 1 is equal to the 3, then remove the following class from the element at index 3 of bullets array(basically the last element).
        currentBullet.classList.remove('lastStep')
        currentStep--
    }
    else if (currentStep - 1 >= 0) {
        currentBullet.classList.remove('done')
        currentStep--
        nextBtn.disabled = false;
    }
})