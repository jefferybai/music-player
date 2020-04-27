import React from 'react';
import Slider from '../../components/slider/index';
import RecommendList from '../../components/recommendlist';
import Scroll from '../../components/scoll';
import { Content } from '../../components/content';

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


    //mock 数据
    const bannerList = [1, 2, 3, 4].map(item => {
        return { imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg" }
    });

    const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
        return {
            id: 1,
            picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
            playCount: 17171122,
            name: "朴树、许巍、李健、郑钧、老狼、赵雷"
        }
    });
    return (
        <Content>
            <Scroll className="list">
                <div>
                    <Slider bannerList={bannerList}></Slider>
                    <RecommendList recommendList={recommendList}></RecommendList>
                </div>
            </Scroll>
        </Content>
    )

}

export default React.memo(Recommend)


