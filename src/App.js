import './App.css';
import ComClass1 from './components/ComClass1';
import ComClassProps2 from './components/ComClassProps2';
import ComCombine1 from './components/ComCombine1';
import ComCombine2Object from './components/ComCombine2Object';
import ComCombine3Object from './components/ComCombine3Object';
import ComCondition1Class from './components/ComCondition1Class';
import ComCondition2Funct from './components/ComCondition2Funct';
import ComCondition3 from './components/ComCondition3';
import ComConditionLogin4 from './components/ComConditionLogin4';
import ComConditionLogin5 from './components/ComConditionLogin5';
import ComFunctImg3 from './components/ComFunctImg3';
import ComFunction2 from './components/ComFunction2';
import ComFunctProps1 from './components/ComFunctProps1';
import ComFunctProps3 from './components/ComFunctProps3';
import ComFunctProps4Object from './components/ComFunctProps4Object';
import ComFunctProps5Child from './components/ComFunctProps5Child';
import Event1 from './components/Event1';
import Event10Member from './components/Event10Member';
import Event11 from './components/Event11';
import Event2 from './components/Event2';
import Event3 from './components/Event3';
import Event4Change from './components/Event4Change';
import Event5Change from './components/Event5Change';
import Event6ChangeRadio from './components/Event6ChangeRadio';
import Event7ChangeSelect from './components/Event7ChangeSelect';
import Event8Submit from './components/Event8Submit';
import Event9Multi from './components/Event9Multi';
import Jsx1Variable from './components/Jsx1Variable';
import Jsx2Function from './components/Jsx2Function';
import Jsx3If from './components/Jsx3If';
import Jsx4Style from './components/Jsx4Style';
import Jsx5Import from './components/Jsx5Import';
import List1 from './components/List1';
import List2Object from './components/List2Object';
import List3Object from './components/List3Object';
import List4Object from './components/List4Object';
import List5Product from './components/List5Product';
import List6Filter from './components/List6Filter';
import List7Filter from './components/List7Filter';
import StateUp0 from './components/StateUp0';
import StateUp1 from './components/StateUp1';
import StateUp2 from './components/StateUp2';
import StateUp3 from './components/StateUp3';
import StateUp4 from './components/StateUp4';
import StateUp5 from './components/StateUp5';
import StateUp6 from './components/StateUp6';

const user = {
  name: "책상",
  imageUrl: "./images/desk.png",
  imageSize: 100
}
function App() {
  return (
    <div className="App">
      {/* <h1>react 연습페이지</h1>
      <h2>컴포넌트의 종류</h2>
      <p>클래스 컨포넌트</p>
      <ComClass1 />

      <p>함수 컨포넌트</p>
      <ComFunction2 />

      <hr />
      <h2>이미지 - 함수컴포넌트</h2>
      <ComFunctImg3 /> */}
      {/* ratce
      r : react
      a : arrow
      f : functon
      c : component
      e : export */}

{/* 
      <h2>jsx 문법 알아보기</h2>
      <p>1. 부모요소가 반드시 하나가 감싸는 형태여야한다</p>
      <p>2. 자바스크립트 표현식(변수와 수식)을 사용할 수 있다 - { }로 묶어서 사용한다. </p>
      <p>3. 조건문 삼항조건연산자를 주로 사용한다</p>
      <p>4. 스타일 fontColor 카멜표기법만 사용가능하다 inline요소에만 가능</p>
      <p>5. 주석 -  </p>

      <Jsx1Variable />
      <Jsx2Function />
      <Jsx3If />
      <Jsx4Style />
      <Jsx5Import /> */}

      {/* <h2>컴포넌트 속성</h2>
      <p>컴포넌트 속성을 props 전달하여 값 사용하기</p>

      <ComFunctProps1 name="홍길동" age={20} />
      <ComFunctProps1 name="짱구" age={5} />
      <ComClassProps2 city="서울" hour={1} />
      <ComFunctProps3 name={user.name} imgUrl={user.imageUrl} imgSize={user.imageSize} />
      <ComFunctProps4Object users={user}/>
      <ComFunctProps5Child>
        <h3>컴포넌트 자식</h3>
        <p>컴포넌트 안에 내용을 넣을 수 있어요</p>
      </ComFunctProps5Child> */}

      <h2>컴포넌트 합성</h2>
      <p>재사용</p>
      <ComCombine1/>
      <ComCombine2Object />
      <ComCombine3Object />

      <h2>조건문</h2>
      <h3>클래스 컴포넌트</h3>
      상품명, 품절옵션을 출력해줄 컴포넌트
      <ComCondition1Class />
      <ComCondition2Funct />
      <ComCondition3 />
      <ComConditionLogin4 />
      <ComConditionLogin5 />


      <h2>리스트 렌더링</h2>
      <List1 />
      <List2Object />
      <List3Object />
      <List4Object />
      <List5Product />
      {/* <List6Filter />
      <List7Filter />

      <h2>이벤트</h2>
      <p>마우스 이벤트 - onClick, onMouseLeave, onMouseOver, onMouseOut</p>
      <p>키보드 이벤트 - onKeyDown, onKeyUp</p>
      <p>폼 이벤트 - onChange(입력값이 변경될때), onInput(입력할때마다)</p>
      <Event1 />
      <Event2 />
      <Event3 />
      <Event4Change />
      <Event5Change />
      <Event6ChangeRadio /> */}
      {/* <Event7ChangeSelect />
      <Event8Submit />
      <Event9Multi />
      <Event10Member />
      <Event11 /> */}

      {/* <h2>컴포넌트 간 데이터 전달</h2>
      <StateUp0 />
      <StateUp1 />
      <StateUp2 />
      <StateUp3 />
      <StateUp4 />
      <StateUp5 />
      <StateUp6 /> */}
    </div>
  );
}

export default App;
