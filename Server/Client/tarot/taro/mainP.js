// 별 생성 함수
const createStars = (numStars) => {
    const body = document.body;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // 랜덤한 위치와 크기 설정
        const size = Math.random() * 10 + 5; 
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}vh`; 
        star.style.left = `${Math.random() * 100}vw`; 
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;

        body.appendChild(star);
    }
};
createStars(50); // 별 50개 생성

// 주제 설명 표시 함수
const showDescription = (topic) => {
    const description = document.getElementById('description');
    switch (topic) {
        case 'love':
            description.innerHTML = '현재 연애 상황, 앞으로의 사랑의 기회, 관계의 발전 등을 탐구합니다. 싱글이라면 새로운 인연을, 커플이라면 관계의 미래를 볼 수 있습니다.';
            break;
        case 'wealth':
            description.innerHTML = '재정적 안정, 사업 성공, 투자 운, 금전적 기회 등을 탐구하는 리딩. 미래의 경제적 흐름이나 재정 문제 해결에 대한 조언을 얻을 수 있습니다.';
            break;
        case 'health':
            description.innerHTML = '신체적 건강 상태, 미래의 건강 상황, 정신적 안정과 회복 등 건강에 관련된 전반적인 운을 탐구합니다.';
            break;
        case 'fate':
            description.innerHTML = '중요한 결정을 앞두고 있는 상황에서 선택을 돕는 리딩. 인생의 중요한 갈림길에서 어떤 결정을 내릴지 방향을 찾습니다.';
            break;
    }
    description.style.visibility = 'visible';
};

// 설명 숨기기 함수
const hideDescription = () => {
    const description = document.getElementById('description');
    description.style.visibility = 'hidden';
};

// 코인 표시 및 업데이트 함수
let coins = parseInt(localStorage.getItem('coins')) || 0; // 로컬 스토리지에서 코인 수 가져오기
const updateCoinDisplay = () => {
    document.getElementById('coinDisplay').innerText = `🪙 ${coins}`;
};

// 코인 사용 함수
const spendCoin1 = () => {
    if (coins > 0) {
        coins -= 1; 
        localStorage.setItem('coins', coins);
        const eventId = "005"; 
        const eventDate = new Date().toLocaleDateString(); 
        const eventTime = new Date().toLocaleTimeString();
        const id = userId || "0"; 
        const eventType = "타로 버튼 클릭";
        const comment = "연애운 시작";
        const coin = coins;
        const url = "https://script.google.com/macros/s/AKfycbzRjMN4VoReE8Jq9D5agq4RVdAHBYCBe2IZStB4O2oPtfIeQFZA2OW0POcdQhBFqPklVw/exec";

        fetch(`${url}?eventId=${eventId}&eventDate=${eventDate}&eventTime=${eventTime}&id=${id}&eventType=${eventType}&comment=${comment}&coin=${coin}`)
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error:", error);
            }); 
        updateCoinDisplay(); 
    } else {
        const eventId = "006"; 
        const eventDate = new Date().toLocaleDateString(); 
        const eventTime = new Date().toLocaleTimeString();
        const id = userId || "0"; 
        const eventType = "타로 버튼 클릭";
        const comment = "연애운 시작 실패";
        const coin = coins;
        const url = "https://script.google.com/macros/s/AKfycbzRjMN4VoReE8Jq9D5agq4RVdAHBYCBe2IZStB4O2oPtfIeQFZA2OW0POcdQhBFqPklVw/exec";

        fetch(`${url}?eventId=${eventId}&eventDate=${eventDate}&eventTime=${eventTime}&id=${id}&eventType=${eventType}&comment=${comment}&coin=${coin}`)
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
        alert('코인이 부족합니다! 미니게임을 클리어하여 코인을 얻으세요.');
        return false;
    }
    return true;
};

const spendCoin2 = () => {
    if (coins > 0) {
        coins -= 1; 
        localStorage.setItem('coins', coins); 
        const eventId = "005"; 
        const eventDate = new Date().toLocaleDateString(); 
        const eventTime = new Date().toLocaleTimeString();
        const id = userId || "0"; 
        const eventType = "타로 버튼 클릭";
        const comment = "재물운 시작";
        const coin = coins;
        const url = "https://script.google.com/macros/s/AKfycbzRjMN4VoReE8Jq9D5agq4RVdAHBYCBe2IZStB4O2oPtfIeQFZA2OW0POcdQhBFqPklVw/exec";

        fetch(`${url}?eventId=${eventId}&eventDate=${eventDate}&eventTime=${eventTime}&id=${id}&eventType=${eventType}&comment=${comment}&coin=${coin}`)
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
        updateCoinDisplay(); 
    } else {
        const eventId = "007"; 
        const eventDate = new Date().toLocaleDateString(); 
        const eventTime = new Date().toLocaleTimeString();
        const id = userId || "0"; 
        const eventType = "타로 버튼 클릭";
        const comment = "재물운 시작 실패";
        const coin = coins;
        const url = "https://script.google.com/macros/s/AKfycbzRjMN4VoReE8Jq9D5agq4RVdAHBYCBe2IZStB4O2oPtfIeQFZA2OW0POcdQhBFqPklVw/exec";

        fetch(`${url}?eventId=${eventId}&eventDate=${eventDate}&eventTime=${eventTime}&id=${id}&eventType=${eventType}&comment=${comment}&coin=${coin}`)
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
        alert('코인이 부족합니다! 미니게임을 클리어하여 코인을 얻으세요.');
        return false;
    }
    return true;
};
const spendCoin3 = () => {
    if (coins > 0) {
        coins -= 1; 
        localStorage.setItem('coins', coins); 
        const eventId = "005"; 
        const eventDate = new Date().toLocaleDateString(); 
        const eventTime = new Date().toLocaleTimeString();
        const id = userId || "0"; 
        const eventType = "타로 버튼 클릭";
        const comment = "건강운 시작";
        const coin = coins;
        const url = "https://script.google.com/macros/s/AKfycbzRjMN4VoReE8Jq9D5agq4RVdAHBYCBe2IZStB4O2oPtfIeQFZA2OW0POcdQhBFqPklVw/exec";

        fetch(`${url}?eventId=${eventId}&eventDate=${eventDate}&eventTime=${eventTime}&id=${id}&eventType=${eventType}&comment=${comment}&coin=${coin}`)
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
        updateCoinDisplay(); 
    } else {
        const eventId = "008"; 
        const eventDate = new Date().toLocaleDateString(); 
        const eventTime = new Date().toLocaleTimeString();
        const id = userId || "0"; 
        const eventType = "타로 버튼 클릭";
        const comment = "건강운 시작 실패";
        const coin = coins;
        const url = "https://script.google.com/macros/s/AKfycbzRjMN4VoReE8Jq9D5agq4RVdAHBYCBe2IZStB4O2oPtfIeQFZA2OW0POcdQhBFqPklVw/exec";

        fetch(`${url}?eventId=${eventId}&eventDate=${eventDate}&eventTime=${eventTime}&id=${id}&eventType=${eventType}&comment=${comment}&coin=${coin}`)
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
        alert('코인이 부족합니다! 미니게임을 클리어하여 코인을 얻으세요.');
        return false;
    }
    return true;
};

const spendCoin4 = () => {
    if (coins > 0) {
        coins -= 1; 
        localStorage.setItem('coins', coins); 
        const eventId = "005"; 
        const eventDate = new Date().toLocaleDateString(); 
        const eventTime = new Date().toLocaleTimeString();
        const id = userId || "0"; 
        const eventType = "타로 버튼 클릭";
        const comment = "운명의 흐름 시작";
        const coin = coins;
        const url = "https://script.google.com/macros/s/AKfycbzRjMN4VoReE8Jq9D5agq4RVdAHBYCBe2IZStB4O2oPtfIeQFZA2OW0POcdQhBFqPklVw/exec";

        fetch(`${url}?eventId=${eventId}&eventDate=${eventDate}&eventTime=${eventTime}&id=${id}&eventType=${eventType}&comment=${comment}&coin=${coin}`)
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
        updateCoinDisplay(); 
    } else {
        const eventId = "009"; 
        const eventDate = new Date().toLocaleDateString(); 
        const eventTime = new Date().toLocaleTimeString();
        const id = userId || "0"; 
        const eventType = "타로 버튼 클릭";
        const comment = "운명의 흐름 시작 실패";
        const coin = coins;
        const url = "https://script.google.com/macros/s/AKfycbzRjMN4VoReE8Jq9D5agq4RVdAHBYCBe2IZStB4O2oPtfIeQFZA2OW0POcdQhBFqPklVw/exec";

        fetch(`${url}?eventId=${eventId}&eventDate=${eventDate}&eventTime=${eventTime}&id=${id}&eventType=${eventType}&comment=${comment}&coin=${coin}`)
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
        alert('코인이 부족합니다! 미니게임을 클리어하여 코인을 얻으세요.');
        return false;
    }
    return true;
};

// 코인 확인 후 링크 이동 함수
const checkAndSpendCoin1 = (link) => {
    if (spendCoin1()) {
        window.location.href = link;
    }
};

const checkAndSpendCoin2 = (link) => {
    if (spendCoin2()) {
        window.location.href = link;
    }
};

const checkAndSpendCoin3 = (link) => {
    if (spendCoin3()) {
        window.location.href = link;
    }
};

const checkAndSpendCoin4 = (link) => {
    if (spendCoin4()) {
        window.location.href = link;
    }
};

// 각 링크에 onclick 이벤트 추가
const loveLink = document.querySelector('a[href="Love.html"]');
const moneyLink = document.querySelector('a[href="Money.html"]');
const healthLink = document.querySelector('a[href="Health.html"]');
const fateLink = document.querySelector('a[href="Fate.html"]');

loveLink.onclick = (e) => {
    e.preventDefault();
    checkAndSpendCoin1(loveLink.href);
};
moneyLink.onclick = (e) => {
    e.preventDefault();
    checkAndSpendCoin2(moneyLink.href);
};
healthLink.onclick = (e) => {
    e.preventDefault();
    checkAndSpendCoin3(healthLink.href);
};
fateLink.onclick = (e) => {
    e.preventDefault();
    checkAndSpendCoin4(fateLink.href);
};

updateCoinDisplay();

// 로컬 스토리지에서 학번 가져오기
let userId = localStorage.getItem('userId');

// 로그아웃 기능 추가
const logoutButton = document.createElement("button");
logoutButton.id = "logout-button";

// 환영 메시지 표시
if (userId) {
    document.getElementById("welcome-message").textContent = `${userId}님, 환영합니다!`;
    logoutButton.textContent = "로그아웃";
} else {
    document.getElementById("welcome-message").textContent = "로그인하지 않았습니다.";
    logoutButton.textContent = "로그인";
}

logoutButton.onclick = function () {
    // 현재 버튼의 텍스트가 "로그아웃"인지 "로그인"인지 확인
    if (logoutButton.textContent === "로그아웃") {
        // 로그아웃일 경우 로그아웃 로그 기록 전 ID 저장
        const currentUserId = userId || "0";

        // 로컬 스토리지에서 사용자 ID 삭제
        localStorage.removeItem('userId');
        userId = null;

        // 로그아웃 로그 기록
        const eventId = "003";
        const eventDate = new Date().toLocaleDateString();
        const eventTime = new Date().toLocaleTimeString();
        const eventType = "로그아웃";
        const comment = "사용자가 로그아웃했습니다.";
        const coin = coins;

        const url = "https://script.google.com/macros/s/AKfycbzRjMN4VoReE8Jq9D5agq4RVdAHBYCBe2IZStB4O2oPtfIeQFZA2OW0POcdQhBFqPklVw/exec";

        // 로그아웃 로그 기록 요청 보내기
        fetch(`${url}?eventId=${eventId}&eventDate=${eventDate}&eventTime=${eventTime}&id=${currentUserId}&eventType=${eventType}&comment=${comment}&coin=${coin}`)
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error:", error);
            })
            .finally(() => {
                window.location.href = "login.html"; 
            });
    } else {
        // 로그인 버튼 클릭 시의 로그 기록
        const eventId = "004";
        const eventDate = new Date().toLocaleDateString();
        const eventTime = new Date().toLocaleTimeString();
        const eventType = "홈 로그인 버튼";
        const comment = "홈 로그인 버튼 클릭";
        const currentUserId = "0"; // 비로그인 상태이므로 ID는 0으로 설정
        const coin = "0";

        const url = "https://script.google.com/macros/s/AKfycbzRjMN4VoReE8Jq9D5agq4RVdAHBYCBe2IZStB4O2oPtfIeQFZA2OW0POcdQhBFqPklVw/exec";

        // 로그인 버튼 클릭 로그 기록 요청 보내기
        fetch(`${url}?eventId=${eventId}&eventDate=${eventDate}&eventTime=${eventTime}&id=${currentUserId}&eventType=${eventType}&comment=${comment}&coin=${coin}`)
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error:", error);
            })
            .finally(() => {
                window.location.href = "login.html"; 
            });
    }
};

document.body.appendChild(logoutButton);


// 이벤트 로그 기록 함수
function logEvent() {
    const eventId = "002"; 
    const eventDate = new Date().toLocaleDateString(); 
    const eventTime = new Date().toLocaleTimeString();
    const id = userId || "0"; 
    const eventType = "게임 시작 버튼 클릭";
    const comment = "게임 시작";
    const coin = coins;
    const url = "https://script.google.com/macros/s/AKfycbzRjMN4VoReE8Jq9D5agq4RVdAHBYCBe2IZStB4O2oPtfIeQFZA2OW0POcdQhBFqPklVw/exec";

    fetch(`${url}?eventId=${eventId}&eventDate=${eventDate}&eventTime=${eventTime}&id=${id}&eventType=${eventType}&comment=${comment}&coin=${coin}`)
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}
