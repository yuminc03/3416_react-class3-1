import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        //state 초기값 사용
        this.state = {
            number: 0
        };
    }
    render(){
        const {number} = this.state;
        //state를 조회할 때에는 this.state로 조회
        return(
            <div>
                <h1>{number}</h1>
                <button //onClick버튼이 클릭했을 때 호출할 함수 지정
                onClick={() => {
                    this.setState({
                        number: number + 1
                    });
                }}
                >+1
                </button>
            </div>
        );
    }
}

export default Counter;