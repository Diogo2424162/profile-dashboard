function switchThemes(){
    const body = document.querySelector("body");
    const buttonIcon = document.querySelector("#themeIcon");

    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        buttonIcon.setAttribute("src", "ProfilePics/moon.png");
    } else {
        buttonIcon.setAttribute("src","ProfilePics/sun.png");
    }
}
function modaltoggle(){
    const modal = document.querySelector("#modalMenu");
    modal.classList.toggle("hidden");
}
//TENTATIVA DE FUÇÃO PARA OS CARDSSSSSSSSS
function cardsEventCriator (a){
    const cards = document.querySelectorAll(".charDisplayCard")
    cards.forEach(card=>{
        card.addEventListener("click",()=>{
            const cardID = card.id;
            a(cardID)
        })})
}
function initCardID(list){
    const img = document.querySelector("#avatarDisplay");
    
    cardsEventCriator((cardID)=>{
        console.log("ID: "+ cardID);
        console.log("lista: " + list[cardID]);

        if(list[cardID]){
            img.setAttribute("src", list[cardID]);
            localStorage.setItem("selectedDriverAvatar", lista[cardID])
        }
    })
}

document.addEventListener("DOMContentLoaded", ()=>{
    /* listing the buttons */
    const closeModal = document.querySelector("#closeModal");
    const editButton = document.querySelector("#editButton");
    const selectTema = document.querySelector("#selectTema");

    selectTema.addEventListener("click", switchThemes);
    closeModal.addEventListener("click", modaltoggle);
    editButton.addEventListener("click", modaltoggle);
    
})
const imageLinks = [
    "ProfilePics/1.png",
    "ProfilePics/2.png",
    "ProfilePics/3.png"
]
initCardID(imageLinks);