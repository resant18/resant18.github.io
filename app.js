const vwWidth = window.innerWidth;



// check whether Sevice Worker support exist in browser or not
if ('serviceWorker' in navigator) {
  // to improve boilerplate, delay the service worker registration until after load event fires on window  
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', {scope: '/'}).then((reg) => {                
      // registration worked      
      console.log('Registration succeeded. Scope is ' + reg.scope);      
    }).catch((error) => {
      // registration failed    
      console.log('Registration failed with ' + error);      
    });
  });
} else {
  console.log('Service worker is not supported by your browser');    
}

  