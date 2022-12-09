//assigned variables
let now = dayjs()
let j = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
let html = '';
let scheduleContainer = document.querySelector('.schedule');

//element selectors
dateEl = document.getElementById('currentDay')

//sets time and date on top of page. Military time is on purpose
dateEl.textContent = now.format('MMM D,YYYY HH:MM')






//populates page with 
function populate() {
  j.forEach( j => {
  if (now.format('HH') == j) {
    
    html += `<div id="hour-${[j]}" class="row time-block present">
        <div class="col-2 col-md-1 hour text-center py-3">${[j]}00</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>
      `;
  } else if (now.format('HH') < j) {
   
    html += `<div id="hour-${[j]}" class="row time-block future">
         <div class="col-2 col-md-1 hour text-center py-3">${[j]}00</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>
      `;
  } else if (now.format('HH') > j) {
   
    html += `<div id="hour-${[j]}" class="row time-block past">
    <div class="col-2 col-md-1 hour text-center py-3">${[j]}00</div>
    <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
    </button>
  </div>
      `;
  } else {
    return
  }
}); scheduleContainer.innerHTML = html;}


populate()