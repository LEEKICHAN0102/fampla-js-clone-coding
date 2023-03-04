const grandfather = document.getElementById("grandfather");
const grandmother = document.getElementById("grandmother");
const father = document.getElementById("father");
const mother = document.getElementById("mother");
const son = document.getElementById("son");
const daughter = document.getElementById("daughter");
const dog = document.getElementById("dog");

function birthDayCount() {
  const date = new Date();
  const grandFatherBirthDay = new Date("2023-06-25");
  const grandMotherBirthDay = new Date("2024-03-01");
  const fatherBirthDay = new Date("2023-10-28");
  const motherBirthDay = new Date("2024-02-11");
  const sonBirthDay = new Date("2023-12-04");
  const daughterBirthDay = new Date("2024-01-02");
  const dogBirthDay = new Date("2023-11-11");

  const gfCnt = grandFatherBirthDay - date;
  const gmCnt = grandMotherBirthDay - date;
  const fCnt = fatherBirthDay - date;
  const mCnt = motherBirthDay - date;
  const sCnt = sonBirthDay - date;
  const dCnt = daughterBirthDay - date;
  const dogCnt = dogBirthDay - date;

  const gDay = Math.floor(gfCnt / (1000 * 60 * 60 * 24));
  const gmDay = Math.floor(gmCnt / (1000 * 60 * 60 * 24));
  const fDay = Math.floor(fCnt / (1000 * 60 * 60 * 24));
  const mDay = Math.floor(mCnt / (1000 * 60 * 60 * 24));
  const sDay = Math.floor(sCnt / (1000 * 60 * 60 * 24));
  const dDay = Math.floor(dCnt / (1000 * 60 * 60 * 24));
  const dogDay = Math.floor(dogCnt / (1000 * 60 * 60 * 24));

  grandfather.innerText = `${gDay}일 남았어요!`;
  grandmother.innerText = `${gmDay}일 남았어요!`;
  father.innerText = `${fDay}일 남았어요!`;
  mother.innerText = `${mDay}일 남았어요!`;
  son.innerText = `${sDay}일 남았어요!`;
  daughter.innerText = `${dDay}일 남았어요!`;
  dog.innerText = `${dogDay}일 남았어요!`;
}

birthDayCount();
setInterval(birthDayCount, 1000 * 60 * 60 * 24);

// I know it's Hard Coding;; but Not Meaningless.. i hope so
// This part is birthday count
