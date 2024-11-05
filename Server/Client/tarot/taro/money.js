// 22개의 타로 카드 데이터
const tarotCards = [
    { name: "The Fool", description: "새로운 기회가 찾아오는 시점입니다.\n 과감히 도전해보세요.", image: "cardimage/The Fool.png" },
    { name: "The Magician", description: "당신의 능력을 최대한 활용해야 할 때입니다.\n 자원을 잘 관리하는 것이 중요합니다.", image: "cardimage/The Magician.png" },
    { name: "The High Priestess", description: "직관이 중요한 시점입니다.\n 투자 결정을 신중하게 하세요.", image: "cardimage/The High Priestess.png" },
    { name: "The Empress", description: "풍요로움이 다가오고 있습니다.\n 수입이 늘어날 가능성이 높습니다.", image: "cardimage/The Empress.png" },
    { name: "The Emperor", description: "재정적인 결정을 내릴 때 확고한 태도가 필요합니다.\n 계획을 세워보세요.", image: "cardimage/The Emperor.png" },
    { name: "The Hierophant", description: "전통적인 방법이 좋은 결과를 가져옵니다.\n 전문가의 조언을 참고하세요.", image: "cardimage/The Hierophant.png" },
    { name: "The Lovers", description: "합작이나 협력이 필요한 시점입니다.\n 팀워크가 매우 중요합니다.", image: "cardimage/The Lovers.png" },
    { name: "The Chariot", description: "결단력 있게 목표를 향해 나아가야 합니다.\n 성공이 가까워지고 있습니다.", image: "cardimage/The Chariot.png" },
    { name: "Strength", description: "재정적 어려움에 맞서는 용기가 필요합니다.\n 인내심을 잃지 마세요.", image: "cardimage/Strength.png" },
    { name: "The Hermit", description: "혼자만의 시간에 재정 계획을 세워보세요.\n 깊이 있는 성찰이 필요합니다.", image: "cardimage/The Hermit.png" },
    { name: "The Fates", description: "운명이 당신을 지켜보고 있습니다.\n 우연의 기회를 놓치지 마세요.", image: "cardimage/The Fates.png" },
    { name: "Justice", description: "공정한 거래가 중요한 시점입니다.\n 정직한 선택을 하세요.", image: "cardimage/Justice.png" },
    { name: "The Hanged Man", description: "잠시 멈추고 상황을 재검토할 필요가 있습니다.\n 새로운 시각이 필요합니다.", image: "cardimage/The Hanged Man.png" },
    { name: "Death", description: "과거의 재정 문제를 정리하고 새로운 시작을 준비하세요.\n 변화에 대한 준비가 필요합니다.", image: "cardimage/Death.png" },
    { name: "Temperance", description: "균형 잡힌 재정 관리가 필요합니다.\n 절제가 중요합니다.", image: "cardimage/Temperance.png" },
    { name: "The Devil", description: "소비에 대한 유혹에 주의하세요.\n 자제력이 필요할 때입니다.", image: "cardimage/The devil.png" },
    { name: "The Lighting", description: "갑작스러운 재정 변화가 예상됩니다.\n 충격적인 소식에 대비하세요.", image: "cardimage/The Lighting.png" },
    { name: "The Star", description: "긍정적인 재정 전망이 다가오고 있습니다.\n 희망을 가져보세요.", image: "cardimage/The star.png" },
    { name: "The Moon", description: "불확실성이 있지만 그 속에서 기회를 찾을 수 있습니다.\n 상황을 명확히 하세요.", image: "cardimage/The moon.png" },
    { name: "The Sun", description: "행복한 재정 상황이 예상됩니다.\n 즐거운 소식이 들어올 것입니다.", image: "cardimage/The sun.png" },
    { name: "Judgement", description: "과거의 결정이 현재의 재정에 영향을 미칠 수 있습니다.\n 반성과 배움이 필요합니다.", image: "cardimage/Judgement.png" },
    { name: "The World", description: "모든 것이 잘 돌아가고 있습니다.\n 성취감과 만족이 따를 것입니다.", image: "cardimage/The world.png" }
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
