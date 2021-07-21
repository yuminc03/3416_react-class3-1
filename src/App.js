/*eslint-disable*/
import './App.css';
import React, {useState} from 'react';
import './App.css';
//import MyComponent from './components/MyComponent';
//import Counter from './components/Counter';
import Say from './components/Say';

const App = () =>{
  // return <MyComponent/>;

  // return <MyComponent>리액트 컴포넌트 사이</MyComponent>;

  // return (
  //   <MyComponent name="yumin" favoriteNumber = {3}>
  //     여기는 children!
  //   </MyComponent>
  // )

  // return(
  //   <Counter/>
  // );

  return(
    <Say/>
  );
}

// function App() {
//   const name = "리액트";
//   // const style = {
//   //   backgroundColor: 'black',
//   //   color: 'aqua',
//   //   fontSize: '48px',
//   //   fontWeight: 'bold',
//   //   padding: 16
//   // };
//   return (
//     // *div와 Fragment의 차이*
//     // <Fragment>
//     //   <h1>리액트 안녕!</h1>
//     //   <h2>잘 작동하니?</h2>
//     // </Fragment> 

//     // *===연산자로 단어가 같은지 판별하고 텍스트 띄우기*
//     // <div>
//     //   {name === "리액트" ? 
//     //   (<h1>리액트입니다</h1>) : (<h1>리액트가 아닙니다</h1>)//삼항연산자 사용
//     //   }
//     // </div>

//     // *JSX(인라인 스타일링) 검은바탕에 아쿠아색 리액트 글자
//     // <div style={style}>
//     //   {name}
//     // </div>

//     // *JSX(인라인 스타일링) className 검은색 리액트 글자*
//     <div className="react">
//       {name}
//     </div>
//   );
// }

export default App;
