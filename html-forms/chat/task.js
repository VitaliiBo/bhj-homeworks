let timer;
let answerTimer;
const chatWidget = document.querySelector('.chat-widget');
const chatInput = document.querySelector('#chat-widget__input');
const chatMessages = document.querySelector('#chat-widget__messages');
chatWidget.addEventListener('click', ()=>{
  if (chatWidget.classList.contains('chat-widget_active')) {
    return;
  } else {
    chatWidget.classList.toggle('chat-widget_active');
    timeoutMessage();
  }
 });

const autoAnswers = {
  answer1 : 'Вы кто такие?',
  answer2 : 'Чего вам надо?',
  answer3 : 'Я вас не звал!',
  answer4 : 'Идите лесом!',
  answer5 : 'Добрый день! Чё хотите?',
  answer6 : 'Идите погугли',
  answer7 : 'Очень сильно занят! Пишите завтра!'
}

function getRandom() {
  let randomNumber = Math.random() * 10;
  return Math.floor(randomNumber);
}
function scrollDown() {
  chatMessages.parentElement.scrollTop = chatMessages.parentElement.scrollHeight;
}
function getTempTime() {
  let tempTime = new Date();
  let hh = tempTime.getHours().toString();
  if (hh < 10) {
    hh = '0' + hh;
  }
  let mm = tempTime.getMinutes().toString();
  if (mm < 10) {
    mm = '0' + mm;
  }
  return `${hh}:${mm}`;
}
function timeoutMessage() {
  clearTimeout(timer);
  timer = setTimeout(function () {
    chatMessages.innerHTML += `
    <div class="message">
        <div class="message__time">${getTempTime()}</div>
        <div class="message__text">Могу Я вам чем-нибудь помочь?</div>
    </div>
    `;
    timeoutMessage();
    scrollDown();
  }, 30000);
}
function autoAnswer() {
  clearTimeout(answerTimer);
  answerTimer = setTimeout(function () {
    let answer = getRandom();
    if (answer >= 6) {
      answer = 6;
    }
    chatMessages.innerHTML += `
    <div class="message">
        <div class="message__time">${getTempTime()}</div>
        <div class="message__text">${Object.values(autoAnswers)[answer]}</div>
    </div>
    `;
    scrollDown();
  }, 2000);
}
chatInput.addEventListener('keypress', (e)=> {
  timeoutMessage();
  if (e.key === 'Enter' && chatInput.value.trim() != '' ) {
    chatMessages.innerHTML += `
    <div class="message message_client">
        <div class="message__time">${getTempTime()}</div>
        <div class="message__text">${chatInput.value.trim()}</div>
    </div>
    `;
    scrollDown();
    chatInput.value = '';
    autoAnswer();
  }
})
