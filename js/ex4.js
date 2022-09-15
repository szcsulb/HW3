var calculate = document.getElementById('calculate');
calculate.onclick = function ( e ) {
  e.preventDefault();
  let int1 = document.getElementById( 'int1' ).value;
  let int2 = document.getElementById( 'int2' ).value;
  let nonInt = isNaN( int1 );
  nonInt = ( isNaN( int2 ) ) ? true : nonInt;
  int1 = parseInt( int1 );
  int2 = parseInt( int2 );
  if( !nonInt )
  {
    let added = int1 + int2;
    let subtracted = int1 - int2;
    let multiplied = int1 * int2;
    let divided = ( int2 == 0 ) ? 0 : int1 / int2;
    let modulo = int1 % int2;
    message = `Addition: ${int1} + ${int2} = ${added}<br />Subtraction: ${int1} - ${int2} = ${subtracted}<br />Multiplication: ${int1} * ${int2} = ${multiplied}<br />Division: ${int1} / ${int2} = ${divided}<br />Modulo: ${int1} % ${int2} = ${modulo}`;
  }
  else
  {
    message = 'Please enter integer values only!';
  }
  document.getElementById( 'calculateMsg' ).innerHTML = message; 

}