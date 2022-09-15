var reveal = document.getElementById('reveal');
reveal.onclick = function ( e ) {
  e.preventDefault();
  validDays = new Array( 'sun','mon','tue','wed','thu','fri','sat' );
  inputDay = document.getElementById( 'inputDay' ).value;
  checkDay = inputDay.toLowerCase();
  if( validDays.indexOf( checkDay ) != -1 )
  {

    switch( checkDay )
    {
      case 'sun':
        enteredDay = 'Sunday';
        nextDay = 'Monday';
      break;
      case 'mon':
        enteredDay = 'Monday';
        nextDay = 'Tuesday';
      break;
      case 'tue':
        enteredDay = 'Tuesday';
        nextDay = 'Wednesday';
      break;
      case 'wed':
        enteredDay = 'Wednesday';
        nextDay = 'Thursday';
      break;
      case 'thu':
        enteredDay = 'Thursday';
        nextDay = 'Friday';
      break;
      case 'fri':
        enteredDay = 'Friday';
        nextDay = 'Saturday';
      break;
      case 'sat':
        enteredDay = 'Saturday';
        nextDay = 'Sunday';
      break;
    }
    message = `You entered: ${enteredDay}<br />The following day is: ${nextDay}.`;
  }
  else 
  {
    message = `You entered ${inputDay}. It is not a valid entry.`;
  }
  document.getElementById( 'revealMsg' ).innerHTML = message; 

}