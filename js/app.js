
  // menu
  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  var acc = document.querySelectorAll('.accordion');


  // panel
  acc.forEach( e => {
    e.addEventListener('click', ()=>{
      e.classList.toggle("active");

      var panel = document.querySelector('#'+e.id+'X');

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  });


  const baseImage = document.querySelector('.base');
  const mainImage = document.querySelector('.main-image');
  const selectedImage = document.querySelectorAll('.image');


  selectedImage.forEach( element => {
      element.addEventListener('click', (e) =>{
          mainImage.innerHTML = element.innerHTML;
      })
  });

  mainImage.innerHTML = baseImage.innerHTML;