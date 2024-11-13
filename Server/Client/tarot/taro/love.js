// 22개의 타로 카드 데이터
const tarotCards = [
  { name: "The Fool", description: "새로운 연애의 시작이 기다리고 있습니다. \n모험을 즐겨보세요.", image: "cardimage/The Fool.jpeg" },
  { name: "The Magician", description: "당신의 매력을 발산할 때입니다. \n원하는 것을 이룰 수 있는 힘이 있습니다.", image: "cardimage/The Magician.jpeg" },
  { name: "The High Priestess", description: "상대방의 마음을 잘 이해해야 합니다. \n직관을 믿어보세요.", image: "cardimage/The High Priestess.jpeg" },
  { name: "The Empress", description: "사랑의 풍요로움을 느낄 수 있는 시점입니다. \n애정 표현이 중요합니다.", image: "cardimage/The Empress.jpeg" },
  { name: "The Emperor", description: "관계에 대한 확고한 결단이 필요합니다. \n책임감을 가지고 행동하세요.", image: "cardimage/The Emperor.jpeg" },
  { name: "The Hierophant", description: "전통적인 가치가 연애에 영향을 미칠 수 있습니다. \n서로의 신념을 존중하세요.", image: "cardimage/The Hierophant.jpeg" },
  { name: "The Lovers", description: "파트너와의 깊은 유대감을 느끼고 있습니다. \n선택의 기로에 서 있습니다.", image: "cardimage/The Lovers.jpeg" },
  { name: "The Chariot", description: "관계에서의 승리와 성취가 예상됩니다. \n의지를 다져보세요.", image: "cardimage/The Chariot.jpeg" },
  { name: "Strength", description: "인내와 용기가 필요한 시기입니다. \n진정한 사랑을 위해 힘을 내세요.", image: "cardimage/Strength.jpeg" },
  { name: "The Hermit", description: "혼자만의 시간을 가져보세요. \n내면의 목소리에 귀 기울이세요.", image: "cardimage/The Hermit.jpeg" },
  { name: "The Fates", description: "운명의 변화가 찾아옵니다. \n새로운 인연이 다가올 수 있습니다.", image: "cardimage/The Fates.jpeg" },
  { name: "Justice", description: "공정함과 균형이 중요합니다. \n상호 이해를 잊지 마세요.", image: "cardimage/Justice.jpeg" },
  { name: "The Hanged Man", description: "사랑에 대한 새로운 관점을 가져야 합니다. 잠시 멈추고 생각해보세요.", image: "cardimage/The Hanged Man.jpeg" },
  { name: "Death", description: "과거를 정리하고 새로운 시작을 맞이할 시간입니다. \n변화를 두려워하지 마세요.", image: "cardimage/Death.jpeg" },
  { name: "Temperance", description: "조화로운 관계를 위해 조절이 필요합니다. \n서로의 마음을 조율해보세요.", image: "cardimage/Temperance.jpeg" },
  { name: "The Devil", description: "유혹과 집착이 문제를 일으킬 수 있습니다. \n경계를 잊지 마세요.", image: "cardimage/The devil.jpeg" },
  { name: "The Lighting", description: "예기치 않은 변화가 일어날 수 있습니다. \n이를 기회로 삼아보세요.", image: "cardimage/The Lighting.jpeg" },
  { name: "The Star", description: "희망과 긍정적인 전망이 당신을 기다리고 있습니다. \n꿈을 이루어보세요.", image: "cardimage/The star.jpeg" },
  { name: "The Moon", description: "착란과 환상이 있을 수 있습니다. \n상황을 냉정하게 바라보세요.", image: "cardimage/The moon.jpeg" },
  { name: "The Sun", description: "행복한 순간이 찾아옵니다.\n긍정적인 에너지를 나누어보세요.", image: "cardimage/The sun.jpeg" },
  { name: "Judgement", description: "과거의 선택이 현재에 영향을 미칩니다. \n깊이 있는 성찰이 필요합니다.", image: "cardimage/Judgement.jpeg" },
  { name: "The World", description: "완성과 성취가 기다리고 있습니다. \n서로를 존중하며 나아가세요.", image: "cardimage/The world.jpeg" },
  //마이너 아르카나
  { name: "Ace of Wands", description: "새로운 만남이나 관계가 시작될 가능성이 높습니다.\n 마음이 가는 대로 표현해 보세요.", image: "cardimage/Ace of Wands.jpeg" },
  { name: "Two of Wands", description: "관계의 방향을 결정할 때입니다.\n 상대와의 미래를 진지하게 고민해 보세요.", image: "cardimage/Two of Wands.jpeg" },
  { name: "Three of Wands", description: "연애에서 새로운 가능성을 탐색하며 긍정적인 방향으로 나아갑니다.", image: "cardimage/Three of Wands.jpeg" },
  { name: "Four of Wands", description: "연인과 함께 기쁜 일을 축하할 순간이 다가옵니다.\n 더 깊은 관계로 발전할 수 있습니다.", image: "cardimage/Four of Wands.jpeg" },
  { name: "Five of Wands", description: "갈등과 오해가 생길 수 있습니다.\n 솔직한 대화로 문제를 풀어보세요.", image: "cardimage/Five of Wands.jpeg" },
  { name: "Six of Wands", description: "관계에서 긍정적인 변화를 느낄 수 있습니다.\n 상대방에게 인정받고 있습니다.", image: "cardimage/Six of Wands.jpeg" },
  { name: "Seven of Wands", description: "관계를 지키기 위해 노력해야 할 때입니다.\n 신뢰를 지키려는 마음이 필요합니다.", image: "cardimage/Seven of Wands.jpeg" },
  { name: "Eight of Wands", description: "관계가 빠르게 진전될 수 있습니다.\n 감정의 흐름을 믿고 따라가세요.", image: "cardimage/Eight of Wands.jpeg" },
  { name: "Nine of Wands", description: "관계에서 인내심을 시험하는 순간이 오고 있습니다.\n 끝까지 포기하지 마세요.", image: "cardimage/Nine of Wands.jpeg" },
  { name: "Ten of Wands", description: "관계에서 책임감이 무겁게 느껴질 수 있습니다.\n 마음의 여유를 찾으세요.", image: "cardimage/Ten of Wands.jpeg" },
  { name: "Page of Wands", description: "설레는 새로운 만남이나 모험적인 관계가 시작될 수 있습니다.\n 가벼운 마음으로 접근해 보세요.", image: "cardimage/Page of Wands.jpeg" },
  { name: "Knight of Wands", description: "열정적이고 적극적인 만남이 다가옵니다.\n 망설이지 말고 감정을 표현해 보세요.", image: "cardimage/Knight of Wands.jpeg" },
  { name: "Queen of Wands", description: "매력적이고 자신감 있는 모습으로 상대에게 깊은 인상을 남길 수 있습니다.\n 관계에 활기가 더해질 것입니다.", image: "cardimage/Queen of Wands.jpeg" },
  { name: "King of Wands", description: "주도적인 역할을 맡고 연인과의 관계에서 리더십을 발휘하게 됩니다.\n 성숙한 연애로 이어질 수 있습니다.", image: "cardimage/King of Wands.jpeg" },
  //컵
  { name: "Ace of Cups", description: "새로운 사랑이 시작될 가능성이 있습니다.\n 진실한 마음으로 다가가면 좋은 인연을 만날 수 있습니다.", image: "cardimage/Ace of Cups.jpeg" },
  { name: "Two of Cups", description: "관계가 조화롭고 상호 이해가 깊어집니다.\n 서로의 마음을 나눌 수 있는 소중한 시간이 될 것입니다.", image: "cardimage/Two of Cups.jpeg" },
  { name: "Three of Cups", description: "친구나 주변 사람들과 함께 즐거운 시간을 보내며 관계가 더욱 깊어집니다.", image: "cardimage/Three of Cups.jpeg" },
  { name: "Four of Cups", description: "현재 관계에 만족하지 못하거나 새로운 만남에 대해 무관심할 수 있습니다.", image: "cardimage/Four of Cups.jpeg" },
  { name: "Five of Cups", description: "아쉬움이나 실망이 있을 수 있습니다.\n 지나간 일에 너무 얽매이지 말고 앞으로 나아가세요.", image: "cardimage/Five of Cups.jpeg" },
  { name: "Six of Cups", description: "과거의 인연이 다시 나타날 수 있습니다.\n 추억 속에서 새로운 감정을 느낄 수 있습니다.", image: "cardimage/Six of Cups.jpeg" },
  { name: "Seven of Cups", description: "다양한 선택지로 혼란스러울 수 있습니다.\n 이상보다는 현실적인 감정을 선택하세요.", image: "cardimage/Seven of Cups.jpeg" },
  { name: "Eight of Cups", description: "현재 관계에서 벗어나 새로운 시작을 고민하게 됩니다.", image: "cardimage/Eight of Cups.jpeg" },
  { name: "Nine of Cups", description: "원하는 대로 관계가 발전하며, 감정적 만족을 느낄 수 있는 시기입니다.", image: "cardimage/Nine of Cups.jpeg" },
  { name: "Ten of Cups", description: "연애에서 최고의 만족을 느낄 수 있습니다.\n 안정적인 관계와 가족의 행복이 주어질 것입니다.", image: "cardimage/Ten of Cups.jpeg" },
  { name: "Page of Cups", description: "누군가에게서 감정 어린 소식이나 고백을 받을 수 있습니다.\n 새로운 사랑의 시작을 기대해보세요.", image: "cardimage/Page of Cups.jpeg" },
  { name: "Knight of Cups", description: "누군가에게서 사랑의 제안을 받거나 로맨틱한 상황이 펼쳐질 수 있습니다.", image: "cardimage/Knight of Cups.jpeg" },
  { name: "Queen of Cups", description: "상대방의 감정을 깊이 이해하고 배려하게 됩니다.\n 따뜻한 관계가 더욱 발전할 것입니다.", image: "cardimage/Queen of Cups.jpeg" },
  { name: "King of Cups", description: "성숙하고 안정된 사랑을 경험하게 됩니다.\n 서로의 감정을 존중하는 관계가 형성됩니다.", image: "cardimage/King of Cups.jpeg" },
  //검
  { name: "Ace of Swords", description: "관계에서 새로운 명확함이 찾아옵니다.\n 진실한 대화를 통해 서로의 마음을 더 깊이 이해할 수 있습니다.", image: "cardimage/Ace of Swords.jpeg" },
  { name: "Two of Swords", description: "관계의 갈림길에 서 있습니다.\n 신중한 결정을 내려야 할 때입니다.", image: "cardimage/Two of Swords.jpeg" },
  { name: "Three of Swords", description: "관계에서 아픔이나 갈등을 경험할 수 있습니다.\n 마음의 치유가 필요합니다.", image: "cardimage/Three of Swords.jpeg" },
  { name: "Four of Swords", description: "잠시 관계를 정리하고 혼자만의 시간을 가지는 것이 좋습니다.\n 감정 정리가 필요합니다.", image: "cardimage/Four of Swords.jpeg" },
  { name: "Five of Swords", description: "갈등이 발생할 수 있으니, 상대방과의 의견 충돌을 조심하세요.", image: "cardimage/Five of Swords.jpeg" },
  { name: "Six of Swords", description: "어려운 관계에서 벗어나 더 평화로운 방향으로 이동할 수 있습니다.", image: "cardimage/Six of Swords.jpeg" },
  { name: "Seven of Swords", description: "상대방의 진심에 대한 의심이 들 수 있습니다.\n 신중하게 상황을 살펴보세요.", image: "cardimage/Seven of Swords.jpeg" },
  { name: "Eight of Swords", description: "현재 관계에서 억압이나 답답함을 느낄 수 있습니다.\n 스스로 벗어날 방법을 모색하세요.", image: "cardimage/Eight of Swords.jpeg" },
  { name: "Nine of Swords", description: "불안과 걱정이 관계에 악영향을 미칠 수 있습니다.\n 긍정적인 생각을 유지하세요.", image: "cardimage/Nine of Swords.jpeg" },
  { name: "Ten of Swords", description: "관계에서 배신이나 아픔을 경험할 수 있습니다.\n 이제 새로운 시작을 준비해야 할 때입니다.", image: "cardimage/Ten of Swords.jpeg" },
  { name: "Page of Swords", description: "호기심이 많아지고, 상대방에 대해 탐구하고 싶은 마음이 커질 수 있습니다.", image: "cardimage/Page of Swords.jpeg" },
  { name: "Knight of Swords", description: "빠르게 관계를 진전시키려는 마음이 커질 수 있습니다.\n 신중하게 접근하세요.", image: "cardimage/Knight of Swords.jpeg" },
  { name: "Queen of Swords", description: "감정보다는 이성적인 접근이 필요합니다.\n 관계의 균형을 유지하는 것이 중요합니다.", image: "cardimage/Queen of Swords.jpeg" },
  { name: "King of Swords", description: "관계에서 권위가 강조될 수 있습니다.\n 서로의 의견을 존중하며 이끌어 나가세요.", image: "cardimage/King of Swords.jpeg" },
  //펜타클
  { name: "Ace of Pentacles", description: "새로운 만남이나 관계가 시작될 가능성이 높습니다.\n 현실적인 기반 위에 안정된 관계를 구축할 수 있는 시기입니다.", image: "cardimage/Ace of Pentacles.jpeg" },
  { name: "Two of Pentacles", description: "일과 사랑 사이의 균형을 맞추는 것이 중요합니다.\n 유연하게 대처할 필요가 있습니다.", image: "cardimage/Two of Pentacles.jpeg" },
  { name: "Three of Pentacles", description: "협력과 팀워크가 관계를 더욱 단단하게 만듭니다.\n 서로에게 배울 수 있는 시기입니다.", image: "cardimage/Three of Pentacles.jpeg" },
  { name: "Four of Pentacles", description: "상대방에 대한 소유욕이나 집착이 관계에 악영향을 줄 수 있으니 주의하세요.", image: "cardimage/Four of Pentacles.jpeg" },
  { name: "Five of Pentacles", description: "관계에서 어려움을 겪을 수 있지만, 서로에게 도움을 주며 극복할 수 있습니다.", image: "cardimage/Five of Pentacles.jpeg" },
  { name: "Six of Pentacles", description: "서로 나누고 돕는 관계로 발전할 수 있습니다.\n 상호 간의 도움과 지원이 중요합니다.", image: "cardimage/Six of Pentacles.jpeg" },
  { name: "Seven of Pentacles", description: "인내심을 가지고 관계가 발전하는 것을 기다려야 합니다.\n 서두르지 마세요.", image: "cardimage/Seven of Pentacles.jpeg" },
  { name: "Eight of Pentacles", description: "서로에 대한 노력과 성실함이 관계를 더욱 깊어지게 합니다.\n 꾸준함이 중요한 시기입니다.", image: "cardimage/Eight of Pentacles.jpeg" },
  { name: "Nine of Pentacles", description: "스스로의 자립과 안정감을 느끼는 관계를 형성할 수 있습니다.", image: "cardimage/Nine of Pentacles.jpeg" },
  { name: "Ten of Pentacles", description: "안정적이고 가족적인 관계를 경험할 수 있는 시기입니다.\n 깊은 유대감을 느낄 수 있습니다.", image: "cardimage/Ten of Pentacles.jpeg" },
  { name: "Page of Pentacles", description: "관계에 대한 새로운 가능성이 열립니다.\n 신선한 시도를 통해 새로운 인연을 만날 수 있습니다.", image: "cardimage/Page of Pentacles.jpeg" },
  { name: "Knight of Pentacles", description: "성실함과 꾸준함이 관계에 큰 도움을 줍니다.\n 서두르지 말고 차근차근 관계를 쌓아가세요.", image: "cardimage/Knight of Pentacles.jpeg" },
  { name: "Queen of Pentacles", description: "현실적이고 안정적인 관계가 형성될 수 있습니다.\n 서로의 필요를 잘 돌보는 시기입니다.", image: "cardimage/Queen of Pentacles.jpeg" },
  { name: "King of Pentacles", description: "신뢰와 안정이 깃든 관계를 구축할 수 있습니다.\n 서로에게 든든한 지원이 됩니다.", image: "cardimage/King of Pentacles.jpeg" }
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