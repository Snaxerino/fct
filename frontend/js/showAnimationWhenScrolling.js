function callbackFunc(entries, observer)
{
  entries.forEach(entry => {
    var txt = entry.target.id + " visibility: " + entry.isIntersecting;
    
    document.getElementById('log').appendChild(document.createTextNode(txt));
    document.getElementById('log').appendChild(document.createElement("br"));
  });
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

let observer = new IntersectionObserver(callbackFunc, options);

observer.observe(document.getElementById('home'));
observer.observe(document.getElementById('sobre'));
observer.observe(document.getElementById('contribuidores'));
observer.observe(document.getElementById('cursos'));