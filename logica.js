function Generar() {
    var usuario = "admin"
//"user" es el 'key' para obtenerlo despues
    localStorage.setItem("user", usuario);
    let parms = new URLSearchParams(new FormData(ElForm)).toString();
    location.href = 'firma.html?' + parms; 
    console.log(parms);}
    