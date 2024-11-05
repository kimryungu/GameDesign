// 22개의 타로 카드 데이터
const tarotCards = [
  { name: "The Fool", description: "새로운 건강 여정을 시작하는 시점입니다.\n 그러나 경솔한 선택은 피하는 것이 좋습니다.", image: "cardimage/The Fool.png" },
  { name: "The Magician", description: "당신에게 건강을 지킬 힘이 있습니다.\n 하지만 자만심이 생기지 않도록 주의해야 합니다.", image: "cardimage/The Magician.png" },
  { name: "The High Priestess", description: "직관에 귀 기울이고 자신의 몸을 잘 살펴보세요.\n 정체성을 탐구하는 시간이 필요합니다.", image: "cardimage/The High Priestess.png" },
  { name: "The Empress", description: "사랑과 편안함을 느낄 수 있는 시기입니다.\n 하지만 자기 관리에 소홀하지 않도록 하세요.", image: "cardimage/The Empress.png" },
  { name: "The Emperor", description: "결단력이 건강 관리에서 중요합니다.\n 지나친 압박감은 오히려 해가 될 수 있습니다.", image: "cardimage/The Emperor.png" },
  { name: "The Hierophant", description: "전통적인 방법으로 건강을 지키는 것이 유익할 수 있습니다.\n 새로운 접근은 조심스럽게 고려해야 합니다.", image: "cardimage/The Hierophant.png" },
  { name: "The Lovers", description: "관계가 건강에 긍정적인 영향을 줄 수 있습니다.\n 하지만 갈등이 생기면 스트레스를 유발할 수 있으니 주의하세요.", image: "cardimage/The Lovers.png" },
  { name: "The Chariot", description: "강한 의지로 목표를 향해 나아갈 수 있는 시점입니다.\n 하지만 지나친 경쟁심은 피하는 것이 좋습니다.", image: "cardimage/The Chariot.png" },
  { name: "Strength", description: "내면의 힘으로 어려움을 극복할 수 있습니다.\n 그러나 무리한 목표는 피하는 것이 중요합니다.", image: "cardimage/Strength.png" },
  { name: "The Hermit", description: "혼자만의 시간을 통해 재충전이 필요합니다.\n 외로움에 빠지지 않도록 스스로를 챙기세요.", image: "cardimage/The Hermit.png" },
  { name: "The Fates", description: "운명적으로 건강한 길로 나아갈 수 있는 기회가 있습니다.\n 하지만 준비하지 않으면 불행이 찾아올 수 있습니다.", image: "cardimage/The Fates.png" },
  { name: "Justice", description: "균형 잡힌 생활이 중요합니다.\n 불공정한 상황에 노출되면 해로울 수 있습니다.", image: "cardimage/Justice.png" },
  { name: "The Hanged Man", description: "건강을 새로운 시각으로 바라보세요.\n 방치하면 문제가 커질 수 있으니 주의하세요.", image: "cardimage/The Hanged Man.png" },
  { name: "Death", description: "변화가 필요한 시점입니다.\n 그러나 그 변화에 저항하지 말고 수용하세요.", image: "cardimage/Death.png" },
  { name: "Temperance", description: "절제와 조화가 필요합니다.\n 지나친 절제는 오히려 건강에 해가 될 수 있습니다.", image: "cardimage/Temperance.png" },
  { name: "The Devil", description: "유혹에 쉽게 빠질 수 있습니다.\n 나쁜 습관을 고치려는 노력이 필요합니다.", image: "cardimage/The devil.png" },
  { name: "The Lighting", description: "갑작스러운 변화가 올 수 있습니다.\n 이 변화에 유연하게 대처하는 것이 중요합니다.", image: "cardimage/The Lighting.png" },
  { name: "The Star", description: "희망적인 징조가 보이고 있습니다.\n 그러나 지나치게 낙관적이지 않도록 주의하세요.", image: "cardimage/The star.png" },
  { name: "The Moon", description: "혼란스러운 상황에 놓일 수 있습니다.\n 감정적으로 불안정할 수 있으니 신중하게 행동하세요.", image: "cardimage/The moon.png" },
  { name: "The Sun", description: "행복과 긍정적인 에너지가 넘치는 시기입니다.\n 그러나 과도한 활동은 피하는 것이 좋습니다.", image: "cardimage/The sun.png" },
  { name: "Judgement", description: "자신의 선택이 건강에 큰 영향을 미칠 수 있습니다.\n 신중한 결정을 내리세요.", image: "cardimage/Judgement.png" },
  { name: "The World", description: "성취감과 안정이 다가오고 있습니다.\n 하지만 이 안정에 안주하지 않도록 유의하세요.", image: "cardimage/The world.png" }
];
  
  let selectedCards = [];
  let shuffledCards = [];
  
  document.getElementById('start-btn').addEventListener('click', () => {
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
  
    shuffledCards.forEach((card) => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
  
      const cardInner = document.createElement('div');
      cardInner.classList.add('card-inner');
  
      const cardFront = document.createElement('div');
      cardFront.classList.add('card-front');
  
      const cardBack = document.createElement('div');
      cardBack.classList.add('card-back');
  
      cardInner.appendChild(cardBack);
      cardInner.appendChild(cardFront);
      cardElement.appendChild(cardInner);
  
      cardElement.addEventListener('click', () => selectCard(card, cardInner, cardFront));
      tarotDeck.appendChild(cardElement);
    });
  }
  
  // 카드 선택
  function selectCard(card, cardInner, cardFront) {
    if (selectedCards.length < 3 && !selectedCards.includes(card)) {
      selectedCards.push(card);
      
      cardFront.style.backgroundImage = `url('${card.image}')`; // 카드 앞면 이미지로 설정
      cardInner.style.transform = 'rotateY(180deg)'; // 카드가 뒤집히는 애니메이션
  
      // 카드 3장이 선택되면 결과 표시
      if (selectedCards.length === 3) {
        displaySelectedCards();
      }
    }
  }
  
// 선택한 카드 결과 표시
function displaySelectedCards() {
  const tarotResult = document.getElementById('tarot-result');
  const selectedCardsContainer = document.getElementById('selected-cards');

  selectedCardsContainer.innerHTML = ''; // 이전 결과 초기화

  selectedCards.forEach(card => {
      const cardContainer = document.createElement('div');
      cardContainer.classList.add('selected-card-container'); // 카드와 설명을 담을 컨테이너 생성

      const cardElement = document.createElement('div');
      cardElement.classList.add('selected-card');
      cardElement.style.backgroundImage = `url('${card.image}')`; // 카드 이미지 설정

      // 카드 설명 추가
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = card.description; // 카드 설명 설정
      descriptionElement.classList.add('card-description'); // 설명 클래스 추가

      cardContainer.appendChild(cardElement); // 카드 요소 추가
      cardContainer.appendChild(descriptionElement); // 설명 요소 추가
      selectedCardsContainer.appendChild(cardContainer); // 카드와 설명을 함께 추가
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
  
  // 카드 뽑기 시작 버튼 클릭 시
  document.getElementById('start-btn').addEventListener('click', () => {
    shuffleCards(); // 덱을 랜덤으로 섞기
    createTarotDeck(); // 섞인 덱으로 카드 생성
    document.getElementById('tarot-result').style.display = 'none'; // 결과 화면 숨기기
  });
  
  // 초기화 버튼 클릭 시
  document.getElementById('reset-btn').addEventListener('click', resetGame);
