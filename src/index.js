/* Task_1_i */
 // the 'official' secret Code sequence
  var secretCode = ['h', 'e', 'l', 'l', 'o'];
  // a variable to remember the 'position' the user has reached so far.
  var secretCodePosition = 0;
  // add keydown event listener
  document.addEventListener('keydown', (evt)=> {
    // get  the key  which pressed
    let keys = evt.key;
    // get the value of the required key from the secret code
    let requiredKey = secretCode[secretCodePosition];
    console.log(evt.key);
    // compare the key with the required key
    if (keys === requiredKey) {

      // move to the next key in the secret code sequence
      secretCodePosition++;

      // if the last key is reached, activate cheats
      if (secretCodePosition == secretCode.length) {
        activateCheats();
       secretCodePosition = 0;
      }
    } else {
      secretCodePosition = 0;
    }
  });
  function activateCheats() {
    alert("cheats activated");
  };

  /* task_1_ii */

   document.addEventListener("dblclick", (evt)=>{
    document.body.textContent =
      "clientX: " + evt.clientX +
      " - clientY: " + evt.clientY;
  });

/* task_1_iii */
const el = document.querySelectorAll('div');
el[2].addEventListener('mouseenter', ()=> {
 console.log(1234566);
});

/* task_1_iiii */
setTimeout(() => document.body.textContent = "hurry up", 15000);

/* task_1_iiiii */
