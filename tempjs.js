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
      },
      'Look up *stock': (stock) => {
        const nt = stock.toUpperCase();
        document.getElementById("tLook").value = nt;
        console.log(nt)
        document.getElementById("butt").click()
      
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
 function chartFunc(){
    //console.log(document.getElementById("tSelect").value)
    //console.log(document.getElementById("tLook").value)
    var c;
    document.getElementById("stockForm").addEventListener("submit", async function(event) {
      event.preventDefault();
      //delete chart? (add later hit https 429 too many request skull emoji x2)
      //instructions never specify to be able to search twice
   
      if (c) {
        c.destroy();
      }

    const ctx = document.getElementById('myChart');

    //console.log(tickData())
    const {prices, time} = await tickData();;
    const tflat = time.flat()
    const pflat = prices.flat()
    console.log(prices)
    console.log(time)
   c = new Chart(ctx, {
      type: 'line',
      data: {
        labels: tflat,
        datasets: [{
          label: '$ Stock Price',
          data: pflat,
          fill: false,
          tension: .04
        }]
      },
    });
 
  });
 
}

async function tickData(){
  

    const currentTime = Math.floor(Date.now() / 1000);
    const subTime1 = document.getElementById("tSelect").value;

    console.log(typeof subTime1)
  
  let stock = document.getElementById("tLook").value.toUpperCase();

  const convertedCurrent = new Date(currentTime * 1000);

  const previous = new Date();
  previous.setDate(previous.getDate() - subTime1)

  const tConvertedCurrent = (convertedCurrent.toISOString().split("T")[0]);
  const tConvertedPrevious = (previous.toISOString().split("T")[0]);
  
  console.log(tConvertedPrevious)
  let pr = [];
  let t = [];
  console.log("here")
   await fetch(`https://api.polygon.io/v2/aggs/ticker/${stock}/range/1/day/${tConvertedPrevious}/${tConvertedCurrent}?
    adjusted=true&sort=asc&limit=120&apiKey=rbNwfBAdlh4UdKRby4MJLgtP0dSvpTcr`)
    .then(response => response.json()).then(data =>{
      console.log("here2")
      pr.push(data.results.map(st => st.c))

    //  console.log(r)

      t.push( data.results.map(t=> new Date(t.t).toISOString().split("T")[0]))

      //console.log(time)
      //console.log({r, time})

     // pr.push(r)
      //t.push(time)
      console.log(pr)
      console.log(t)
    })
    console.log("here3")

    console.log(pr)
    console.log(t)
  return {prices:pr, time:t}
}

async function redditStock(){
  return fetch (`https://tradestie.com/api/v1/apps/reddit?date=2022-04-03`)
  .then(response => response.json())
  .then(data => {
      let r = data.slice(0, 5)
      return r
  })
  
}

async function populateRed(){
  document.getElementById("redd");
  const apiResponse = await redditStock();
  const result = await apiResponse;

  result.forEach(stock =>{
      const row = document.createElement('tr');

      const tick = document.createElement('td');
      const comments = document.createElement('td');
      const sentiment = document.createElement('td');
      

      comments.innerHTML = stock.no_of_comments;
      tick.innerHTML = stock.ticker;
      sentiment.innerHTML = stock.sentiment;
      
      const url = document.createElement('a');
      url.href = `https://finance.yahoo.com/quote/${tick.innerHTML}/`
      url.textContent = tick.innerHTML;
      
      row.append(url);
      row.append(comments);

      const bull = document.createElement("img")
      const bear = document.createElement("img")
      console.log("here1")

      bull.src = "https://static2.bigstockphoto.com/0/7/4/large2/470293591.jpg"
      bear.src = "https://img.freepik.com/premium-photo/bearish-stock-market-crash-economy-crisis-concept-with-digital-red-arrow-glowing-financial-chart-candlestick-bear-illustration-dark-background-with-indicators-3d-rendering_670147-39237.jpg?w=996"
      bear.width = 200;
      bull.width = 200;

      //gotta make this an image
      if(sentiment.innerHTML === "Bullish"){
        row.appendChild(bull);
        console.log("here2")
      }else{
        row.appendChild(bear);
       
      }
      
      redd.append(row);
  })
}

function dawg(){
  document.getElementById("meWhenISlide");
  
  
  for (i = 0; i < 10; i++){
    fetch (`https://dog.ceo/api/breeds/image/random`)
    .then(response => response.json())
    .then(data => {
        let c = document.getElementById(`pic${i}`)
        let img = document.createElement(`img`);
        c.src = data.message;
        meWhenISlide.appendChild(c)
        console.log("reached")
    
    })
  }
}

