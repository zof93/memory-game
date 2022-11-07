document.addEventListener("DOMContentLoaded", () => {
    const cardsArray =[
        {
            name: "cheeseburger",
            img: "src/images/cheeseburger.png",
        },
        {
            name: "fries",
            img: "src/images/fries.png",
        },
        {
            name: "hotdog",
            img: "src/images/hotdog.png",
        },
        {
            name: "ice-cream",
            img: "src/images/ice-cream.png",
        },
        {
             name: "milkshake",
            img: "src/images/milkshake.png",
        },
        {
            name: "pizza",
            img: "src/images/pizza.png",
        },
        {
            name: "cheeseburger",
            img: "src/images/cheeseburger.png",
        },
        {
            name: "fries",
            img: "src/images/fries.png",
        },
        {
            name: "hotdog",
            img: "src/images/hotdog.png",
        },
        {
            name: "ice-cream",
            img: "src/images/ice-cream.png",
        },
        {
            name: "milkshake",
            img: "src/images/milkshake.png",
        },
        {
            name: "pizza",
            img: "src/images/pizza.png",
        },

    ]

    // sorting cards array randomly
    cardsArray.sort(() => 0.5 - Math.random())
    console.log(cardsArray)

    const grid = document.querySelector(".grid")
    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []
    const resultDisplay = document.querySelector("#result")

    function createBoard() {
        for (let i = 0; i < cardsArray.length; i++){
            const card = document.createElement("img")
            card.setAttribute("src", "src/images/blank.png")
            card.setAttribute("data-id", i)
            card.addEventListener("click", flipCard)
            grid.appendChild(card)
        }
    }

    function flipCard() {
        let cardId = this.getAttribute("data-id")
        cardsChosen.push(cardsArray[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute("src", cardsArray[cardId].img)
        if (cardsChosen.length ===2){
        setTimeout(checkForMatch, 500)
        }
    }
    function checkForMatch(){
        const cards = document.querySelectorAll("img")
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]
        if (optionOneId === optionTwoId){
            alert("You have clicked the same image!")
            cards[optionOneId].setAttribute("src", "src/images/blank.png")
            cards[optionTwoId].setAttribute("src", "src/images/blank.png")
        } else if (cardsChosen[optionOneId] === cardsChosen[optionTwoId]){
            alert("You have found a match!")
            cards[optionOneId].setAttribute("src", "src/images/white.png")
            cards[optionTwoId].setAttribute("src", "src/images/white.png")
            cards[optionOneId].removeEventListener("click",flipCard)
            cards[optionTwoId].removeEventListener("click", flipCard)
            cardsWon.push(cardsChosen)
        } else {
            alert("Sorry, try again!")
            cards[optionOneId].setAttribute("src", "src/images/blank.png")
            cards[optionTwoId].setAttribute("src", "src/images/blank.png")
        }

        cardsChosen = []
        cardsChosenIds = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardsArray.length / 2){
            resultDisplay.textContent = "Congratulations! You won!"
        }
    }

    createBoard()
})