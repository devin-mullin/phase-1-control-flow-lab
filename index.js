function scuberGreetingForFeet(ride){
  if (ride <= 400) {
    return 'This one is on me!'
  } else if (ride > 2500) {
    return 'No can do.'
  } else if (ride > 2000) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'This one is on me!'
  }
}

function ternaryCheckCity(cityName){
  return (cityName === 'NYC' ?  'Ok, sounds good.' : 'No go.')
}

function switchOnCharmFromTip(tip){
  let response;
  
    switch(tip){
      case 'generous':
        return response = 'Thank you so much.'
        break;
      case 'not as generous':
        return response = 'Thank you.'
        break;
      default: 
        return response = 'Bye.'
    }
  }