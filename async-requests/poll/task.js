const question = document.querySelector('#poll__title');
const answers = document.querySelector('#poll__answers');

function getPoll() {
  let xhr = new XMLHttpRequest();
  let url = 'https://netology-slow-rest.herokuapp.com/poll.php'
  xhr.open('GET', url );
  xhr.responseType = 'json';
  xhr.send()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status == 200) {
      let id = xhr.response.id;
      let title = xhr.response.data.title;
      question.insertAdjacentHTML('afterBegin', title);
      for (key in xhr.response.data.answers) {
        answers.insertAdjacentHTML('beforeEnd', `
        <button class="poll__answer">
          ${xhr.response.data.answers[key]}
        </button>
        `)
      }
    let answerButtons = Array.from(document.querySelectorAll('.poll__answer'));
    function clickAnswer() {
        alert('Спасибо, ваш голос засчитан!');
        answers.innerHTML = '';
        let answerId = answerButtons.findIndex(item => item === this);
        xhr = new XMLHttpRequest();
        xhr.open('POST' , url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(`vote=${id}&answer=${answerId}`);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status == 200){
            let votesSumm = 0;
            let stats = xhr.response.stat;
            for ( key in stats) {
              votesSumm += parseInt(stats[key].votes);
            }
            for ( key in stats) {
              let answerPercent = (parseInt(stats[key].votes) / votesSumm) * 100;
              answerPercent = answerPercent.toFixed(2);
              answers.insertAdjacentHTML('afterEnd', `
              <div>
                ${stats[key].answer}: <b>${answerPercent}%</b>
              </div>
              `)
            }
          }
        }
    }
    answerButtons.forEach(item => item.addEventListener('click' , clickAnswer ));
    }
  }
}
getPoll();
