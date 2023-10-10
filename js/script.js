function calcTotal() {
    const precio=1000
    console.log("ingreso a calcTotal")
    
    let cant=document.getElementById("cant").value
    console.log(cant)

    let total=cant*precio
    console.log(total)

    document.getElementById("total").innerHTML=total
}