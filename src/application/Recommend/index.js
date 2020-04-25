import React from 'react';
import Slider from '../../components/slider/index'

// import { PureComponent, Component } from 'react';

// class Rr extends Component {

//     state = {
//         parentMsg: 'parent',
//         sonMsg: {
//             val: 'this is val of son'
//         }
//     }
//     render() {
//         console.log(123213123);
//         this.state.parentMsg = 'asdfsadfsf' + Date.now();
//         return (
//             <div className="App">
//                 <header className="App-header" onClick={() => this.setState(this.state)}>
//                     <p>
//                         {this.state.parentMsg}
//                     </p>
//                 </header>
//                 <button onClick={() =>
//                     this.setState(({ sonMsg }) => {
//                         sonMsg.val = 'son' + Date.now();
//                         console.table(sonMsg);
//                         return { sonMsg }
//                     })
//                 }>修改子组件props</button>
//                 <ComponentSon sonMsg={this.state.sonMsg} />
//             </div>
//         );
//     }
// }

// export class ComponentSon extends PureComponent {
//     render() {
//         console.log('PureComponent rendered : ' + Date.now());
//         const msg = this.props.sonMsg;
//         return (
//             <div> {msg.val}</div>
//         )
//     }
// }

function Recommend(props) {

    const bannerList = [1,2,3,4].map (item => {
        return { imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg" }
      });
      return (
        <div>
          <Slider bannerList={bannerList}></Slider>
        </div>
      )

}

export default React.memo(Recommend)



