window.onload = function() { document.body.classList.remove('is-preload'); }
window.ontouchmove = function() { return false; }
window.onorientationchange = function() { document.body.scrollTop = 0; }

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://api.nasa.gov/planetary/apod?api_key=F7g1BMTfBdIc16n5lHwcltDeVfageehMXDkeLq37&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
        if( data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
          document.querySelector('h3').innerText = data.explanation
        }else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
          document.querySelector('h3').innerText = data.explanation
        }
        
        
      })
      .catch(err => {
          console.log(`error ${err}`);
          alert('Error: Failed to fetch data. Please try again later');
      });
}
