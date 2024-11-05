// 22개의 타로 카드 데이터
const tarotCards = [
  { name: "The Fool", description: "새로운 시작의 기회가 다가오고 있습니다.\n 이 시점에서는 신중함이 필요하지만, 의외의 기회가 찾아올 수 있습니다.", image: "cardimage/The Fool.png" },
  { name: "The Magician", description: "주어진 자원을 잘 활용하여 원하는 방향으로 나아갈 수 있습니다.\n 이 시기에는 행운이 당신을 도와줄 것입니다.", image: "cardimage/The Magician.png" },
  { name: "The High Priestess", description: "내면의 목소리에 귀 기울여야 합니다.\n 감정의 흐름을 잊지 않고, 상황을 잘 이해하는 것이 중요합니다.", image: "cardimage/The High Priestess.png" },
  { name: "The Empress", description: "풍요로움과 사랑이 당신을 감싸고 있습니다.\n 이 시기를 잘 활용하면 더 많은 기회를 얻을 수 있습니다.", image: "cardimage/The Empress.png" },
  { name: "The Emperor", description: "권위와 통제를 통해 운명을 이끌어 나갈 수 있습니다.\n 자신의 힘을 믿는 것이 중요합니다.", image: "cardimage/The Emperor.png" },
  { name: "The Hierophant", description: "전통적인 가치가 중요한 역할을 합니다.\n 안정성을 느끼며, 그 안에서 자신을 찾는 것이 좋습니다.", image: "cardimage/The Hierophant.png" },
  { name: "The Lovers", description: "파트너와의 관계가 결정적인 순간을 맞이할 수 있습니다.\n 선택의 기로에 서게 될 것입니다.", image: "cardimage/The Lovers.png" },
  { name: "The Chariot", description: "결단력과 의지를 가지고 목표를 향해 나아갈 수 있는 시기입니다.\n 당신의 길을 확고히 하세요.", image: "cardimage/The Chariot.png" },
  { name: "Strength", description: "내면의 힘으로 어려움을 극복할 수 있습니다.\n 이 힘을 잃지 않는 것이 중요합니다.", image: "cardimage/Strength.png" },
  { name: "The Hermit", description: "혼자만의 시간이 필요합니다.\n 이 시간을 통해 자신을 돌아보는 계기를 마련하세요.", image: "cardimage/The Hermit.png" },
  { name: "The Fates", description: "운명이 당신을 이끌고 있습니다.\n 그 흐름에 따라가며, 기회를 잘 포착해야 합니다.", image: "cardimage/The Fates.png" },
  { name: "Justice", description: "공정함이 당신의 운명을 결정짓습니다.\n 균형을 유지하는 것이 매우 중요합니다.", image: "cardimage/Justice.png" },
  { name: "The Hanged Man", description: "잠시 멈추고 상황을 재조명해야 할 때입니다.\n 다른 시각에서 보는 것이 중요합니다.", image: "cardimage/The Hanged Man.png" },
  { name: "Death", description: "끝과 새로운 시작이 함께하는 시기입니다.\n 변화를 받아들이고 준비하는 것이 좋습니다.", image: "cardimage/Death.png" },
  { name: "Temperance", description: "균형과 조화가 필요합니다.\n 지나친 행동은 피하는 것이 좋습니다.", image: "cardimage/Temperance.png" },
  { name: "The Devil", description: "유혹이 당신을 방해할 수 있습니다.\n 위험한 선택에 주의해야 할 때입니다.", image: "cardimage/The devil.png" },
  { name: "The Lightning", description: "갑작스러운 사건이 발생할 수 있습니다.\n 이 변화에 적응하는 것이 필요합니다.", image: "cardimage/The Lighting.png" },
  { name: "The Star", description: "희망의 빛이 보입니다.\n 긍정적인 생각이 당신을 이끌 것입니다.", image: "cardimage/The star.png" },
  { name: "The Moon", description: "혼란스러운 감정에 휘둘릴 수 있습니다.\n 명확한 판단이 필요합니다.", image: "cardimage/The moon.png" },
  { name: "The Sun", description: "행복한 시기가 다가오고 있습니다.\n 긍정적인 에너지를 받아들이는 것이 중요합니다.", image: "cardimage/The sun.png" },
  { name: "Judgement", description: "자신의 과거를 돌아보고 새롭게 나아갈 수 있는 기회가 생깁니다.\n 과거의 경험을 잘 활용하세요.", image: "cardimage/Judgement.png" },
  { name: "The World", description: "완성의 순간이 다가오고 있습니다.\n 이 기회를 놓치지 말고, 새로운 목표를 설정하세요.", image: "cardimage/The world.png" }
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
