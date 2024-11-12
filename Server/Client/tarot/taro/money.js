// 22개의 타로 카드 데이터
const tarotCards = [
  { name: "The Fool", description: "새로운 기회가 찾아오는 시점입니다.\n 과감히 도전해보세요.", image: "cardimage/The Fool.jpeg" },
  { name: "The Magician", description: "당신의 능력을 최대한 활용해야 할 때입니다.\n 자원을 잘 관리하는 것이 중요합니다.", image: "cardimage/The Magician.jpeg" },
  { name: "The High Priestess", description: "직관이 중요한 시점입니다.\n 투자 결정을 신중하게 하세요.", image: "cardimage/The High Priestess.jpeg" },
  { name: "The Empress", description: "풍요로움이 다가오고 있습니다.\n 수입이 늘어날 가능성이 높습니다.", image: "cardimage/The Empress.jpeg" },
  { name: "The Emperor", description: "재정적인 결정을 내릴 때 확고한 태도가 필요합니다.\n 계획을 세워보세요.", image: "cardimage/The Emperor.jpeg" },
  { name: "The Hierophant", description: "전통적인 방법이 좋은 결과를 가져옵니다.\n 전문가의 조언을 참고하세요.", image: "cardimage/The Hierophant.jpeg" },
  { name: "The Lovers", description: "합작이나 협력이 필요한 시점입니다.\n 팀워크가 매우 중요합니다.", image: "cardimage/The Lovers.jpeg" },
  { name: "The Chariot", description: "결단력 있게 목표를 향해 나아가야 합니다.\n 성공이 가까워지고 있습니다.", image: "cardimage/The Chariot.jpeg" },
  { name: "Strength", description: "재정적 어려움에 맞서는 용기가 필요합니다.\n 인내심을 잃지 마세요.", image: "cardimage/Strength.jpeg" },
  { name: "The Hermit", description: "혼자만의 시간에 재정 계획을 세워보세요.\n 깊이 있는 성찰이 필요합니다.", image: "cardimage/The Hermit.jpeg" },
  { name: "The Fates", description: "운명이 당신을 지켜보고 있습니다.\n 우연의 기회를 놓치지 마세요.", image: "cardimage/The Fates.jpeg" },
  { name: "Justice", description: "공정한 거래가 중요한 시점입니다.\n 정직한 선택을 하세요.", image: "cardimage/Justice.jpeg" },
  { name: "The Hanged Man", description: "잠시 멈추고 상황을 재검토할 필요가 있습니다.\n 새로운 시각이 필요합니다.", image: "cardimage/The Hanged Man.jpeg" },
  { name: "Death", description: "과거의 재정 문제를 정리하고 새로운 시작을 준비하세요.\n 변화에 대한 준비가 필요합니다.", image: "cardimage/Death.jpeg" },
  { name: "Temperance", description: "균형 잡힌 재정 관리가 필요합니다.\n 절제가 중요합니다.", image: "cardimage/Temperance.jpeg" },
  { name: "The Devil", description: "소비에 대한 유혹에 주의하세요.\n 자제력이 필요할 때입니다.", image: "cardimage/The devil.jpeg" },
  { name: "The Lighting", description: "갑작스러운 재정 변화가 예상됩니다.\n 충격적인 소식에 대비하세요.", image: "cardimage/The Lighting.jpeg" },
  { name: "The Star", description: "긍정적인 재정 전망이 다가오고 있습니다.\n 희망을 가져보세요.", image: "cardimage/The star.jpeg" },
  { name: "The Moon", description: "불확실성이 있지만 그 속에서 기회를 찾을 수 있습니다.\n 상황을 명확히 하세요.", image: "cardimage/The moon.jpeg" },
  { name: "The Sun", description: "행복한 재정 상황이 예상됩니다.\n 즐거운 소식이 들어올 것입니다.", image: "cardimage/The sun.jpeg" },
  { name: "Judgement", description: "과거의 결정이 현재의 재정에 영향을 미칠 수 있습니다.\n 반성과 배움이 필요합니다.", image: "cardimage/Judgement.jpeg" },
  { name: "The World", description: "모든 것이 잘 돌아가고 있습니다.\n 성취감과 만족이 따를 것입니다.", image: "cardimage/The world.jpeg" },
  //마이너 아르카나
  { name: "Ace of Wands", description: "새로운 수입원이 생기거나 투자 기회가 찾아옵니다.\n 창의적인 아이디어를 실현해 보세요.", image: "cardimage/Ace of Wands.jpeg" },
  { name: "Two of Wands", description: "재정적으로 중요한 선택의 시기입니다.\n 신중하게 계획을 세우세요.", image: "cardimage/Two of Wands.jpeg" },
  { name: "Three of Wands", description: "투자나 사업의 성과가 서서히 나타나고 있습니다.\n 지속적으로 노력을 기울이세요.", image: "cardimage/Three of Wands.jpeg" },
  { name: "Four of Wands", description: "재정적으로 안정된 시기로, 성취감을 느낄 수 있습니다.\n 여유를 즐기세요.", image: "cardimage/Four of Wands.jpeg" },
  { name: "Five of Wands", description: "재정적으로 경쟁이 치열한 시기입니다.\n 냉정하게 판단하며 조정하세요.", image: "cardimage/Five of Wands.jpeg" },
  { name: "Six of Wands", description: "경제적으로 성취감을 느끼며 주변으로부터 인정받을 수 있는 시기입니다.", image: "cardimage/Six of Wands.jpeg" },
  { name: "Seven of Wands", description: "재정적인 방어와 조정이 필요한 시기입니다.\n 신중하게 판단하세요.", image: "cardimage/Seven of Wands.jpeg" },
  { name: "Eight of Wands", description: "재정적으로 속도가 붙고 수익이 생기는 시기입니다.\n 기회를 놓치지 마세요.", image: "cardimage/Eight of Wands.jpeg" },
  { name: "Nine of Wands", description: "재정적으로 어려움이 있더라도 인내심을 가지고 버텨야 합니다.", image: "cardimage/Nine of Wands.jpeg" },
  { name: "Ten of Wands", description: "부담이 많은 시기로, 재정적 책임감이 커지고 있습니다.\n 전략적으로 대응하세요.", image: "cardimage/Ten of Wands.jpeg" },
  { name: "Page of Wands", description: "새로운 아이디어로 수익을 창출할 가능성이 있습니다.\n 창의적인 시도를 두려워하지 마세요.", image: "cardimage/Page of Wands.jpeg" },
  { name: "Knight of Wands", description: "재정적 목표를 위해 과감하게 도전할 때입니다.\n 속도를 내어 추진해 보세요.", image: "cardimage/Knight of Wands.jpeg" },
  { name: "Queen of Wands", description: "주변 사람들과의 협력이 재정적인 성공으로 이어질 수 있습니다.\n 자신감을 가지고 기회를 잡으세요.", image: "cardimage/Queen of Wands.jpeg" },
  { name: "King of Wands", description: "리더십을 발휘하여 큰 재정적 성취를 이룰 수 있습니다.\n 긴 호흡으로 목표를 추구하세요.", image: "cardimage/King of Wands.jpeg" },
  //컵
  { name: "Ace of Cups", description: "기쁨이 따르는 경제적 기회가 찾아옵니다.\n 마음을 열고 주위의 도움을 받아보세요.", image: "cardimage/Ace of Cups.jpeg" },
  { name: "Two of Cups", description: "협력과 조화가 필요한 시기로, 파트너십이 재정적으로 큰 도움이 됩니다.", image: "cardimage/Two of Cups.jpeg" },
  { name: "Three of Cups", description: "주변 사람들과의 협력 속에서 경제적 안정과 성취를 맛볼 수 있습니다.", image: "cardimage/Three of Cups.jpeg" },
  { name: "Four of Cups", description: "새로운 기회가 눈앞에 있지만 주의를 기울이지 않으면 놓칠 수 있습니다.", image: "cardimage/Four of Cups.jpeg" },
  { name: "Five of Cups", description: "경제적으로 손실을 겪을 수 있습니다.\n 실수를 통해 교훈을 얻고 재정 계획을 세우세요.", image: "cardimage/Five of Cups.jpeg" },
  { name: "Six of Cups", description: "과거의 경험을 바탕으로 재정적 성장을 이룰 수 있는 시기입니다.", image: "cardimage/Six of Cups.jpeg" },
  { name: "Seven of Cups", description: "많은 투자 기회가 있지만 환상에 속지 말고 실질적인 결정을 내리세요.", image: "cardimage/Seven of Cups.jpeg" },
  { name: "Eight of Cups", description: "불필요한 재정적 책임에서 벗어나 새로운 목표를 설정하는 시기입니다.", image: "cardimage/Eight of Cups.jpeg" },
  { name: "Nine of Cups", description: "경제적 목표를 이루어 만족스러운 성과를 거두게 됩니다.", image: "cardimage/Nine of Cups.jpeg" },
  { name: "Ten of Cups", description: "재정적으로 안정된 상태에 도달하며 풍요로운 삶을 즐길 수 있습니다.", image: "cardimage/Ten of Cups.jpeg" },
  { name: "Page of Cups", description: "감성적 직관에 따라 재정적 기회가 찾아옵니다.\n 소규모 투자나 지원이 도움이 될 것입니다.", image: "cardimage/Page of Cups.jpeg" },
  { name: "Knight of Cups", description: "감정적으로 만족을 줄 수 있는 재정적 제안이나 기회가 찾아올 것입니다.", image: "cardimage/Knight of Cups.jpeg" },
  { name: "Queen of Cups", description: "직관이 재정적 판단에 큰 도움이 됩니다.\n 차분하게 재정을 관리하세요.", image: "cardimage/Queen of Cups.jpeg" },
  { name: "King of Cups", description: "감정적으로 안정된 상태에서 재정적 결정을 내릴 수 있습니다.\n 차분한 관리가 중요합니다.", image: "cardimage/King of Cups.jpeg" },
  //검
  { name: "Ace of Swords", description: "재정 상태가 명확해지며, 현명한 결정을 내릴 수 있는 시기입니다.", image: "cardimage/Ace of Swords.jpeg" },
  { name: "Two of Swords", description: "재정적으로 균형을 유지하는 것이 중요합니다.\n 신중하게 계획하세요.", image: "cardimage/Two of Swords.jpeg" },
  { name: "Three of Swords", description: "손실이나 불쾌한 일이 있을 수 있으니, 재정 관리를 신중히 하세요.", image: "cardimage/Three of Swords.jpeg" },
  { name: "Four of Swords", description: "무리한 지출을 줄이고 재정적으로 휴식을 취하세요.\n 안정된 관리를 우선하세요.", image: "cardimage/Four of Swords.jpeg" },
  { name: "Five of Swords", description: "손실이나 재정적 갈등이 있을 수 있습니다.\n 감정적으로 대응하지 말고 이성적으로 접근하세요.", image: "cardimage/Five of Swords.jpeg" },
  { name: "Six of Swords", description: "재정 상태가 점차 안정되어 가는 시기로, 새 출발을 준비할 수 있습니다.", image: "cardimage/Six of Swords.jpeg" },
  { name: "Seven of Swords", description: "사기나 기만에 주의하세요.\n 재정적 결정에 있어 조심할 필요가 있습니다.", image: "cardimage/Seven of Swords.jpeg" },
  { name: "Eight of Swords", description: "재정적인 문제에 갇혀 있는 느낌을 받을 수 있습니다.\n 객관적으로 해결 방법을 찾으세요.", image: "cardimage/Eight of Swords.jpeg" },
  { name: "Nine of Swords", description: "경제적 불안이 커질 수 있습니다.\n 침착하게 문제를 파악하고 대처 방안을 마련하세요.", image: "cardimage/Nine of Swords.jpeg" },
  { name: "Ten of Swords", description: "큰 손실이나 실패를 겪을 수 있는 시기입니다.\n 교훈을 얻고 재정 계획을 다시 세우세요.", image: "cardimage/Ten of Swords.jpeg" },
  { name: "Page of Swords", description: "작은 재정적 기회를 포착하게 됩니다.\n 정보와 아이디어가 재정적으로 도움이 됩니다.", image: "cardimage/Page of Swords.jpeg" },
  { name: "Knight of Swords", description: "재정적 결정을 빠르게 내려야 할 필요가 있습니다.\n 과감한 선택이 유리할 수 있습니다.", image: "cardimage/Knight of Swords.jpeg" },
  { name: "Queen of Swords", description: "현명하고 객관적인 재정 관리가 필요합니다.\n 차분하게 판단하세요.", image: "cardimage/Queen of Swords.jpeg" },
  { name: "King of Swords", description: "재정 상황에서 권위와 지적 통찰력이 필요합니다.\n 결정을 내릴 때 깊이 생각하세요.", image: "cardimage/King of Swords.jpeg" },
  //펜타클
  { name: "Ace of Pentacles", description: "물질적 기회가 생기며, 재정적으로 좋은 시작을 할 수 있습니다.", image: "cardimage/Ace of Pentacles.jpeg" },
  { name: "Two of Pentacles", description: "재정적 균형을 유지하며 여러 상황에 적응해야 합니다.\n 신중한 관리가 필요합니다.", image: "cardimage/Two of Pentacles.jpeg" },
  { name: "Three of Pentacles", description: "다른 사람과 협력하면서 재정적 성과를 얻을 수 있습니다.\n 팀워크를 중시하세요.", image: "cardimage/Three of Pentacles.jpeg" },
  { name: "Four of Pentacles", description: "재정적으로 보수적인 접근이 필요합니다.\n 자산을 지키고 안정성을 추구하는 것이 좋습니다.", image: "cardimage/Four of Pentacles.jpeg" },
  { name: "Five of Pentacles", description: "재정적 어려움이 있을 수 있으니, 절약하고 신중하게 대처하세요.", image: "cardimage/Five of Pentacles.jpeg" },
  { name: "Six of Pentacles", description: "주변 사람들과 나누며 긍정적인 재정 흐름을 만들 수 있습니다.", image: "cardimage/Six of Pentacles.jpeg" },
  { name: "Seven of Pentacles", description: "재정적인 성장을 위해 꾸준히 기다리며 인내해야 할 시기입니다.", image: "cardimage/Seven of Pentacles.jpeg" },
  { name: "Eight of Pentacles", description: "꾸준한 노력과 성실한 자세가 재정적 성과로 이어집니다.\n 열심히 일하세요.", image: "cardimage/Eight of Pentacles.jpeg" },
  { name: "Nine of Pentacles", description: "재정적으로 성공과 자립을 이룰 수 있는 시기입니다.\n 성과를 즐기세요.", image: "cardimage/Nine of Pentacles.jpeg" },
  { name: "Ten of Pentacles", description: "재정적으로 안정되고, 장기적인 성공을 얻을 수 있습니다.", image: "cardimage/Ten of Pentacles.jpeg" },
  { name: "Page of Pentacles", description: "새로운 재정적 기회가 찾아옵니다.\n 작은 계획부터 시작해 보세요.", image: "cardimage/Page of Pentacles.jpeg" },
  { name: "Knight of Pentacles", description: "성실한 자세로 재정을 꾸준히 관리할 때, 안정적인 재정 상태를 유지할 수 있습니다.", image: "cardimage/Knight of Pentacles.jpeg" },
  { name: "Queen of Pentacles", description: "실용적인 관점에서 재정을 관리해 재정적 안정을 얻을 수 있습니다.", image: "cardimage/Queen of Pentacles.jpeg" },
  { name: "King of Pentacles", description: "재정적으로 큰 성과를 이루고 안정된 부를 누릴 수 있는 시기입니다.", image: "cardimage/King of Pentacles.jpeg" }
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