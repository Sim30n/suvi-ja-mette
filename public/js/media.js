var mql = window.matchMedia('(min-width: 700px)');

if(mql.matches) {
  // media query test returning true
  document.getElementById('headBrand').innerHTML = "Koulutetut hierojat"
}
