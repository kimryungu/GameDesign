// 22개의 타로 카드 데이터
const tarotCards = [
  { name: "The Fool", description: "새로운 건강 여정을 시작하는 시점입니다.\n 그러나 경솔한 선택은 피하는 것이 좋습니다.", image: "cardimage/The Fool.jpeg" },
  { name: "The Magician", description: "당신에게 건강을 지킬 힘이 있습니다.\n 하지만 자만심이 생기지 않도록 주의해야 합니다.", image: "cardimage/The Magician.jpeg" },
  { name: "The High Priestess", description: "직관에 귀 기울이고 자신의 몸을 잘 살펴보세요.\n 정체성을 탐구하는 시간이 필요합니다.", image: "cardimage/The High Priestess.jpeg" },
  { name: "The Empress", description: "사랑과 편안함을 느낄 수 있는 시기입니다.\n 하지만 자기 관리에 소홀하지 않도록 하세요.", image: "cardimage/The Empress.jpeg" },
  { name: "The Emperor", description: "결단력이 건강 관리에서 중요합니다.\n 지나친 압박감은 오히려 해가 될 수 있습니다.", image: "cardimage/The Emperor.jpeg" },
  { name: "The Hierophant", description: "전통적인 방법으로 건강을 지키는 것이 유익할 수 있습니다.\n 새로운 접근은 조심스럽게 고려해야 합니다.", image: "cardimage/The Hierophant.jpeg" },
  { name: "The Lovers", description: "관계가 건강에 긍정적인 영향을 줄 수 있습니다.\n 하지만 갈등이 생기면 스트레스를 유발할 수 있으니 주의하세요.", image: "cardimage/The Lovers.jpeg" },
  { name: "The Chariot", description: "강한 의지로 목표를 향해 나아갈 수 있는 시점입니다.\n 하지만 지나친 경쟁심은 피하는 것이 좋습니다.", image: "cardimage/The Chariot.jpeg" },
  { name: "Strength", description: "내면의 힘으로 어려움을 극복할 수 있습니다.\n 그러나 무리한 목표는 피하는 것이 중요합니다.", image: "cardimage/Strength.jpeg" },
  { name: "The Hermit", description: "혼자만의 시간을 통해 재충전이 필요합니다.\n 외로움에 빠지지 않도록 스스로를 챙기세요.", image: "cardimage/The Hermit.jpeg" },
  { name: "The Fates", description: "운명적으로 건강한 길로 나아갈 수 있는 기회가 있습니다.\n 하지만 준비하지 않으면 불행이 찾아올 수 있습니다.", image: "cardimage/The Fates.jpeg" },
  { name: "Justice", description: "균형 잡힌 생활이 중요합니다.\n 불공정한 상황에 노출되면 해로울 수 있습니다.", image: "cardimage/Justice.jpeg" },
  { name: "The Hanged Man", description: "건강을 새로운 시각으로 바라보세요.\n 방치하면 문제가 커질 수 있으니 주의하세요.", image: "cardimage/The Hanged Man.jpeg" },
  { name: "Death", description: "변화가 필요한 시점입니다.\n 그러나 그 변화에 저항하지 말고 수용하세요.", image: "cardimage/Death.jpeg" },
  { name: "Temperance", description: "절제와 조화가 필요합니다.\n 지나친 절제는 오히려 건강에 해가 될 수 있습니다.", image: "cardimage/Temperance.jpeg" },
  { name: "The Devil", description: "유혹에 쉽게 빠질 수 있습니다.\n 나쁜 습관을 고치려는 노력이 필요합니다.", image: "cardimage/The devil.jpeg" },
  { name: "The Lighting", description: "갑작스러운 변화가 올 수 있습니다.\n 이 변화에 유연하게 대처하는 것이 중요합니다.", image: "cardimage/The Lighting.jpeg" },
  { name: "The Star", description: "희망적인 징조가 보이고 있습니다.\n 그러나 지나치게 낙관적이지 않도록 주의하세요.", image: "cardimage/The star.jpeg" },
  { name: "The Moon", description: "혼란스러운 상황에 놓일 수 있습니다.\n 감정적으로 불안정할 수 있으니 신중하게 행동하세요.", image: "cardimage/The moon.jpeg" },
  { name: "The Sun", description: "행복과 긍정적인 에너지가 넘치는 시기입니다.\n 그러나 과도한 활동은 피하는 것이 좋습니다.", image: "cardimage/The sun.jpeg" },
  { name: "Judgement", description: "자신의 선택이 건강에 큰 영향을 미칠 수 있습니다.\n 신중한 결정을 내리세요.", image: "cardimage/Judgement.jpeg" },
  { name: "The World", description: "성취감과 안정이 다가오고 있습니다.\n 하지만 이 안정에 안주하지 않도록 유의하세요.", image: "cardimage/The world.jpeg" },
  //마이너 아르카나
  { name: "Ace of Wands", description: "에너지가 넘치고 신체적으로 활발한 시기입니다.\n 새로운 운동을 시작해 보세요.", image: "cardimage/Ace of Wands.jpeg" },
    { name: "Two of Wands", description: "건강을 위한 중요한 결정을 내려야 할 시기입니다.\n 균형 잡힌 삶을 추구하세요.", image: "cardimage/Two of Wands.jpeg" },
    { name: "Three of Wands", description: "신체적으로 안정된 상태에서 활동을 시작할 때입니다.\n 꾸준한 운동을 통해 유지하세요.", image: "cardimage/Three of Wands.jpeg" },
    { name: "Four of Wands", description: "건강 상태가 좋아지고 안정을 찾을 수 있습니다.\n 휴식을 취하며 회복하세요.", image: "cardimage/Four of Wands.jpeg" },
    { name: "Five of Wands", description: "스트레스나 긴장으로 인한 신체적 불편이 있을 수 있습니다.\n 스트레스를 관리하세요.", image: "cardimage/Five of Wands.jpeg" },
    { name: "Six of Wands", description: "건강이 점차 회복되고 긍정적인 변화를 느낄 수 있습니다.\n 운동과 식이요법에 신경 쓰세요.", image: "cardimage/Six of Wands.jpeg" },
    { name: "Seven of Wands", description: "건강을 지키기 위한 노력과 방어가 필요합니다.\n 규칙적인 운동을 꾸준히 실천하세요.", image: "cardimage/Seven of Wands.jpeg" },
    { name: "Eight of Wands", description: "건강 회복이 빠르게 이루어질 수 있는 시기입니다.\n 활동적인 일정을 소화해 보세요.", image: "cardimage/Eight of Wands.jpeg" },
    { name: "Nine of Wands", description: "지치거나 피로가 쌓일 수 있습니다.\n 충분한 휴식이 필요합니다.", image: "cardimage/Nine of Wands.jpeg" },
    { name: "Ten of Wands", description: "건강에 과도한 부담이 될 수 있는 시기입니다.\n 스트레스를 해소할 방법을 찾으세요.", image: "cardimage/Ten of Wands.jpeg" },
    { name: "Page of Wands", description: "새로운 건강 목표를 세우고 적극적으로 시도할 수 있는 시기입니다.\n 에너지를 집중해 보세요.", image: "cardimage/Page of Wands.jpeg" },
    { name: "Knight of Wands", description: "건강에 대해 더욱 열정적이고 적극적인 접근이 필요합니다.\n 도전적이고 활동적인 태도를 유지하세요.", image: "cardimage/Knight of Wands.jpeg" },
    { name: "Queen of Wands", description: "건강에 자신감을 가지고 긍정적인 변화를 추구할 수 있는 시기입니다.\n 주의 깊게 자신의 상태를 점검하세요.", image: "cardimage/Queen of Wands.jpeg" },
    { name: "King of Wands", description: "건강 관리에서 주도적인 역할을 할 수 있는 시기입니다.\n 자신에게 맞는 건강법을 찾고 실천하세요.", image: "cardimage/King of Wands.jpeg" },
    //컵
    { name: "Ace of Cups", description: "마음이 안정되는 시기로, 정신적 힐링과 평온을 경험할 수 있습니다.", image: "cardimage/Ace of Cups.jpeg" },
    { name: "Two of Cups", description: "정서적인 안정이 신체적 건강에도 긍정적인 영향을 미칠 것입니다.", image: "cardimage/Two of Cups.jpeg" },
    { name: "Three of Cups", description: "활력이 넘치는 시기입니다.\n 즐거운 활동을 통해 건강을 유지하세요.", image: "cardimage/Three of Cups.jpeg" },
    { name: "Four of Cups", description: "건강에 대한 무관심이 생길 수 있습니다.\n 생활 습관을 점검하고 개선하세요.", image: "cardimage/Four of Cups.jpeg" },
    { name: "Five of Cups", description: "과거의 건강 문제로 인해 마음이 무거워질 수 있으니 긍정적인 변화에 집중하세요.", image: "cardimage/Five of Cups.jpeg" },
    { name: "Six of Cups", description: "심신이 편안한 시기로, 무리하지 말고 안정적인 생활을 이어가세요.", image: "cardimage/Six of Cups.jpeg" },
    { name: "Seven of Cups", description: "다양한 건강 관리 옵션 중 무엇을 선택할지 고민할 수 있습니다. 확실한 계획이 필요합니다.", image: "cardimage/Seven of Cups.jpeg" },
    { name: "Eight of Cups", description: "기존의 건강 습관을 개선하고 새로운 루틴을 시도할 필요가 있습니다.", image: "cardimage/Eight of Cups.jpeg" },
    { name: "Nine of Cups", description: "원하는 건강 목표에 도달할 가능성이 높습니다.\n 자신의 성취를 자축하세요.", image: "cardimage/Nine of Cups.jpeg" },
    { name: "Ten of Cups", description: "전반적으로 건강하고 만족스러운 시기입니다.\n 마음의 평화가 건강에 긍정적인 영향을 줍니다.", image: "cardimage/Ten of Cups.jpeg" },
    { name: "Page of Cups", description: "감정이 안정되며 몸과 마음이 조화를 이룰 수 있는 시기입니다.", image: "cardimage/Page of Cups.jpeg" },
    { name: "Knight of Cups", description: "정서적으로 안정을 찾게 되며 건강에 좋은 영향을 미칩니다.", image: "cardimage/Knight of Cups.jpeg" },
    { name: "Queen of Cups", description: "정신적 안정이 신체 건강에도 좋은 영향을 미칩니다.\n 내면의 평화를 추구하세요.", image: "cardimage/Queen of Cups.jpeg" },
    { name: "King of Cups", description: "마음의 평화가 신체 건강에도 긍정적인 영향을 줍니다.\n 감정을 잘 다스리세요.", image: "cardimage/King of Cups.jpeg" },
    //검
    { name: "Ace of Swords", description: "정신적인 깨달음이 건강에 긍정적인 영향을 줍니다.\n 마음을 가볍게 하고 미래에 집중하세요.", image: "cardimage/Ace of Swords.jpeg" },
    { name: "Two of Swords", description: "과로로 인한 스트레스를 조절하고 휴식이 필요할 때입니다.", image: "cardimage/Two of Swords.jpeg" },
    { name: "Three of Swords", description: "정서적 상처가 건강에 영향을 줄 수 있습니다.\n 심리적 치유가 필요합니다.", image: "cardimage/Three of Swords.jpeg" },
    { name: "Four of Swords", description: "신체와 정신의 휴식이 필요한 시기입니다.\n 무리하지 말고 재충전의 시간을 가지세요.", image: "cardimage/Four of Swords.jpeg" },
    { name: "Five of Swords", description: "정신적 스트레스가 신체에 부담을 줄 수 있습니다.\n 휴식을 취하고 스트레스 관리를 하세요.", image: "cardimage/Five of Swords.jpeg" },
    { name: "Six of Swords", description: "정신적 치유가 진행되는 시기입니다.\n 평온을 되찾고 긍정적으로 전환하세요.", image: "cardimage/Six of Swords.jpeg" },
    { name: "Seven of Swords", description: "자신의 건강 상태를 제대로 파악하는 것이 중요합니다.\n 경솔한 행동은 피하세요.", image: "cardimage/Seven of Swords.jpeg" },
    { name: "Eight of Swords", description: "스트레스가 신체에 부정적인 영향을 줄 수 있습니다.\n 불안감을 해소하는 것이 중요합니다.", image: "cardimage/Eight of Swords.jpeg" },
    { name: "Nine of Swords", description: "걱정과 불면증이 건강을 위협할 수 있습니다.\n 편안한 휴식을 취해보세요.", image: "cardimage/Nine of Swords.jpeg" },
    { name: "Ten of Swords", description: "심각한 건강 문제에 직면할 수 있습니다.\n 건강에 신경을 쓰고 지원을 받으세요.", image: "cardimage/Ten of Swords.jpeg" },
    { name: "Page of Swords", description: "정신적으로 깨어 있는 상태로, 건강에 대한 새로운 관심이 생길 수 있습니다.", image: "cardimage/Page of Swords.jpeg" },
    { name: "Knight of Swords", description: "에너지와 활력이 넘치는 시기입니다.\n 지나치게 무리하지 않도록 주의하세요.", image: "cardimage/Knight of Swords.jpeg" },
    { name: "Queen of Swords", description: "정신적, 신체적 건강에 대한 균형을 맞추는 것이 중요합니다.\n 자기 관리를 철저히 하세요.", image: "cardimage/Queen of Swords.jpeg" },
    { name: "King of Swords", description: "강한 정신력과 의지가 건강에 긍정적인 영향을 미칩니다.\n 과도한 스트레스를 피하고 정신적으로 안정된 상태를 유지하세요.", image: "cardimage/King of Swords.jpeg" },
    //펜타클
    { name: "Ace of Pentacles", description: "건강 면에서 긍정적인 변화가 나타나며, 에너지가 충만해집니다.", image: "cardimage/Ace of Pentacles.jpeg" },
  { name: "Two of Pentacles", description: "균형 잡힌 생활 습관을 유지하는 것이 건강에 긍정적인 영향을 줍니다.", image: "cardimage/Two of Pentacles.jpeg" },
  { name: "Three of Pentacles", description: "건강을 위해 타인과 협력하는 것이 중요합니다.\n 조언을 받아보세요.", image: "cardimage/Three of Pentacles.jpeg" },
  { name: "Four of Pentacles", description: "자신의 건강을 지나치게 염려할 수 있습니다.\n 여유를 갖고 균형을 유지하세요.", image: "cardimage/Four of Pentacles.jpeg" },
  { name: "Five of Pentacles", description: "건강이 좋지 않을 수 있으니, 충분한 휴식과 치료가 필요합니다.", image: "cardimage/Five of Pentacles.jpeg" },
  { name: "Six of Pentacles", description: "도움을 주거나 받을 기회가 생깁니다.\n 주변의 지지에 감사하세요.", image: "cardimage/Six of Pentacles.jpeg" },
  { name: "Seven of Pentacles", description: "건강 개선을 위해 지속적인 노력이 필요합니다.\n 천천히 변화를 기다리세요.", image: "cardimage/Seven of Pentacles.jpeg" },
  { name: "Eight of Pentacles", description: "꾸준히 운동하고 건강 관리에 힘쓰는 것이 중요합니다.", image: "cardimage/Eight of Pentacles.jpeg" },
  { name: "Nine of Pentacles", description: "건강에 대해 자립적이고 만족스러운 상태를 유지할 수 있습니다.", image: "cardimage/Nine of Pentacles.jpeg" },
  { name: "Ten of Pentacles", description: "건강이 안정적이며, 가족의 지지 속에서 잘 유지됩니다.", image: "cardimage/Ten of Pentacles.jpeg" },
  { name: "Page of Pentacles", description: "건강 개선을 위한 새로운 계획을 세우고 실천하기 좋은 시기입니다.", image: "cardimage/Page of Pentacles.jpeg" },
  { name: "Knight of Pentacles", description: "꾸준히 건강을 관리하며 체력을 유지할 수 있는 시기입니다.", image: "cardimage/Knight of Pentacles.jpeg" },
  { name: "Queen of Pentacles", description: "실용적이고 안정적인 생활 습관을 유지하여 건강을 잘 관리할 수 있습니다.", image: "cardimage/Queen of Pentacles.jpeg" },
  { name: "King of Pentacles", description: "건강을 잘 관리하며 안정된 생활을 누릴 수 있습니다.\n 자기 관리에 신경 쓰세요.", image: "cardimage/King of Pentacles.jpeg" }
];
  
let selectedCards = [];
 let shuffledCards = [];
 const totalCards = 78; // 카드의 총 개수
 const overlapOffset = 10; // 카드가 겹치는 정도 (덜 겹치게 수정)
 const cardsPerRow = 39; // 각 행에 배치할 카드 수
 
 document.getElementById('start-btn').addEventListener('click', () => {
   shuffleCards();
   createTarotDeck();
   document.getElementById('tarot-result').style.display = 'none'; // 결과 화면 숨기기
   document.getElementById('start-btn').style.display = 'none'; // 시작 버튼 숨기기
 });
 
 // 카드 덱을 랜덤으로 섞는 함수
 function shuffleCards() {
   shuffledCards = [...tarotCards];
   for (let i = shuffledCards.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
   }
 }
 
 // 타로 덱 생성
 function createTarotDeck() {
   const tarotDeck = document.getElementById('tarot-deck');
   tarotDeck.innerHTML = '';
 
   // 카드 덱을 두 개의 행으로 나누기
   const cardRow1 = document.createElement('div');
   const cardRow2 = document.createElement('div');
   cardRow1.classList.add('card-row');
   cardRow2.classList.add('card-row');
 
   for (let i = 0; i < totalCards; i++) {
     const card = document.createElement('div');
     card.classList.add('card');
     
     // 카드의 앞면과 뒷면 생성
     const cardInner = document.createElement('div');
     cardInner.classList.add('card-inner');
     
     const cardFront = document.createElement('div');
     cardFront.classList.add('card-front');
     cardFront.style.backgroundImage = `url('${shuffledCards[i].image}')`; // 카드 이미지 설정
     
     const cardBack = document.createElement('div');
     cardBack.classList.add('card-back');
     
     // card-inner에 front와 back 추가
     cardInner.appendChild(cardBack);
     cardInner.appendChild(cardFront);
     card.appendChild(cardInner);
 
     // 카드가 겹치지 않도록 left 값 설정
     const leftOffset = (i % cardsPerRow) * overlapOffset;
     if (i < cardsPerRow) {
       card.style.left = `${leftOffset}px`; // 첫 번째 행
       cardRow1.appendChild(card);
     } else {
       card.style.left = `${(i - cardsPerRow) * overlapOffset}px`; // 두 번째 행
       cardRow2.appendChild(card);
     }
 
     // 카드 클릭 시 선택 함수
     card.addEventListener('click', () => selectCard(shuffledCards[i], cardInner, cardFront));
   }
 
   tarotDeck.appendChild(cardRow1);
   tarotDeck.appendChild(cardRow2);
 }
 
 // 카드 선택
 function selectCard(card, cardInner, cardFront) {
   if (selectedCards.length < 3 && !selectedCards.includes(card)) {
     selectedCards.push(card);
 
     // 카드 앞면을 보여주기 위해 카드 뒤집기
     cardInner.style.transform = 'rotateY(180deg)'; // 카드가 뒤집히는 애니메이션
   }
 
   // 카드 3장이 선택되면 결과 표시
   if (selectedCards.length === 3) {
     displaySelectedCards();
   }
 }
 
 // 선택한 카드 결과 표시
 function displaySelectedCards() {
   const tarotResult = document.getElementById('tarot-result');
   const selectedCardsContainer = document.getElementById('selected-cards');
 
   selectedCardsContainer.innerHTML = ''; // 이전 결과 초기화
 
   selectedCards.forEach(card => {
     const cardContainer = document.createElement('div');
     cardContainer.classList.add('selected-card-container');
 
     const cardElement = document.createElement('div');
     cardElement.classList.add('selected-card');
     cardElement.style.backgroundImage = `url('${card.image}')`;
 
     // 카드 설명 추가
     const descriptionElement = document.createElement('p');
     descriptionElement.textContent = card.description;
     descriptionElement.classList.add('card-description');
 
     cardContainer.appendChild(cardElement);
     cardContainer.appendChild(descriptionElement);
     selectedCardsContainer.appendChild(cardContainer);
   });
 
   tarotResult.style.display = 'block'; // 결과 화면 표시
 }
 
 // 게임 초기화
 function resetGame() {
   selectedCards = [];
   shuffleCards(); // 덱을 랜덤으로 섞기
   createTarotDeck(); // 섞인 덱으로 카드 생성
   document.getElementById('tarot-result').style.display = 'none'; // 결과 화면 숨기기
 }
 
 // 초기화 버튼 클릭 시
 document.getElementById('reset-btn').addEventListener('click', resetGame);

 window.addEventListener('load', function() {
  const music = document.getElementById('bg-music');
  
  // 브라우저 자동 재생 문제 해결을 위해 페이지 클릭 시 재생
  function playMusic() {
      if (music && music.paused) {
          music.play().catch((error) => {
              console.warn("자동 재생이 차단되었습니다. 페이지 클릭 시 재생됩니다.");
          });
      }
  }

  // 페이지 로드 시 재생 시도
  playMusic();

  // 사용자가 페이지를 클릭하면 음악 재생 시도
  document.addEventListener('click', playMusic);
});