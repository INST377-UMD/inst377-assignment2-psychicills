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
  
window.onload = quoteJS;