// 22개의 타로 카드 데이터
const tarotCards = [
    { name: "The Fool", description: "새로운 연애의 시작이 기다리고 있습니다. \n모험을 즐겨보세요.", image: "cardimage/The Fool.png" },
    { name: "The Magician", description: "당신의 매력을 발산할 때입니다. \n원하는 것을 이룰 수 있는 힘이 있습니다.", image: "cardimage/The Magician.png" },
    { name: "The High Priestess", description: "상대방의 마음을 잘 이해해야 합니다. \n직관을 믿어보세요.", image: "cardimage/The High Priestess.png" },
    { name: "The Empress", description: "사랑의 풍요로움을 느낄 수 있는 시점입니다. \n애정 표현이 중요합니다.", image: "cardimage/The Empress.png" },
    { name: "The Emperor", description: "관계에 대한 확고한 결단이 필요합니다. \n책임감을 가지고 행동하세요.", image: "cardimage/The Emperor.png" },
    { name: "The Hierophant", description: "전통적인 가치가 연애에 영향을 미칠 수 있습니다. \n서로의 신념을 존중하세요.", image: "cardimage/The Hierophant.png" },
    { name: "The Lovers", description: "파트너와의 깊은 유대감을 느끼고 있습니다. \n선택의 기로에 서 있습니다.", image: "cardimage/The Lovers.png" },
    { name: "The Chariot", description: "관계에서의 승리와 성취가 예상됩니다. \n의지를 다져보세요.", image: "cardimage/The Chariot.png" },
    { name: "Strength", description: "인내와 용기가 필요한 시기입니다. \n진정한 사랑을 위해 힘을 내세요.", image: "cardimage/Strength.png" },
    { name: "The Hermit", description: "혼자만의 시간을 가져보세요. \n내면의 목소리에 귀 기울이세요.", image: "cardimage/The Hermit.png" },
    { name: "The Fates", description: "운명의 변화가 찾아옵니다. \n새로운 인연이 다가올 수 있습니다.", image: "cardimage/The Fates.png" },
    { name: "Justice", description: "공정함과 균형이 중요합니다. \n상호 이해를 잊지 마세요.", image: "cardimage/Justice.png" },
    { name: "The Hanged Man", description: "사랑에 대한 새로운 관점을 가져야 합니다. 잠시 멈추고 생각해보세요.", image: "cardimage/The Hanged Man.png" },
    { name: "Death", description: "과거를 정리하고 새로운 시작을 맞이할 시간입니다. \n변화를 두려워하지 마세요.", image: "cardimage/Death.png" },
    { name: "Temperance", description: "조화로운 관계를 위해 조절이 필요합니다. \n서로의 마음을 조율해보세요.", image: "cardimage/Temperance.png" },
    { name: "The Devil", description: "유혹과 집착이 문제를 일으킬 수 있습니다. \n경계를 잊지 마세요.", image: "cardimage/The devil.png" },
    { name: "The Lighting", description: "예기치 않은 변화가 일어날 수 있습니다. \n이를 기회로 삼아보세요.", image: "cardimage/The Lighting.png" },
    { name: "The Star", description: "희망과 긍정적인 전망이 당신을 기다리고 있습니다. \n꿈을 이루어보세요.", image: "cardimage/The star.png" },
    { name: "The Moon", description: "착란과 환상이 있을 수 있습니다. \n상황을 냉정하게 바라보세요.", image: "cardimage/The moon.png" },
    { name: "The Sun", description: "행복한 순간이 찾아옵니다.\n긍정적인 에너지를 나누어보세요.", image: "cardimage/The sun.png" },
    { name: "Judgement", description: "과거의 선택이 현재에 영향을 미칩니다. \n깊이 있는 성찰이 필요합니다.", image: "cardimage/Judgement.png" },
    { name: "The World", description: "완성과 성취가 기다리고 있습니다. \n서로를 존중하며 나아가세요.", image: "cardimage/The world.png" }
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
