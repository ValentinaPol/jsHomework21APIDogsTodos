const URL_DOG = 'https://dog.ceo/api/breeds/image/random';
let CURRENT_SCREEN_HEIGHT;

/*const generateDogImage = () => {
    fetch(`${URL_DOG}`)
.then(
    (req) => {
        return req.json();
    }
)
.then(
    data => {
       let containerDogs = document.querySelector('#dogs');
       containerDogs.innerHTML = '';
       console.log(data);
       containerDogs.innerHTML += `
       <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <img src="${data.message}" alt="dog">  
              <span class="card-title">Good boy or good girl!</span>
            </div>
        </div>
       `
    }
 )
.catch(
    err => {
        console.log(err);
    }
)
}*/

//document.querySelector('#new-dog').addEventListener('click', generateDogImage);



const generateMoreDogImage = (countEl) => {
    fetch(`${URL_DOG}/${countEl}`)
    .then(
        (req) => {
            return req.json();
        })
    .then(
        data => {
            let containerDogs = document.querySelector('#dogs');
            //containerDogs.innerHTML = '';
            //console.log(data.message);
            data.message.forEach((item) => {
            containerDogs.innerHTML += `
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <img src="${item}" alt="dog">  
                        <span class="card-title">Good boy or good girl!</span>
                    </div>
                </div>
            `
            })
        }
    )
    .catch(
        err => {
            console.log(err);
        }
    )
}

generateMoreDogImage(2);

/*document.querySelector('#more-dog').addEventListener('click', () => {
    generateMoreDogImage(3)
});*/

/*document.querySelector("#bottompage").addEventListener("click", () => {
    window.scrollTo(0, document.body.scrollHeight);
})*/

const populateDogsImages = () => {
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
    let screenHeight = document.documentElement.scrollHeight;
    if (CURRENT_SCREEN_HEIGHT !== screenHeight && document.documentElement.clientHeight + 400 > windowRelativeBottom) {
        generateMoreDogImage(3);
        CURRENT_SCREEN_HEIGHT = screenHeight;
    }
}

window.addEventListener('scroll', populateDogsImages);