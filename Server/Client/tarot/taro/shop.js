let coins = parseInt(localStorage.getItem('coins')) || 0;
let userId = localStorage.getItem('userId');
const spendCoin1 = () => {
        coins += 1; 
        localStorage.setItem('coins', coins);
        const eventId = "010"; 
        const eventDate = new Date().toLocaleDateString(); 
        const eventTime = new Date().toLocaleTimeString();
        const id = userId || "0"; 
        const eventType = "구매 버튼 클릭";
        const buy = "1개 구매";
        const url = "https://script.google.com/macros/s/AKfycbzRjMN4VoReE8Jq9D5agq4RVdAHBYCBe2IZStB4O2oPtfIeQFZA2OW0POcdQhBFqPklVw/exec";

        fetch(`${url}?eventId=${eventId}&eventDate=${eventDate}&eventTime=${eventTime}&id=${id}&eventType=${eventType}&buy=${buy}`)
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error:", error);
            }); 
        alert('코인 구매가 완료되었습니다!');
};

const spendCoin2 = () => {
    coins += 2; 
        localStorage.setItem('coins', coins);
        const eventId = "011"; 
        const eventDate = new Date().toLocaleDateString(); 
        const eventTime = new Date().toLocaleTimeString();
        const id = userId || "0"; 
        const eventType = "구매 버튼 클릭";
        const buy = "2개 구매";
        const url = "https://script.google.com/macros/s/AKfycbzRjMN4VoReE8Jq9D5agq4RVdAHBYCBe2IZStB4O2oPtfIeQFZA2OW0POcdQhBFqPklVw/exec";

        fetch(`${url}?eventId=${eventId}&eventDate=${eventDate}&eventTime=${eventTime}&id=${id}&eventType=${eventType}&buy=${buy}`)
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error:", error);
            }); 
        alert('코인 구매가 완료되었습니다!');
};

const spendCoin3 = () => {
    coins += 3; 
        localStorage.setItem('coins', coins);
        const eventId = "012"; 
        const eventDate = new Date().toLocaleDateString(); 
        const eventTime = new Date().toLocaleTimeString();
        const id = userId || "0"; 
        const eventType = "구매 버튼 클릭";
        const buy = "3개 구매";
        const url = "https://script.google.com/macros/s/AKfycbzRjMN4VoReE8Jq9D5agq4RVdAHBYCBe2IZStB4O2oPtfIeQFZA2OW0POcdQhBFqPklVw/exec";

        fetch(`${url}?eventId=${eventId}&eventDate=${eventDate}&eventTime=${eventTime}&id=${id}&eventType=${eventType}&buy=${buy}`)
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error:", error);
            }); 
        alert('코인 구매가 완료되었습니다!');
};

const spendCoin4 = () => {
    coins += 4; 
        localStorage.setItem('coins', coins);
        const eventId = "013"; 
        const eventDate = new Date().toLocaleDateString(); 
        const eventTime = new Date().toLocaleTimeString();
        const id = userId || "0"; 
        const eventType = "구매 버튼 클릭";
        const buy = "4개 구매";
        const url = "https://script.google.com/macros/s/AKfycbzRjMN4VoReE8Jq9D5agq4RVdAHBYCBe2IZStB4O2oPtfIeQFZA2OW0POcdQhBFqPklVw/exec";

        fetch(`${url}?eventId=${eventId}&eventDate=${eventDate}&eventTime=${eventTime}&id=${id}&eventType=${eventType}&buy=${buy}`)
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error:", error);
            }); 
        alert('코인 구매가 완료되었습니다!');
};