## study.jest

### 설치

```bash
npm install --save-dev jest
```

### 단위테스트 규칙

- 독립적이어야한다. 어떤 테스트도 다른 테스트에 의존하지 않아야한다.
- 격리되어야한다.  Ajax, LocalStorage, UI Event등 테스트 대상이 의존하는 것을 다른 것으로 대체한다.  
  이렇게 대체하는 것을 테스트 더블(Dummy, Stub, Fake, Spy, Mock)이라고 한다.
- given, when, then 단계에 따라 테스트 코드를 작성한다.

### 순서

1. 시나리오 작성
2. 테스트 스펙 정의
3. 테스트 코드 작성
4. 기능 구현
5. 리팩토링

### 예시

1. 시나리오 작성

```
Story. 사용자는 Swiper를 생성할 수 있다.
Story. 사용자는 다음 슬라이드로 이동할 수 있다.
Story. 사용자는 이전 슬라이드로 이동할 수 있다.
```

2. 테스트 스펙 정의

```
Story. 사용자는 Swiper를 생성할 수 있다.
  senario
    given: 설정없이
    when: Swiper를 생성하면
    then: default 속성을 가진 Swiper를 생성한다.
  senario
    given: width와 height을 설정하고
    when: Swiper를 생성하면
    then: 설정된 width와 height을 가진 Swiper를 생성한다.
Story. 사용자는 다음 슬라이드로 이동할 수 있다.
  senario
    given: 다음 슬라이드가 있을 때
    when: 다음 슬라이드를 요청하면,
    then: 다음 슬라이드로 이동한다.
  senario
    given: 다음 슬라이드가 없을 때
    when: 다음 슬라이드를 요청하면,
    then: 현재 슬라이드를 유지한다.
Story. 사용자는 이전 슬라이드로 이동할 수 있다.
  senario
    given: 이전 슬라이드가 있을 때
    when: 이전 슬라이드를 요청하면,
    then: 이전 슬라이드로 이동한다.
  senario
    given: 이전 슬라이드가 없을 때
    when: 이전 슬라이드를 요청하면,
    then: 현재 슬라이드를 유지한다.
```

3. 테스트 코드 작성 - [test/Swiper.test.js](test/Swiper.test.js)

### 참고

[링크](https://medium.com/@jinseok.choi/jest%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-unit-test-%EC%A0%81%EC%9A%A9%EA%B8%B0-420049c16cc8)