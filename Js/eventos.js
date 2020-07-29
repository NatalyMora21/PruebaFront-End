let mostrar=(idr)=>{
  
   

    var id = document.getElementById(idr);

    if (id.style.display === 'none') {
        id.style.display = 'block';
      
        document.location.href ="#"+idr;
     
           

    } else {
        id.style.display = 'none';
    }
}


