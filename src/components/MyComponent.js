import React, {Component} from 'react';
import PropTypes from 'prop-types';
//isRequired 사용하여 필수 propTypes 설정

class MyComponent extends Component{
	static defaultProps = {
		name: "yumin"
	};
	static propTypes = {
		name: PropTypes.string,
		favoriteNumber: PropTypes.number.isRequired
	};
	render(){
		const {name, favoriteNumber, children} = this.props;//비구조화 할당
		
		return(
			<div>
				안녕하세요, 제 이름은 {name}입니다<br/>
				children값은 {children}입니다.<br/>
				제가 좋아하는 숫자는 {favoriteNumber}입니다.
			</div>
		)
	}
}

// const MyComponent = ({name, children}) => {
//     // return <div>나의 새롭고 멋진 컴포넌트!</div>;

// 		//const {name, children} = props;
//     return (
//       // <div>
//       //   안녕하세요, 제 이름은 {props.name}입니다.<br/>
//       //   children 값은 {props.children}입니다.
//       // </div>
//     )
// };

MyComponent.defaultProps = {
	name: 'yumin'
};

MyComponent.propTypes = {
	name: PropTypes.string,
	favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;