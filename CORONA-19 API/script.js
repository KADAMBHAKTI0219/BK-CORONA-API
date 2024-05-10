let locationName = document.getElementById('location-name');
let submitBtn = document.getElementById('submit-btn');
let cardMain = document.getElementById('card-main');

submitBtn.addEventListener('click', () => {
  let location = locationName.value;
  fetch(`https://api.rootnet.in/covid19-in/stats/latest`)
    .then(response => response.json())
    .then(data => data.data.regional.forEach(loc => {
      if (loc.loc === location) {
        cardMain.innerHTML = `
        <div class="card">
        <h2>${loc.loc}</h2>
        <div class="card-body">
            <p>CONFIRMED CASES : <strong>${loc.totalConfirmed}</strong></p>
            <p>DISCHARGED : <strong>${loc.discharged}</strong></p>
            <p>DEATHS : <strong>${loc.deaths}</strong></p>
        </div>
       </div>  `
      }
    }))
    .catch(err=>console.log(err))
})

