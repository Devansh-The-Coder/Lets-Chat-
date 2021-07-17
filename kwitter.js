function Close(){
    alert("Press ALT + F4")
}
function Open(){
    userName = document.getElementById("Name").value
    localStorage.setItem("Name", userName)
    window.location = "Kwitter_room.html"
}