const deadSpan = document.getElementById('dead');
let deadSpanCount = parseInt(deadSpan.textContent);
const lostSpan = document.getElementById('lost');
let lostSpanCount = parseInt(lostSpan.textContent);
let clickedHole = document.addEventListener('click', func = (e) => {
  let div = e.target;
  if (div.className === "hole hole_has-mole") {
    deadSpanCount += 1 ;
    deadSpan.innerHTML = deadSpanCount ;
  } else {
    lostSpanCount += 1 ;
    lostSpan.innerHTML = lostSpanCount ;
  }
  if (deadSpanCount >= 10) {
    alert(`ПОБЕДА!!! убито: ${deadSpanCount} , промахов ${lostSpanCount}`);
    location.reload();
  }
  if (lostSpanCount >= 5) {
    alert(`ПОРАЖЕНИЕ! Ты проиграл забавным кротам!`)
  }
});
