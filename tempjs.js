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
      'hello': () => { alert('Hello world!'); },
      'Navigate to *page': (page) => {
        console.log(page)
        window.location.href = `${page}page.html`;
      },
      'Change the Color to *color': (color) => {
        console.log(color)
        document.body.style.backgroundColor = color;
      } 
    };

    // Add our commands to annyang
    annyang.addCommands(commands);
  
    // Start listening.
    annyang.start();

    console.log("started")
  }
}
  
function start(){
  if (annyang){
    vopc();
    annyang.start();
    console.log("start again")
  }
}

function stop(){
  if(annyang){
    annyang.abort();
    console.log("stopped")
  }
}


//populate this with the fetch api Ticker shitter 
//async func  for stock
async function chartFunc(){
  document.getElementById("stockForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(document.getElementById("tSelect").value)
    console.log(document.getElementById("tLook").value)

    const ctx = document.getElementById('myChart');
    const epoch = Math.floor(Date.now() / 1000);

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5],
        datasets: [{
          label: '$ Stock Price',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
}

async function tickData(){
  const currentTime = Math.floor(Date.now() / 1000);
  const subTime1 = document.getElementById("tSelect").value;
  function subTimeFunc(){
    let subTime2 = currentTime - (30 * 24 * 60 * 60);
    if (subTime1 === 60) {
      subTime2 = currentTime - (60 * 24 * 60 * 60)
    }else if (subTime1 === 90){
      subTime2 = currentTime - (90 * 24 * 60 * 60)
    }
    return subTime2;
  }

  console.log(subTimeFunc())
 // const tick = await fetch (`https://api.polygon.io/v2/aggs/ticker/${stock}/range/${mult}/day/${subTimeFunc()}/${currentTime}?
    //adjusted=true&sort=asc&limit=120&apiKey=rbNwfBAdlh4UdKRby4MJLgtP0dSvpTc`)
}

console.log(tickData())
