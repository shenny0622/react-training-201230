import './css/App.css';
import gotopIcon from './images/btn_goTop.png'
import Buttons from './components/Buttons';
import Dropdown from './components/Dropdown';
import Pagination from './components/Pagination';
import Card from './components/Card';
import React,{useState, useEffect} from "react";

const App = () =>{
    //宣告變數
    const [state,setState] = useState({
      cards: [],
      error: null,
      isLoaded: false,
      itemZones:[] //宣告一個新的陣列(不重複區域)
    });


//API 資料
useEffect(()=>{
    fetch( 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json',{method:"GET"})
      .then(res => res.json())
      .then(
        (data) => {
          setState({
            isLoaded: true,
            cards: data.result.records,
            // 過濾重複的區域資料，並存在 itemZones 的新陣列中
            itemZones: data.result.records.map((item)=>(item.Zone)).filter(function(element, index, arr){
                return arr.indexOf(element) === index;
            })

          });
        },
        (sError) => {
          setState({
            isLoaded: true,
            error:sError,
            // cards:null
          });
        }
      )
},[]);
const { cards } = state;


return (
    <div className="App">
      <header className="banner">
        <div className="container">
            <h1>高雄旅遊資訊網</h1>
            <Dropdown itemZones= {state.itemZones}/>
            {/* <select id="selectName">
          
            </select> */}
            <div className="menu">
                <p className="title-menu">熱門行政區</p>
                <ul className="buttonList">
                    <li><Buttons content="苓雅區" color="purple" /></li>
                    <li><Buttons content="三民區" color="orange"/></li>
                    <li><Buttons content="新興區" color="yellow" /></li>
                    <li><Buttons content="鹽埕區" color="blue" /></li>
                </ul>
                {/* <input type="button" value="苓雅區" style={{background:'#8A82CC'}}/>
                <input type="button" value="三民區" style={{background:'#FFA782'}}/>
                <input type="button" value="新興區" style={{background:'#F5D105'}}/>
                <input type="button" value="鹽埕區" style={{background:'#559AC8'}}/> */}
            </div>
            <div className="icon-menu">
                <hr />
            </div> 
        </div>
    </header>
    <div className="content container"> 
        <div className="main">
            <h2 className="title-main">請先選擇區域</h2>
            <ul className="list">
            {/* 測試用:先撈五筆卡片資料 */}
            {cards.map(function(card,index){
                if(index<5)
                    return <Card item={card}/>
                else
                    return null
            })}
            {/* {cards.map((card) =>(
             <Card item={card}/>
            ))}  */}
            </ul>
        </div>

        <div className="goTop">
            <img src={gotopIcon}  alt="gotopIcon"/>
        </div>
        <Pagination/>
        {/* <ul className="page">
           <li><a href="https://hackmd.io/xG1tw_nER7Wu3xL1gbGYPQ?both">Prev </a></li>
           <li><a href="#">1</a></li>
           <li><a href="#">2</a></li>
           <li><a href="#">Next</a></li>
        </ul> */}
    </div>
    
    <footer>
        <div className="container">
            <p>高雄旅遊網</p>
            <p className="pStyle">資料來源: 高雄市政府</p>
        </div>
    </footer>
    
</div>
  );
}

export default App;
