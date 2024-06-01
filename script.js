let hrs= document.querySelector('#Hours')
let min= document.querySelector("#Min")
let sec= document.querySelector("#Sec")





setInterval(()=>{
    let currentime= new Date();
    hrs.innerHTML= (currentime.getHours()<10?'0':'') + currentime.getHours();
    min.innerHTML= (currentime.getMinutes()<10?'0':'') + currentime.getMinutes();
    sec.innerHTML= (currentime.getSeconds()<10?'0':'') + currentime.getSeconds();


  
},1000)