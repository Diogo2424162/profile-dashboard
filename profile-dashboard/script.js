function switchThemes(){
    const body = document.querySelector("body");
    const newTheme = document.querySelector("#selectTema");

    body.setAttribute("class", newTheme.value)
}
document.addEventListener("DOMContentLoaded", ()=>{
    const selectTema = document.querySelector("#selectTema");
    selectTema.addEventListener("change", switchThemes)
})