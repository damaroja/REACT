


//Eventos con clic

 const btn = document.querySelector('.btn');
 btn.addEventListener('click', function(e){
     e.preventDefault();
     console.log(e);
     console.log(e.target);
     console.log(e.target.className);
     console.log(e.target.id);
 })
