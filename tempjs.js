/*JS Audio Library (10 pts)
You must implement the Use of an Audio Listening Library, the library is called Annyang
On all pages the following 3 Options must be Implemented
  Hello
    Alerts with Hello World
  Change the color to <color>
    Changes the background color of the page to <color>
  Navigate to <page>
    Navigate to said page (hint you might need to lowercase to compare)
*/
function quoteJS() {
    fetch("https://zenquotes.io/api/quotes/")
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        const rand = Math.floor(Math.random() * data.length);
        const q = data[rand];
        document.getElementById("quoteShi").textContent 
        = `"${q.q}" - ${q.a}`;
      })
}
  
function vopc(){
  if (annyang) {
    // Let's define a command.
    const commands = {
      'hello': () => { alert('Hello world!'); }
    };
  
    // Add our commands to annyang
    annyang.addCommands(commands);
  
    // Start listening.
    annyang.start();
  }
  
}
window.onload = quoteJS, vopc;