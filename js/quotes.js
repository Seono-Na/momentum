"use strict";

const quotes = [
  {
    quote: "행동이 생각을 만든다. 그 반대가 아니다.",
    author: "조지 입",
  },
  {
    quote:
      "행동이 반드시 행복을 가져다 주지는 않을지라도 행동 없는 행복이란 없다.",
    author: "윌리엄 제임스",
  },
  {
    quote:
      "잘할 수 없다고 생각하면서 아예 시도도 하지 않는 것만큼 큰 실수는 없다. ",
    author: "에드먼드 버크",
  },
  {
    quote:
      "항상 승자처럼 행동하면 결국에는 승리하게 해주는 정신적 힘이 생길 것이다.",
    author: "아서 애시",
  },
  {
    quote: "아무것도 시도할 용기가 없다면 도대체 인생이란 무엇이겠는가?",
    author: "빈센트 반 고흐",
  },
  {
    quote: "나만이 내 인생을 바꿀 수 있다. 아무도 날 대신해 줄 수 없다.",
    author: "캐럴 버넷",
  },
  {
    quote: "시작할 때 위대할 필요는 없다. 그러나 시작하면 위대해진다.",
    author: "지그 지글러",
  },
  {
    quote: "더 좋아지려는 노력을 중단하면 현재의 좋은 것도 중단된다.",
    author: "올리버 크롬웰",
  },
  {
    quote:
      "배움이 없는 자유는 언제나 위험하며 자유가 없는 배움은 언제나 헛된 일입니다.",
    author: "존 F.케네디",
  },
  {
    quote:
      "살면서 미쳤다는 말을 들어보지 못헸다면, 너는 단 한번도 목숨걸고 도전한 적이 없었다는 것이다.",
    author: "W.볼튼",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
setInterval(() => {

  const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = todayQuote.quote;
  author.innerText = ` - ${todayQuote.author}`;
}, 15000);
