let first_slide = document.getElementById("product1").parentElement;

let left_btn = document.getElementById("left-btn");

let right_btn = document.getElementById("right-btn");

var translate = 0;
right_btn.addEventListener("click", function () {
  if (translate > -34) {
    translate -= 11;
    left_btn.style.opacity = 1;
    first_slide.style.transform = `translateX(${translate}%)`;
  } else {
    right_btn.style.opacity = 0.2;
  }
});

left_btn.addEventListener("click", function () {
  if (translate < 0) {
    translate += 11;
    right_btn.style.opacity = 1;
    first_slide.style.transform = `translateX(${translate}%)`;
  } else {
    left_btn.style.opacity = 0.2;
  }
});

function facewash() {

  setTimeout(function () {
     window.location.href = "product.html";
  },1000)
 
}

function cart() {
  setTimeout(function () {
    window.location.href='cart.html'
  },1000)
}



function signin() {
  let input = document.getElementById('get_value').value;
 
  let details = JSON.parse(localStorage.getItem('details'));
  console.log(details);

  for (let i = 0; i < details.length;i++) {
    if (input == details[i]) {
      setTimeout(function () {
        alert('Logged In Successfully');
      }, 1000)
       
      setTimeout(function () {
        document.getElementById('signin_id').style.display = 'none';
      }, 1000)
     break;
    }
  
    else {
      setTimeout(function () {
        alert('Invalid Credentials Please Sign Up First')
      }, 1000);
      setTimeout(function () {
        document.getElementById('signin_id').style.display = 'none';
      }, 1000)
     
      let page = document.getElementById('credential').style.display = "none";
     break;
    }
  }
}

function cross() {
  setTimeout(function () {
  let page = document.getElementById('credential').style.display= "none";
    
  },1000)
  let page = document.getElementById('signin_id').style.display= "none";
}

function user() {
  let page = document.getElementById('credential').style.display= "block";
}

function log_in() {
  let page = document.getElementById('signin_id').style.display = "block";
  
  
  
}


function sign_up() {
  let page = document.getElementById('signin_id1').style.display = "block";


  
}

function cross1() {
  setTimeout(function () {
  let page = document.getElementById('credential').style.display= "none";
    
  },1000)
  let page = document.getElementById('signin_id1').style.display= "none";
}


function signup_1() {
  let input = document.getElementById('get_value1').value;
  
  if (input == '') {
    alert('Your Form is Empty')
  }
  
  let arr;

   arr = localStorage.getItem('details')

    if (arr == null) {
        arr = []
    }
    else {
        arr = JSON.parse(localStorage.getItem('details'))
    }
  arr.push(input)

  
  localStorage.setItem('details', JSON.stringify(arr))
  
  setTimeout(function () {
    alert('Sign up Successfully')
  }, 1000)
  setTimeout(function () {
    document.getElementById('signin_id1').style.display = 'none';
  }, 1000)
   setTimeout(function () {
  let page = document.getElementById('credential').style.display= "none";
    
  },1000)
    // arr = JSON.parse(localStorage.getItem('details'))
    // console.log(arr);
  
}