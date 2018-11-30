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
2. 테스트 코드 작성
3. 기능 구현
4. 리팩토링

