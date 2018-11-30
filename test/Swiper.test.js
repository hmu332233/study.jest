describe('Swiper 컴포넌트', () => {
  describe('사용자는 Swiper를 생성할 수 있다.', () => {
    test('설정없이 Swiper를 생성하면, default 속성을 가진 Swiper를 생성한다 .', () => {
      const swiper = shallow(<Swiper />);
      const expected = { slides: [], index: 0, width: null, height: null, duration: 300 };
      expect(swiper.state()).toEqual(expected);
    });
    test('width, height를 설정하고 Swiper를 생성하면, 설정된 width와 height 속성을 가진 Swiper를 생성한다.', () => {
      const swiper = shallow(<Swiper width={500} height={300} />);
      
      expect(swiper.state().width).toEqual(500);
      expect(swiper.state().height).toEqual(300);
    });
  });
  // ... 생략
  describe('사용자는 다음 슬라이드로 이동할 수 있다', () => {
    test('다음 슬라이드가 있을 때 다음 슬라이드를 요청하면, 다음 슬라이드로 이동한다.', () => {
      const slides = ['slide1', 'slide2'];
      const swiper = shallow(<Swiper slides={slides} />);
      swiper.instance().next();
      expect(swiper.state().index).toEqual(1);
    });
    // ... 생략
  });
});
