const quotes = [
  {
    quote: "사랑은 가장 가까운 사람가족을 돌보는 것에서 부터 시작된다.",
    author: "-마더 테레사-",
  },
  {
    quote:
      "훌륭한 부모의 슬하에 있다면 사랑에 넘치는 체험을 얻을 수 있다. 그것은 먼 훗날 노년이 되더라도 없어지지 않는다.",
    author: "-베토벤-",
  },
  {
    quote:
      "모든 행복한 가족들은 서로 닮은 데가 있다.그러나 모든 불행한 가족은 그 자신의 독특한 방법으로 불쾌하다.",
    author: "-톨스토이-",
  },
  {
    quote:
      "가족들이 서로 맺어져 하나가 되어 있다는 것이 정말 이 세상에서의 유일한 행복이다.",
    author: "-퀴리 부인-",
  },
  {
    quote: "그냥 살어, 남이 가진거 부러워하지 말고",
    author: "-호머 심슨-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;
