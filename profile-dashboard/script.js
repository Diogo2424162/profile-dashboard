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
document.addEventListener("DOMContentLoaded", ()=>{
    const selectTema = document.querySelector("#selectTema");
    selectTema.addEventListener("click", switchThemes)
})
const imageLinks = [
    "/ProfilePick/1.png",
    "/ProfilePick/2.png",
    "/ProfilePick/3.png"
]