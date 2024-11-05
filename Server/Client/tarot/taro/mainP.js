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
            description.style.visibility = 'visible'; // 설명을 보이게 함
        };

        // 설명 숨기기 함수
        const hideDescription = () => {
            const description = document.getElementById('description');
            description.style.visibility = 'hidden'; // 설명을 숨김
        };

        // 코인 사용 및 표시 업데이트 함수
        let coins = parseInt(localStorage.getItem('coins')) || 0; // 로컬 스토리지에서 코인 수 가져오기
        const updateCoinDisplay = () => {
            document.getElementById('coinDisplay').innerText = `🪙 ${coins}`;
        };

        const spendCoin = () => {
            if (coins > 0) {
                coins -= 1; 
                localStorage.setItem('coins', coins); 
                updateCoinDisplay(); 
            } else {
                alert('코인이 부족합니다! 미니게임을 클리어하여 코인을 얻으세요.');
                return false; // 코인이 부족할 경우 false 반환
            }
            return true; // 코인이 있는 경우 true 반환
        };

        // 링크 클릭 시 코인 확인
        const checkAndSpendCoin = (link) => {
            if (spendCoin()) { // 코인이 있는 경우
                window.location.href = link; // 링크로 이동
            }
        };

        // 링크에 onclick 이벤트 추가
        const loveLink = document.querySelector('a[href="Love.html"]');
        const moneyLink = document.querySelector('a[href="Money.html"]');
        const healthLink = document.querySelector('a[href="Health.html"]');
        const fateLink = document.querySelector('a[href="Fate.html"]');

        loveLink.onclick = (e) => {
            e.preventDefault(); // 기본 링크 클릭 동작 방지
            checkAndSpendCoin(loveLink.href); // 코인 확인 후 이동
        };

        moneyLink.onclick = (e) => {
            e.preventDefault(); // 기본 링크 클릭 동작 방지
            checkAndSpendCoin(moneyLink.href); // 코인 확인 후 이동
        };

        healthLink.onclick = (e) => {
            e.preventDefault(); // 기본 링크 클릭 동작 방지
            checkAndSpendCoin(healthLink.href); // 코인 확인 후 이동
        };

        fateLink.onclick = (e) => {
            e.preventDefault(); // 기본 링크 클릭 동작 방지
            checkAndSpendCoin(fateLink.href); // 코인 확인 후 이동
        };

        updateCoinDisplay(); // 초기 코인 수 표시
        
         // 로컬 스토리지에서 학번 가져오기
        let userId = localStorage.getItem('userId');

        // 환영 메시지 표시
        if (userId) {
            document.getElementById("welcome-message").textContent = `${userId}님, 환영합니다!`;
        } else {
            document.getElementById("welcome-message").textContent = "로그인하지 않았습니다.";
        }

        // 로그아웃 기능 추가
        const logoutButton = document.createElement("button");
        logoutButton.textContent = "로그아웃";
        logoutButton.onclick = function () {
            // 로그아웃 로그 기록 전 ID 저장
            const currentUserId = userId || "알 수 없음"; 

            // 로컬 스토리지에서 사용자 ID 삭제
            localStorage.removeItem('userId');
            userId = null;

            // 로그아웃 로그 기록
            const eventId = "003"; // 이벤트 ID
            const eventDate = new Date().toLocaleDateString(); // 현재 날짜
            const eventTime = new Date().toLocaleTimeString(); // 현재 시간
            const eventType = "로그아웃";
            const comment = "사용자가 로그아웃했습니다.";

            const url = "https://script.google.com/macros/s/AKfycbzRjMN4VoReE8Jq9D5agq4RVdAHBYCBe2IZStB4O2oPtfIeQFZA2OW0POcdQhBFqPklVw/exec";

            // 로그아웃 로그 기록 요청 보내기
            fetch(`${url}?eventId=${eventId}&eventDate=${eventDate}&eventTime=${eventTime}&id=${currentUserId}&eventType=${eventType}&comment=${comment}`)
                .then(response => response.text())
                .then(data => {
                    console.log(data); // 로그아웃 로그가 성공적으로 남겨지면 콘솔에 출력
                })
                .catch(error => {
                    console.error("Error:", error);
                })
                .finally(() => {
                    // 페이지 이동을 로그 기록 요청의 성공 여부에 관계없이 수행
                    window.location.href = "login.html"; 
                });
        };
        document.body.appendChild(logoutButton);

        function logEvent() {
            const eventId = "002"; // 예시로 설정한 이벤트 ID
            const eventDate = new Date().toLocaleDateString(); // 현재 날짜
            const eventTime = new Date().toLocaleTimeString(); // 현재 시간
            const id = userId; // 사용자 ID
            const eventType = "게임 시작 버튼 클릭"; // 이벤트 종류
            const comment = "게임 시작"; // 코멘트
            const url = "https://script.google.com/macros/s/AKfycbzRjMN4VoReE8Jq9D5agq4RVdAHBYCBe2IZStB4O2oPtfIeQFZA2OW0POcdQhBFqPklVw/exec"; // 위에서 배포한 Apps Script URL로 변경

            fetch(`${url}?eventId=${eventId}&eventDate=${eventDate}&eventTime=${eventTime}&id=${id}&eventType=${eventType}&comment=${comment}`)
                .then(response => response.text())
                .then(data => {
                    console.log(data); // 성공적으로 로그가 남겨지면 콘솔에 출력
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        }
