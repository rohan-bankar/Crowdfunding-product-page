const supportBtn = document.querySelector(".support-btn");
const close = document.querySelector(".close-model");
const continueBtn = document.querySelector(".continue-btn");
 function visible(){
    document.querySelector(".pledge-page").style.display = 'block';
    document.querySelector(".bookMark-icon").style.display = 'none';  
    document.querySelector(".page-1").style.opacity = '0.5';  
}

function closeModel(){
    document.querySelector(".pledge-page").style.display = 'none';
    document.querySelector(".bookMark-icon").style.display = 'block'; 
    document.querySelector(".page-1").style.opacity = '1';
}

function pledgeEnter(){
    document.querySelector(".pledgeEnter-black-edition").style.display = 'block';
}



supportBtn.onclick = function(){
    visible();
}

close.onclick = function(){
    closeModel();
}



document.addEventListener("DOMContentLoaded", function() {
    const bambooInput = document.getElementById('2');
    const blackEditionInput = document.getElementById('3');
    const bambooPledgeEnter = document.querySelector('.pledgeEnter-bamboo');
    const blackEditionPledgeEnter = document.querySelector('.pledgeEnter-black-edition');
  
    
    function togglePledgeEnter(input, pledgeEnter) {
      if (input.checked) {
        pledgeEnter.style.display = "block";
      } else {
        pledgeEnter.style.display = "none";
      }
    }
  
   
    bambooInput.addEventListener('change', function() {
      togglePledgeEnter(this, bambooPledgeEnter);
    });
  
    blackEditionInput.addEventListener('change', function() {
      togglePledgeEnter(this, blackEditionPledgeEnter);
    });
  });
  

  function thankYouCard(){
    document.querySelector(".support-container").style.display = 'block';
    document.querySelector(".pledge-page").style.display = 'none';
  }

  continueBtn.addEventListener('click',()=>{
    thankYouCard();
  })