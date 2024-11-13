const allCardValues = [
    'cardimage/The Fool.jpeg', 
    'cardimage/The Magician.jpeg',
    'cardimage/The High Priestess.jpeg',
    'cardimage/The Empress.jpeg', 
    'cardimage/The Emperor.jpeg',
    'cardimage/The Hierophant.jpeg', 
    'cardimage/The Lovers.jpeg', 
    'cardimage/The Chariot.jpeg',
    'cardimage/Strength.jpeg',  
    'cardimage/The Hermit.jpeg',
    'cardimage/The Fates.jpeg', 
    'cardimage/Justice.jpeg', 
    'cardimage/The Hanged Man.jpeg', 
    'cardimage/Death.jpeg', 
    'cardimage/Temperance.jpeg', 
    'cardimage/The devil.jpeg',
    'cardimage/The Lighting.jpeg', 
    'cardimage/The star.jpeg',
    'cardimage/The moon.jpeg', 
    'cardimage/The sun.jpeg', 
    'cardimage/Judgement.jpeg',  
    'cardimage/The world.jpeg',
    //마이너 아르카나
    "cardimage/Ace of Wands.jpeg",
    "cardimage/Two of Wands.jpeg",
    "cardimage/Three of Wands.jpeg",
    "cardimage/Four of Wands.jpeg",
    "cardimage/Five of Wands.jpeg",
    "cardimage/Six of Wands.jpeg",
    "cardimage/Seven of Wands.jpeg",
    "cardimage/Eight of Wands.jpeg",
    "cardimage/Nine of Wands.jpeg",
    "cardimage/Ten of Wands.jpeg",
    "cardimage/Page of Wands.jpeg",
    "cardimage/Knight of Wands.jpeg",
    "cardimage/Queen of Wands.jpeg",
    "cardimage/King of Wands.jpeg",
    //컵
    "cardimage/Ace of Cups.jpeg",
    "cardimage/Two of Cups.jpeg",
    "cardimage/Three of Cups.jpeg",
    "cardimage/Four of Cups.jpeg",
    "cardimage/Five of Cups.jpeg",
    "cardimage/Six of Cups.jpeg",
    "cardimage/Seven of Cups.jpeg",
    "cardimage/Eight of Cups.jpeg",
    "cardimage/Nine of Cups.jpeg",
    "cardimage/Ten of Cups.jpeg",
    "cardimage/Page of Cups.jpeg",
    "cardimage/Knight of Cups.jpeg",
    "cardimage/Queen of Cups.jpeg",
    "cardimage/King of Cups.jpeg",
    //검
    "cardimage/Ace of Swords.jpeg",
    "cardimage/Two of Swords.jpeg",
    "cardimage/Three of Swords.jpeg",
    "cardimage/Four of Swords.jpeg",
    "cardimage/Five of Swords.jpeg",
    "cardimage/Six of Swords.jpeg",
    "cardimage/Seven of Swords.jpeg",
    "cardimage/Eight of Swords.jpeg",
    "cardimage/Nine of Swords.jpeg",
    "cardimage/Ten of Swords.jpeg",
    "cardimage/Page of Swords.jpeg",
    "cardimage/Knight of Swords.jpeg",
    "cardimage/Queen of Swords.jpeg",
    "cardimage/King of Swords.jpeg",
    //펜타클
    "cardimage/Ace of Pentacles.jpeg",
    "cardimage/Two of Pentacles.jpeg",
    "cardimage/Three of Pentacles.jpeg",
    "cardimage/Four of Pentacles.jpeg",
    "cardimage/Five of Pentacles.jpeg",
    "cardimage/Six of Pentacles.jpeg",
    "cardimage/Seven of Pentacles.jpeg",
    "cardimage/Eight of Pentacles.jpeg",
    "cardimage/Nine of Pentacles.jpeg",
    "cardimage/Ten of Pentacles.jpeg",
    "cardimage/Page of Pentacles.jpeg",
    "cardimage/Knight of Pentacles.jpeg",
    "cardimage/Queen of Pentacles.jpeg"
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
    'cardimage/The Fool.jpeg': 'The Fool: 새로운 시작과 무한한 가능성을 나타내며, 모험과 순수함을 상징합니다.',
    'cardimage/The Magician.jpeg': 'The Magician: 자원과 능력을 활용해 목표를 성취할 수 있는 힘을 의미하며, 창조적인 에너지를 나타냅니다.',
    'cardimage/The High Priestess.jpeg': 'The High Priestess: 직관과 내면의 지혜를 상징하며, 숨겨진 진실이나 신비로운 지식을 나타냅니다.',
    'cardimage/The Empress.jpeg': 'The Empress: 풍요, 모성애, 자연의 아름다움을 나타내며, 생명과 성장의 에너지를 상징합니다.',
    'cardimage/The Emperor.jpeg': 'The Emperor: 안정과 권력을 상징하며, 질서와 구조의 중요성을 나타냅니다.',
    'cardimage/The Hierophant.jpeg': 'The Hierophant: 전통과 규범을 상징하며, 가르침과 신앙의 중요성을 나타냅니다.',
    'cardimage/The Lovers.jpeg': 'The Lovers: 사랑과 관계의 조화를 나타내며, 선택의 순간을 상징합니다.',
    'cardimage/The Chariot.jpeg': 'The Chariot: 의지와 결단력을 나타내며, 목표를 향한 강력한 추진력을 상징합니다.',
    'cardimage/Strength.jpeg': 'Strength: 용기와 인내, 내면의 힘을 나타내며, 부드러운 힘을 강조합니다.',
    'cardimage/The Hermit.jpeg': 'The Hermit: 내면의 탐구와 고독을 상징하며, 자기 반성과 지혜의 추구를 나타냅니다.',
    'cardimage/The Fates.jpeg': 'Wheel of Fortune: 변화와 순환을 상징하며, 운명과 기회의 흐름을 나타냅니다.',
    'cardimage/Justice.jpeg': 'Justice: 공정성과 균형을 나타내며, 결과에 대한 책임과 도덕적 판단을 강조합니다.',
    'cardimage/The Hanged Man.jpeg': 'The Hanged Man: 희생과 새로운 관점을 나타내며, 인내와 전환의 필요성을 상징합니다.',
    'cardimage/Death.jpeg': 'Death: 변화와 새로운 시작을 나타내며, 과거의 종료와 재생의 필요성을 강조합니다.',
    'cardimage/Temperance.jpeg': 'Temperance: 균형과 조화를 나타내며, 절제와 인내의 중요성을 강조합니다.',
    'cardimage/The devil.jpeg': 'The Devil: 속박과 유혹을 나타내며, 부정적인 패턴이나 중독을 상징합니다.',
    'cardimage/The Lighting.jpeg': 'The Lighting: 갑작스러운 변화와 혼란을 나타내며, 기존 구조의 붕괴와 새로운 시작을 상징합니다.',
    'cardimage/The star.jpeg': 'The Star: 희망과 영감을 나타내며, 치유와 미래에 대한 긍정적인 비전을 상징합니다.',
    'cardimage/The moon.jpeg': 'The Moon: 불확실성과 직관을 나타내며, 숨겨진 진실과 내면의 갈등을 상징합니다.',
    'cardimage/The sun.jpeg': 'The Sun: 성공과 행복을 나타내며, 밝음과 긍정적인 에너지를 상징합니다.',
    'cardimage/Judgement.jpeg': 'Judgement: 재생과 결단을 나타내며, 과거의 행동에 대한 평가와 새로운 방향성을 강조합니다.',
    'cardimage/The world.jpeg': 'The World: 완성과 통합을 나타내며, 목표 달성 후의 성취와 새로운 시작을 상징합니다.',
    //마이너 아르카나
    'cardimage/Ace of Wands.jpeg': '새로운 기회가 열리고, 변화가 시작되는 시기입니다.\n 자신의 열정을 믿고 나아가세요.',
    'cardimage/Two of Wands.jpeg': '미래에 대한 중요한 선택을 해야 할 시점입니다.\n 여러 가능성을 고려하며 결정하세요.',
    'cardimage/Three of Wands.jpeg': '노력한 결과가 서서히 나타나기 시작합니다.\n 성취를 향해 더 나아가세요.',
    'cardimage/Four of Wands.jpeg': '안정과 성취가 이루어지는 시기입니다.\n 기쁜 소식과 축하할 일이 기다리고 있습니다.',
    'cardimage/Five of Wands.jpeg': '갈등과 경쟁이 있을 수 있습니다.\n 그럴 때일수록 침착하게 상황을 분석하세요.',
    'cardimage/Six of Wands.jpeg': '성공과 인정의 시기입니다.\n 자부심을 갖고, 주어진 기회를 잘 활용하세요.',
    'cardimage/Seven of Wands.jpeg': '위기와 도전이 있을 수 있습니다.\n 힘든 상황에서도 자신을 지키는 것이 중요합니다.',
    'cardimage/Eight of Wands.jpeg': '급격한 변화와 진전이 있을 시기입니다.\n 빠르게 움직이고 결정하세요.',
    'cardimage/Nine of Wands.jpeg': '지속적인 노력과 인내가 요구됩니다.\n 힘든 시간이 지나고 결실을 맺을 것입니다.',
    'cardimage/Ten of Wands.jpeg': '과중한 책임과 부담이 느껴집니다.\n 잠시 멈추고 자신의 에너지를 재정비하세요.',
    'cardimage/Page of Wands.jpeg': '새로운 시작과 모험의 시기입니다.\n 신선한 아이디어와 열정을 가지고 도전해 보세요.',
    'cardimage/Knight of Wands.jpeg': '빠르게 진행되는 상황 속에서 열정적으로 행동해야 합니다.\n 결단력 있는 태도가 필요합니다.',
    'cardimage/Queen of Wands.jpeg': '자신감과 활력으로 운명을 이끌어가는 시기입니다.\n 주변 사람들에게 긍정적인 영향을 미칠 수 있습니다.',
    'cardimage/King of Wands.jpeg': '리더십을 발휘하고 상황을 주도하는 시기입니다.\n 중요한 결정을 내리며 길을 열어가세요.',
    //컵
    'cardimage/Ace of Cups.jpeg': '감정적으로 풍성한 시기입니다.\n 새로운 감정과 경험이 당신의 삶을 풍요롭게 할 것입니다.',
    'cardimage/Two of Cups.jpeg': '조화와 균형이 중요한 시기입니다.\n 사람들과의 관계가 운명의 흐름을 결정지을 것입니다.',
    'cardimage/Three of Cups.jpeg': '축하와 기쁨이 가득한 시기로, 소중한 사람들과의 만남이 큰 힘이 됩니다.',
    'cardimage/Four of Cups.jpeg': '감정의 혼란 속에서 자신을 돌아보는 시기입니다.\n 내면의 성찰이 필요합니다.',
    'cardimage/Five of Cups.jpeg': '상실과 후회를 느끼는 시기지만, 남은 가능성에 집중하면 새로운 길이 열릴 것입니다.',
    'cardimage/Six of Cups.jpeg': '과거를 돌아보며 순수한 마음으로 나아가게 되는 시기입니다.\n 잊고 지낸 가치들이 다시 중요한 의미를 가질 것입니다.',
    'cardimage/Seven of Cups.jpeg': '많은 가능성 속에서 혼란을 느낄 수 있습니다.\n 현실적인 목표를 세우고 집중하세요.',
    'cardimage/Eight of Cups.jpeg': '더 나은 미래를 위해 익숙한 환경을 떠나는 용기가 필요한 시기입니다.',
    'cardimage/Nine of Cups.jpeg': '소원이 이루어지는 시기로, 바람직한 결과를 통해 행복감을 느끼게 됩니다.',
    'cardimage/Ten of Cups.jpeg': '삶에 완벽한 조화와 만족감이 흐르는 시기입니다.\n 행복한 환경을 유지하세요.',
    'cardimage/Page of Cups.jpeg': '감정적인 변화가 시작되는 시기입니다.\n 마음이 이끄는 대로 새로운 경험을 받아들여 보세요.',
    'cardimage/Knight of Cups.jpeg': '사랑과 로맨스가 강하게 흐르는 시기로, 감정을 따라가는 선택이 좋습니다.',
    'cardimage/Queen of Cups.jpeg': '내면의 감정에 충실할 때 새로운 길이 열립니다.\n 직관을 신뢰하세요.',
    'cardimage/King of Cups.jpeg': '감정의 균형과 성숙함을 통해 인생의 흐름을 주도하게 될 것입니다.',
    //검
    'cardimage/Ace of Swords.jpeg': '진실을 마주하게 되며 새로운 길이 열립니다.\n 이성적으로 선택하면 좋은 결과를 얻을 수 있습니다.',
    'cardimage/Two of Swords.jpeg': '중요한 결정을 내릴 시기입니다.\n 냉철하게 상황을 분석하고 마음의 균형을 유지하세요.',
    'cardimage/Three of Swords.jpeg': '시련의 시기이지만, 이를 통해 성장할 수 있습니다.\n 회복의 과정에 집중하세요.',
    'cardimage/Four of Swords.jpeg': '잠시 멈춰서 자신을 돌보아야 하는 시기입니다.\n 충분한 휴식이 다음 단계를 준비하는 데 도움이 됩니다.',
    'cardimage/Five of Swords.jpeg': '갈등과 패배감을 느낄 수 있는 시기입니다.\n 지혜롭게 문제를 해결하고 다음을 준비하세요.',
    'cardimage/Six of Swords.jpeg': '변화와 이동의 시기입니다.\n 과거를 뒤로하고 새로운 길로 나아가세요.',
    'cardimage/Seven of Swords.jpeg': '속임수나 혼란을 피하고 정직하게 문제를 해결해야 하는 시기입니다.',
    'cardimage/Eight of Swords.jpeg': '억압과 혼란을 극복하는 시기입니다.\n 장애물을 분석하고 탈출구를 찾아보세요.',
    'cardimage/Nine of Swords.jpeg': '불안과 두려움이 뒤따르는 시기입니다.\n 스스로를 격려하며 긍정적인 방향으로 나아가세요.',
    'cardimage/Ten of Swords.jpeg': '끝과 함께 새로운 시작이 다가옵니다.\n 상황을 받아들이고 새롭게 출발할 준비를 하세요.',
    'cardimage/Page of Swords.jpeg': '호기심과 관찰력을 발휘할 때입니다.\n 새로운 경험을 통해 배울 것이 많습니다.',
    'cardimage/Knight of Swords.jpeg': '신속하게 결정해야 하는 상황이 많아집니다.\n 판단력을 믿고 과감하게 움직이세요.',
    'cardimage/Queen of Swords.jpeg': '지혜와 객관성이 요구되는 시기입니다.\n 이성적으로 문제를 해결해 나가세요.',
    'cardimage/King of Swords.jpeg': '권위와 지혜가 요구되는 시기입니다.\n 명확한 비전을 가지고 리더십을 발휘하세요.',
    //펜타클
    'cardimage/Ace of Pentacles.jpeg': '물질적 성장이 시작되는 시기입니다.\n 기회를 놓치지 않고 현실적으로 접근하세요.',
    'cardimage/Two of Pentacles.jpeg': '상황에 맞춰 적응하고 균형을 유지해야 하는 시기입니다.\n 유연성을 발휘하세요.',
    'cardimage/Three of Pentacles.jpeg': '협력과 협동이 중요한 시기입니다.\n 함께 목표를 이루는 과정에서 성장할 수 있습니다.',
    'cardimage/Four of Pentacles.jpeg': '집착과 소유욕을 조절하는 시기입니다.\n 내면의 안정성을 추구하세요.',
    'cardimage/Five of Pentacles.jpeg': '시련이 있는 시기이지만, 이를 통해 강해질 수 있습니다.\n 외부의 도움을 받아보세요.',
    'cardimage/Six of Pentacles.jpeg': '나눔과 도움을 주고받으며 성장할 수 있는 시기입니다.\n 마음을 열고 베풀어 보세요.',
    'cardimage/Seven of Pentacles.jpeg': '인내와 성장이 필요한 시기입니다.\n 결과를 기다리며 꾸준히 노력하세요.',
    'cardimage/Eight of Pentacles.jpeg': '노력과 성실이 중요한 시기입니다.\n 목표를 향해 꾸준히 나아가세요.',
    'cardimage/Nine of Pentacles.jpeg': '성공과 자립을 이루는 시기입니다.\n 자신의 성과를 자랑스러워 하세요.',
    'cardimage/Ten of Pentacles.jpeg': '안정과 유산을 누리는 시기입니다.\n 장기적인 성공을 축하하세요.',
    'cardimage/Page of Pentacles.jpeg': '새로운 가능성을 실현할 때입니다.\n 계획을 세우고 도전하세요.',
    'cardimage/Knight of Pentacles.jpeg': '끈기와 성실함이 요구되는 시기입니다.\n 한 걸음씩 나아가세요.',
    'cardimage/Queen of Pentacles.jpeg': '현실적이고 안정적인 접근이 필요한 시기입니다.\n 안정감을 가지고 상황에 임하세요.',
    'cardimage/King of Pentacles.jpeg': '안정된 성공과 부를 성취하는 시기입니다.\n 장기적인 안목을 가지고 계획을 세우세요.'
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
        coins += 4; // 코인 적립
        localStorage.setItem('coins', coins); // 로컬 스토리지에 코인 저장
        alert('게임이 끝났습니다! 코인이 적립됩니다.');
        window.location.href = 'mainP.html'; // mainP.html로 이동
    });

    document.body.appendChild(returnButton); // 게임 보드에 버튼 추가
}

// 여기서 setupGame()을 호출하여 게임을 자동으로 시작합니다.
setupGame();

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