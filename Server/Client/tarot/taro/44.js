const allCardValues = [
    'cardimage/The Fool.png', 
    'cardimage/The Magician.png',
    'cardimage/The High Priestess.png',
    'cardimage/The Empress.png', 
    'cardimage/The Emperor.png',
    'cardimage/The Hierophant.png', 
    'cardimage/The Lovers.png', 
    'cardimage/The Chariot.png',
    'cardimage/Strength.png', 
    'cardimage/The Hermit.png',
    'cardimage/The Fates.png', 
    'cardimage/Justice.png', 
    'cardimage/The Hanged Man.png', 
    'cardimage/Death.png', 
    'cardimage/Temperance.png', 
    'cardimage/The devil.png',
    'cardimage/The Lighting.png', 
    'cardimage/The star.png',
    'cardimage/The moon.png', 
    'cardimage/The sun.png', 
    'cardimage/Judgement.png',  
    'cardimage/The world.png', 
];

// 랜덤으로 카드 쌍을 선택하고 그 쌍을 두 번씩 복제하여 반환하는 함수
function getRandomPairs(array, numPairs) {
    // 주어진 배열을 무작위로 섞습니다.
    const shuffled = array.sort(() => 0.5 - Math.random());
    // 섞인 배열에서 numPairs 만큼의 카드를 선택합니다.
    const selectedPairs = shuffled.slice(0, numPairs);
    // 각 카드를 두 번씩 포함하는 배열을 반환합니다.
    return selectedPairs.flatMap(value => [value, value]);
}

// 게임에 사용할 랜덤 10쌍의 카드를 선택합니다.
const selectedCardValues = getRandomPairs(allCardValues, 10);

const cardDescriptions = {
    'cardimage/The Fool.png': 'The Fool: 새로운 시작과 무한한 가능성을 나타내며, 모험과 순수함을 상징합니다.',
    'cardimage/The Magician.png': 'The Magician: 자원과 능력을 활용해 목표를 성취할 수 있는 힘을 의미하며, 창조적인 에너지를 나타냅니다.',
    'cardimage/The High Priestess.png': 'The High Priestess: 직관과 내면의 지혜를 상징하며, 숨겨진 진실이나 신비로운 지식을 나타냅니다.',
    'cardimage/The Empress.png': 'The Empress: 풍요, 모성애, 자연의 아름다움을 나타내며, 생명과 성장의 에너지를 상징합니다.',
    'cardimage/The Emperor.png': 'The Emperor: 안정과 권력을 상징하며, 질서와 구조의 중요성을 나타냅니다.',
    'cardimage/The Hierophant.png': 'The Hierophant: 전통과 규범을 상징하며, 가르침과 신앙의 중요성을 나타냅니다.',
    'cardimage/The Lovers.png': 'The Lovers: 사랑과 관계의 조화를 나타내며, 선택의 순간을 상징합니다.',
    'cardimage/The Chariot.png': 'The Chariot: 의지와 결단력을 나타내며, 목표를 향한 강력한 추진력을 상징합니다.',
    'cardimage/Strength.png': 'Strength: 용기와 인내, 내면의 힘을 나타내며, 부드러운 힘을 강조합니다.',
    'cardimage/The Hermit.png': 'The Hermit: 내면의 탐구와 고독을 상징하며, 자기 반성과 지혜의 추구를 나타냅니다.',
    'cardimage/The Fates.png': 'Wheel of Fortune: 변화와 순환을 상징하며, 운명과 기회의 흐름을 나타냅니다.',
    'cardimage/Justice.png': 'Justice: 공정성과 균형을 나타내며, 결과에 대한 책임과 도덕적 판단을 강조합니다.',
    'cardimage/The Hanged Man.png': 'The Hanged Man: 희생과 새로운 관점을 나타내며, 인내와 전환의 필요성을 상징합니다.',
    'cardimage/Death.png': 'Death: 변화와 새로운 시작을 나타내며, 과거의 종료와 재생의 필요성을 강조합니다.',
    'cardimage/Temperance.png': 'Temperance: 균형과 조화를 나타내며, 절제와 인내의 중요성을 강조합니다.',
    'cardimage/The devil.png': 'The Devil: 속박과 유혹을 나타내며, 부정적인 패턴이나 중독을 상징합니다.',
    'cardimage/The Lighting.png': 'The Lighting: 갑작스러운 변화와 혼란을 나타내며, 기존 구조의 붕괴와 새로운 시작을 상징합니다.',
    'cardimage/The star.png': 'The Star: 희망과 영감을 나타내며, 치유와 미래에 대한 긍정적인 비전을 상징합니다.',
    'cardimage/The moon.png': 'The Moon: 불확실성과 직관을 나타내며, 숨겨진 진실과 내면의 갈등을 상징합니다.',
    'cardimage/The sun.png': 'The Sun: 성공과 행복을 나타내며, 밝음과 긍정적인 에너지를 상징합니다.',
    'cardimage/Judgement.png': 'Judgement: 재생과 결단을 나타내며, 과거의 행동에 대한 평가와 새로운 방향성을 강조합니다.',
    'cardimage/The world.png': 'The World: 완성과 통합을 나타내며, 목표 달성 후의 성취와 새로운 시작을 상징합니다.'
};

let cards = []; // 섞인 카드 목록
let firstCard = null; // 첫 번째로 선택된 카드
let secondCard = null; // 두 번째로 선택된 카드
let matchedCount = 0; // 맞춘 카드 쌍의 수
let coins = parseInt(localStorage.getItem('coins')) || 0; // 로컬 스토리지에서 가져온 코인 수

function setupGame() {
    cards = shuffle([...selectedCardValues]); // 선택된 카드로 셔플
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';

    cards.forEach(value => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = value;
        const img = document.createElement('img');
        img.src = 'cardimage/back.png'; // 카드 뒷면 이미지
        img.classList.add('card-image');
        card.appendChild(img);
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });

    document.getElementById('game-board').classList.remove('hidden');
    document.getElementById('matched-cards').innerHTML = ''; // 이전 설명 초기화
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function flipCard() {
    if (this.classList.contains('flipped') || secondCard) return;

    this.classList.add('flipped');
    const img = this.querySelector('.card-image');
    img.src = this.dataset.value; // 앞면 이미지로 변경

    if (!firstCard) {
        firstCard = this;
    } else {
        secondCard = this;
        checkForMatch();
    }
}

function checkForMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        addMatchedCardDescription(firstCard.dataset.value);
        matchedCount++; // 매칭된 카드 수 증가
        resetCards();
        checkForGameEnd(); // 게임 종료 조건 체크
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            const firstImg = firstCard.querySelector('.card-image');
            const secondImg = secondCard.querySelector('.card-image');
            firstImg.src = 'cardimage/back.png'; // 카드 뒷면 이미지로 되돌리기
            secondImg.src = 'cardimage/back.png'; // 카드 뒷면 이미지로 되돌리기
            resetCards();
        }, 700);
    }
}

function resetCards() {
    firstCard = null;
    secondCard = null;
}

function addMatchedCardDescription(cardImage) {
    const descriptionContainer = document.getElementById('matched-cards');
    
    // 설명이 5개를 초과하면 첫 번째 설명 제거
    if (descriptionContainer.children.length >= 5) {
        descriptionContainer.removeChild(descriptionContainer.lastChild);
    }

    const matchedCardDiv = document.createElement('div');
    matchedCardDiv.classList.add('matched-card');
    
    const img = document.createElement('img');
    img.src = cardImage;

    const descriptionText = document.createElement('span');
    descriptionText.textContent = cardDescriptions[cardImage];
    descriptionText.classList.add('text-color');

    matchedCardDiv.appendChild(img);
    matchedCardDiv.appendChild(descriptionText);
    
    // 기존 설명들 위에 새 설명 추가
    descriptionContainer.prepend(matchedCardDiv);
}

function checkForGameEnd() {
    // 모든 카드가 매칭되었는지 확인
    if (matchedCount === selectedCardValues.length / 2) { // 카드 쌍 수로 체크
        showReturnButton();
    }
}

function showReturnButton() {
    const returnButton = document.createElement('button');
    returnButton.textContent = '처음으로';
    returnButton.classList.add('return-button');

    returnButton.addEventListener('click', () => {
        coins += 1; // 코인 적립
        localStorage.setItem('coins', coins); // 로컬 스토리지에 코인 저장
        alert('게임이 끝났습니다! 코인이 적립됩니다.');
        window.location.href = 'mainP.html'; // mainP.html로 이동
    });

    document.body.appendChild(returnButton); // 게임 보드에 버튼 추가
}

// 여기서 setupGame()을 호출하여 게임을 자동으로 시작합니다.
setupGame();