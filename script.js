
const heart=document.getElementsByClassName('fa-heart')
for (let i = 0; i < heart.length; i++) {
    
    heart[i].addEventListener('click', function like() {
        console.log( heart[i].style.color); 
          if (heart[i].style.color=='red') {
           
              heart[i].style.color='white'}
          else { heart[i].style.color='red'}
      })
}

