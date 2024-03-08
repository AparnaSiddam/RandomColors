const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const box = document.querySelector('.box');

     btn1.addEventListener('click', function(){
         startColors();
     });

     let intervalId;

     function startColors(){
       if(!intervalId){
           intervalId = setInterval(function(){
               setRandomColors();
           }, 1000);
       }
    }

    function setRandomColors(){
        let randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
        let randomColor2 = Math.floor(Math.random() * 16222115).toString(16);
        let randomColor3 = Math.floor(Math.random() * 16111415).toString(16);
           
            box.style.backgroundColor = `#${randomColor1}`;
            box.style.border =`solid 10px #${randomColor2}`; 
            box.style.color = `#${randomColor3}`;
        }

        btn2.addEventListener('click', function(){
            clearInterval(intervalId);
        });
        



