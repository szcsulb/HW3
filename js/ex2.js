let reveal = document.getElementById('reveal');
reveal.onclick = function ( e ) {
  e.preventDefault();
  let unitsInput = document.getElementById('userInput');
  let userName = document.getElementById('userName').value;
  let parsedValue = parseInt( unitsInput.value );
  let inputValue = unitsInput.value;
  let standing = '';
  let message = '';
  if(  parsedValue < 0 || isNaN( parsedValue ) )
  {
    message = `Sorry, ${userName}, ${inputValue} is not a valid entry.`;
  }
  else 
  {
    if( parsedValue <= 30 )
    {
      standing = 'Freshman';
    }
    else if( parsedValue >= 31 && parsedValue <= 60 )
    {
      standing = 'Sophomore';
    }
    else if( parsedValue >= 61 && parsedValue <= 90 )
    {
      standing = 'Junior';
    }
    else if( parsedValue >=91 )
    {
      standing = 'Senior';
    }
    message = `Hello ${userName}.<br />Your grade standing is ${standing}.`;
  }
  document.getElementById( 'revealMsg' ).innerHTML = message; 

}