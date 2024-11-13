// 22개의 타로 카드 데이터
const tarotCards = [
  { name: "The Fool", description: "새로운 시작의 기회가 다가오고 있습니다.\n 이 시점에서는 신중함이 필요하지만, 의외의 기회가 찾아올 수 있습니다.", image: "cardimage/The Fool.jpeg" },
  { name: "The Magician", description: "주어진 자원을 잘 활용하여 원하는 방향으로 나아갈 수 있습니다.\n 이 시기에는 행운이 당신을 도와줄 것입니다.", image: "cardimage/The Magician.jpeg" },
  { name: "The High Priestess", description: "내면의 목소리에 귀 기울여야 합니다.\n 감정의 흐름을 잊지 않고, 상황을 잘 이해하는 것이 중요합니다.", image: "cardimage/The High Priestess.jpeg" },
  { name: "The Empress", description: "풍요로움과 사랑이 당신을 감싸고 있습니다.\n 이 시기를 잘 활용하면 더 많은 기회를 얻을 수 있습니다.", image: "cardimage/The Empress.jpeg" },
  { name: "The Emperor", description: "권위와 통제를 통해 운명을 이끌어 나갈 수 있습니다.\n 자신의 힘을 믿는 것이 중요합니다.", image: "cardimage/The Emperor.jpeg" },
  { name: "The Hierophant", description: "전통적인 가치가 중요한 역할을 합니다.\n 안정성을 느끼며, 그 안에서 자신을 찾는 것이 좋습니다.", image: "cardimage/The Hierophant.jpeg" },
  { name: "The Lovers", description: "파트너와의 관계가 결정적인 순간을 맞이할 수 있습니다.\n 선택의 기로에 서게 될 것입니다.", image: "cardimage/The Lovers.jpeg" },
  { name: "The Chariot", description: "결단력과 의지를 가지고 목표를 향해 나아갈 수 있는 시기입니다.\n 당신의 길을 확고히 하세요.", image: "cardimage/The Chariot.jpeg" },
  { name: "Strength", description: "내면의 힘으로 어려움을 극복할 수 있습니다.\n 이 힘을 잃지 않는 것이 중요합니다.", image: "cardimage/Strength.jpeg" },
  { name: "The Hermit", description: "혼자만의 시간이 필요합니다.\n 이 시간을 통해 자신을 돌아보는 계기를 마련하세요.", image: "cardimage/The Hermit.jpeg" },
  { name: "The Fates", description: "운명이 당신을 이끌고 있습니다.\n 그 흐름에 따라가며, 기회를 잘 포착해야 합니다.", image: "cardimage/The Fates.jpeg" },
  { name: "Justice", description: "공정함이 당신의 운명을 결정짓습니다.\n 균형을 유지하는 것이 매우 중요합니다.", image: "cardimage/Justice.jpeg" },
  { name: "The Hanged Man", description: "잠시 멈추고 상황을 재조명해야 할 때입니다.\n 다른 시각에서 보는 것이 중요합니다.", image: "cardimage/The Hanged Man.jpeg" },
  { name: "Death", description: "끝과 새로운 시작이 함께하는 시기입니다.\n 변화를 받아들이고 준비하는 것이 좋습니다.", image: "cardimage/Death.jpeg" },
  { name: "Temperance", description: "균형과 조화가 필요합니다.\n 지나친 행동은 피하는 것이 좋습니다.", image: "cardimage/Temperance.jpeg" },
  { name: "The Devil", description: "유혹이 당신을 방해할 수 있습니다.\n 위험한 선택에 주의해야 할 때입니다.", image: "cardimage/The devil.jpeg" },
  { name: "The Lightning", description: "갑작스러운 사건이 발생할 수 있습니다.\n 이 변화에 적응하는 것이 필요합니다.", image: "cardimage/The Lighting.jpeg" },
  { name: "The Star", description: "희망의 빛이 보입니다.\n 긍정적인 생각이 당신을 이끌 것입니다.", image: "cardimage/The star.jpeg" },
  { name: "The Moon", description: "혼란스러운 감정에 휘둘릴 수 있습니다.\n 명확한 판단이 필요합니다.", image: "cardimage/The moon.jpeg" },
  { name: "The Sun", description: "행복한 시기가 다가오고 있습니다.\n 긍정적인 에너지를 받아들이는 것이 중요합니다.", image: "cardimage/The sun.jpeg" },
  { name: "Judgement", description: "자신의 과거를 돌아보고 새롭게 나아갈 수 있는 기회가 생깁니다.\n 과거의 경험을 잘 활용하세요.", image: "cardimage/Judgement.jpeg" },
  { name: "The World", description: "완성의 순간이 다가오고 있습니다.\n 이 기회를 놓치지 말고, 새로운 목표를 설정하세요.", image: "cardimage/The world.jpeg" },
  //마이너 아르카나
  { name: "Ace of Wands", description: "새로운 기회가 열리고, 변화가 시작되는 시기입니다.\n 자신의 열정을 믿고 나아가세요.", image: "cardimage/Ace of Wands.jpeg" },
    { name: "Two of Wands", description: "미래에 대한 중요한 선택을 해야 할 시점입니다.\n 여러 가능성을 고려하며 결정하세요.", image: "cardimage/Two of Wands.jpeg" },
    { name: "Three of Wands", description: "노력한 결과가 서서히 나타나기 시작합니다.\n 성취를 향해 더 나아가세요.", image: "cardimage/Three of Wands.jpeg" },
    { name: "Four of Wands", description: "안정과 성취가 이루어지는 시기입니다.\n 기쁜 소식과 축하할 일이 기다리고 있습니다.", image: "cardimage/Four of Wands.jpeg" },
    { name: "Five of Wands", description: "갈등과 경쟁이 있을 수 있습니다.\n 그럴 때일수록 침착하게 상황을 분석하세요.", image: "cardimage/Five of Wands.jpeg" },
    { name: "Six of Wands", description: "성공과 인정의 시기입니다.\n 자부심을 갖고, 주어진 기회를 잘 활용하세요.", image: "cardimage/Six of Wands.jpeg" },
    { name: "Seven of Wands", description: "위기와 도전이 있을 수 있습니다.\n 힘든 상황에서도 자신을 지키는 것이 중요합니다.", image: "cardimage/Seven of Wands.jpeg" },
    { name: "Eight of Wands", description: "급격한 변화와 진전이 있을 시기입니다.\n 빠르게 움직이고 결정하세요.", image: "cardimage/Eight of Wands.jpeg" },
    { name: "Nine of Wands", description: "지속적인 노력과 인내가 요구됩니다.\n 힘든 시간이 지나고 결실을 맺을 것입니다.", image: "cardimage/Nine of Wands.jpeg" },
    { name: "Ten of Wands", description: "과중한 책임과 부담이 느껴집니다.\n 잠시 멈추고 자신의 에너지를 재정비하세요.", image: "cardimage/Ten of Wands.jpeg" },
    { name: "Page of Wands", description: "새로운 시작과 모험의 시기입니다.\n 신선한 아이디어와 열정을 가지고 도전해 보세요.", image: "cardimage/Page of Wands.jpeg" },
    { name: "Knight of Wands", description: "빠르게 진행되는 상황 속에서 열정적으로 행동해야 합니다.\n 결단력 있는 태도가 필요합니다.", image: "cardimage/Knight of Wands.jpeg" },
    { name: "Queen of Wands", description: "자신감과 활력으로 운명을 이끌어가는 시기입니다.\n 주변 사람들에게 긍정적인 영향을 미칠 수 있습니다.", image: "cardimage/Queen of Wands.jpeg" },
    { name: "King of Wands", description: "리더십을 발휘하고 상황을 주도하는 시기입니다.\n 중요한 결정을 내리며 길을 열어가세요.", image: "cardimage/King of Wands.jpeg" },
    //컵
    { name: "Ace of Cups", description: "감정적으로 풍성한 시기입니다.\n 새로운 감정과 경험이 당신의 삶을 풍요롭게 할 것입니다.", image: "cardimage/Ace of Cups.jpeg" },
    { name: "Two of Cups", description: "조화와 균형이 중요한 시기입니다.\n 사람들과의 관계가 운명의 흐름을 결정지을 것입니다.", image: "cardimage/Two of Cups.jpeg" },
    { name: "Three of Cups", description: "축하와 기쁨이 가득한 시기로, 소중한 사람들과의 만남이 큰 힘이 됩니다.", image: "cardimage/Three of Cups.jpeg" },
    { name: "Four of Cups", description: "감정의 혼란 속에서 자신을 돌아보는 시기입니다.\n 내면의 성찰이 필요합니다.", image: "cardimage/Four of Cups.jpeg" },
    { name: "Five of Cups", description: "상실과 후회를 느끼는 시기지만, 남은 가능성에 집중하면 새로운 길이 열릴 것입니다.", image: "cardimage/Five of Cups.jpeg" },
    { name: "Six of Cups", description: "과거를 돌아보며 순수한 마음으로 나아가게 되는 시기입니다.\n 잊고 지낸 가치들이 다시 중요한 의미를 가질 것입니다.", image: "cardimage/Six of Cups.jpeg" },
    { name: "Seven of Cups", description: "많은 가능성 속에서 혼란을 느낄 수 있습니다.\n 현실적인 목표를 세우고 집중하세요.", image: "cardimage/Seven of Cups.jpeg" },
    { name: "Eight of Cups", description: "더 나은 미래를 위해 익숙한 환경을 떠나는 용기가 필요한 시기입니다.", image: "cardimage/Eight of Cups.jpeg" },
    { name: "Nine of Cups", description: "소원이 이루어지는 시기로, 바람직한 결과를 통해 행복감을 느끼게 됩니다.", image: "cardimage/Nine of Cups.jpeg" },
    { name: "Ten of Cups", description: "삶에 완벽한 조화와 만족감이 흐르는 시기입니다.\n 행복한 환경을 유지하세요.", image: "cardimage/Ten of Cups.jpeg" },
    { name: "Page of Cups", description: "감정적인 변화가 시작되는 시기입니다.\n 마음이 이끄는 대로 새로운 경험을 받아들여 보세요.", image: "cardimage/Page of Cups.jpeg" },
    { name: "Knight of Cups", description: "사랑과 로맨스가 강하게 흐르는 시기로, 감정을 따라가는 선택이 좋습니다.", image: "cardimage/Knight of Cups.jpeg" },
    { name: "Queen of Cups", description: "내면의 감정에 충실할 때 새로운 길이 열립니다.\n 직관을 신뢰하세요.", image: "cardimage/Queen of Cups.jpeg" },
    { name: "King of Cups", description: "감정의 균형과 성숙함을 통해 인생의 흐름을 주도하게 될 것입니다.", image: "cardimage/King of Cups.jpeg" },
    //검
    { name: "Ace of Swords", description: "진실을 마주하게 되며 새로운 길이 열립니다.\n 이성적으로 선택하면 좋은 결과를 얻을 수 있습니다.", image: "cardimage/Ace of Swords.jpeg" },
    { name: "Two of Swords", description: "중요한 결정을 내릴 시기입니다.\n 냉철하게 상황을 분석하고 마음의 균형을 유지하세요.", image: "cardimage/Two of Swords.jpeg" },
    { name: "Three of Swords", description: "시련의 시기이지만, 이를 통해 성장할 수 있습니다.\n 회복의 과정에 집중하세요.", image: "cardimage/Three of Swords.jpeg" },
    { name: "Four of Swords", description: "잠시 멈춰서 자신을 돌보아야 하는 시기입니다.\n 충분한 휴식이 다음 단계를 준비하는 데 도움이 됩니다.", image: "cardimage/Four of Swords.jpeg" },
    { name: "Five of Swords", description: "갈등과 패배감을 느낄 수 있는 시기입니다.\n 지혜롭게 문제를 해결하고 다음을 준비하세요.", image: "cardimage/Five of Swords.jpeg" },
    { name: "Six of Swords", description: "변화와 이동의 시기입니다.\n 과거를 뒤로하고 새로운 길로 나아가세요.", image: "cardimage/Six of Swords.jpeg" },
    { name: "Seven of Swords", description: "속임수나 혼란을 피하고 정직하게 문제를 해결해야 하는 시기입니다.", image: "cardimage/Seven of Swords.jpeg" },
    { name: "Eight of Swords", description: "억압과 혼란을 극복하는 시기입니다.\n 장애물을 분석하고 탈출구를 찾아보세요.", image: "cardimage/Eight of Swords.jpeg" },
    { name: "Nine of Swords", description: "불안과 두려움이 뒤따르는 시기입니다.\n 스스로를 격려하며 긍정적인 방향으로 나아가세요.", image: "cardimage/Nine of Swords.jpeg" },
    { name: "Ten of Swords", description: "끝과 함께 새로운 시작이 다가옵니다.\n 상황을 받아들이고 새롭게 출발할 준비를 하세요.", image: "cardimage/Ten of Swords.jpeg" },
    { name: "Page of Swords", description: "호기심과 관찰력을 발휘할 때입니다.\n 새로운 경험을 통해 배울 것이 많습니다.", image: "cardimage/Page of Swords.jpeg" },
    { name: "Knight of Swords", description: "신속하게 결정해야 하는 상황이 많아집니다.\n 판단력을 믿고 과감하게 움직이세요.", image: "cardimage/Knight of Swords.jpeg" },
    { name: "Queen of Swords", description: "지혜와 객관성이 요구되는 시기입니다.\n 이성적으로 문제를 해결해 나가세요.", image: "cardimage/Queen of Swords.jpeg" },
    { name: "King of Swords", description: "권위와 지혜가 요구되는 시기입니다.\n 명확한 비전을 가지고 리더십을 발휘하세요.", image: "cardimage/King of Swords.jpeg" },
    //펜타클
    { name: "Ace of Pentacles", description: "물질적 성장이 시작되는 시기입니다.\n 기회를 놓치지 않고 현실적으로 접근하세요.", image: "cardimage/Ace of Pentacles.jpeg" },
  { name: "Two of Pentacles", description: "상황에 맞춰 적응하고 균형을 유지해야 하는 시기입니다.\n 유연성을 발휘하세요.", image: "cardimage/Two of Pentacles.jpeg" },
  { name: "Three of Pentacles", description: "협력과 협동이 중요한 시기입니다.\n 함께 목표를 이루는 과정에서 성장할 수 있습니다.", image: "cardimage/Three of Pentacles.jpeg" },
  { name: "Four of Pentacles", description: "집착과 소유욕을 조절하는 시기입니다.\n 내면의 안정성을 추구하세요.", image: "cardimage/Four of Pentacles.jpeg" },
  { name: "Five of Pentacles", description: "시련이 있는 시기이지만, 이를 통해 강해질 수 있습니다.\n 외부의 도움을 받아보세요.", image: "cardimage/Five of Pentacles.jpeg" },
  { name: "Six of Pentacles", description: "나눔과 도움을 주고받으며 성장할 수 있는 시기입니다.\n 마음을 열고 베풀어 보세요.", image: "cardimage/Six of Pentacles.jpeg" },
  { name: "Seven of Pentacles", description: "인내와 성장이 필요한 시기입니다.\n 결과를 기다리며 꾸준히 노력하세요.", image: "cardimage/Seven of Pentacles.jpeg" },
  { name: "Eight of Pentacles", description: "노력과 성실이 중요한 시기입니다.\n 목표를 향해 꾸준히 나아가세요.", image: "cardimage/Eight of Pentacles.jpeg" },
  { name: "Nine of Pentacles", description: "성공과 자립을 이루는 시기입니다.\n 자신의 성과를 자랑스러워 하세요.", image: "cardimage/Nine of Pentacles.jpeg" },
  { name: "Ten of Pentacles", description: "안정과 유산을 누리는 시기입니다.\n 장기적인 성공을 축하하세요.", image: "cardimage/Ten of Pentacles.jpeg" },
  { name: "Page of Pentacles", description: "새로운 가능성을 실현할 때입니다.\n 계획을 세우고 도전하세요.", image: "cardimage/Page of Pentacles.jpeg" },
  { name: "Knight of Pentacles", description: "끈기와 성실함이 요구되는 시기입니다.\n 한 걸음씩 나아가세요.", image: "cardimage/Knight of Pentacles.jpeg" },
  { name: "Queen of Pentacles", description: "현실적이고 안정적인 접근이 필요한 시기입니다.\n 안정감을 가지고 상황에 임하세요.", image: "cardimage/Queen of Pentacles.jpeg" },
  { name: "King of Pentacles", description: "안정된 성공과 부를 성취하는 시기입니다.\n 장기적인 안목을 가지고 계획을 세우세요.", image: "cardimage/King of Pentacles.jpeg" }
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