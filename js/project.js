let body = document.getElementById("body")

function checkBack(){

    body.innerHTML+=`
    
    <div class="wrapper">
  <div class="card">
    <h1>
      <span class="enclosed">Check</span>Back
    </h1>
    <p>
     CHECK BACK IN THE NEXT TWO MONTH 
    </p>
    <a href="../index.html">Go🔙</a>
  </div>
  
</div>
    `
}

window.onload = checkBack()