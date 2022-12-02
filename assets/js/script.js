


function amimation() {
  var x = document.getElementById("myText").value;
  
  console.log(x.length)
  if(x.length>0 && x.length<=3){
  document.getElementById("demo").innerHTML = x[0] + " 2nd " + x[1] + " 3rd " + x[2];
  var m = x[0];
  var n = x[1];
  var o = x[2];
  console.log(m)
  console.log(n)
  console.log(o)
  if (m > 0 && n > 0 && o > 0) {
    document.getElementById("alertbox").style.display = "none";
    var numberSpin = function (selector) {
      console.log(selector)
      var element = document.getElementById(selector);
      var factor = 10 + Math.floor(Math.random() * 10);
      console.log(factor)
      var num = 10;
      var section = 100 / (num + 1);
      var stopValue = 1;
      var spin = function (flag, x) {
        var value = element.style.transform;

        value = value ? parseFloat(value.split('(')[1].split(')').join('')) : 0;

        if (flag && flag == true) {
          if (stopValue != 1 && (value <= stopValue || (value - section / factor) <= stopValue) && (typeof x != 'undefined' && (value >= x * -section && value <= (x - 0.5 >= 0 ? x - 0.5 : stopValue == 0 ? 0 : 0.5) * -section))) {
            element.style.transform = 'translateY(' + stopValue + '%)';
            stopValue = 1;
            return true;
          }
          stopValue = Math.floor(value / section) >= -num ? Math.floor(value / section) * section : 0;
        }
        if (value && value <= -(section * (num))) {
          element.style.transform = 'translateY(' + section + '%)';
          value = 0;
        } else {
          value -= section / factor;
        }
        element.style.transform = 'translateY(' + value + '%)';
        return false;
      }
      var spinTimer = setInterval(spin, 10);
      function stop(delay, x) {
        setTimeout(function () {
          clearTimeout(spinTimer);
          var stopTimer = setInterval(function () {
            if (spin(true, x)) { clearInterval(stopTimer); };
          }, 10);
        }, delay);
      }
      return {
        stop: function (delay, x) {
          return stop(delay, x);
        }
      }
    }
    var randomnum1 = m;
    var randomnum2 = n;
    var randomnum3 = o;


    numberSpin('scroll1').stop(1000 + 100 + 100, randomnum1);
    numberSpin('scroll2').stop(2000 + 100 + 100, randomnum2);
    numberSpin('scroll3').stop(3000 + 100 + 100, randomnum3);


    //   if(randomnum1==randomnum2 &&randomnum2==randomnum3&&randomnum3==randomnum1){
    //     document.getElementById("res").innerHTML="you have won";
    //   }else if(randomnum1==randomnum2 ||randomnum2==randomnum3||randomnum3==randomnum1){
    //     document.getElementById("res").innerHTML="50 points";
    //   }else{
    //     document.getElementById("res").innerHTML="No points";
    //   }
  } else {
    // alert("enter 3 digits");
    if (m == 0 || n == 0 || o == 0) {
      document.getElementById("alertbox").style.display = "block";
      document.getElementById("alerttxt").innerHTML = "Please dont enter 0";
    } else {
      document.getElementById("alertbox").style.display = "block";
      document.getElementById("alerttxt").innerHTML = "Please enter 3 digits";
    }
  }
}else{
  document.getElementById("alertbox").style.display = "block";
      document.getElementById("alerttxt").innerHTML = "not more than 3 digit";
}

}
function inputhandler(){
         var input=document.getElementById("myText");
         if(input.value.length>3){
          // document.getElementById("myText").maxLength=1;
          console.log(document.getElementById("myText").maxLength=3)
          document.getElementById("alertbox").style.display = "block";
      document.getElementById("alerttxt").innerHTML = "not more than 3 digit";
         }else if(input.value.length<=3){
          document.getElementById("alertbox").style.display = "none";
          // document.getElementById("alerttxt").innerHTML = "not more than 3 digit";
         }
}

