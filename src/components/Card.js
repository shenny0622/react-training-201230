// import React,{useState, useEffect} from "react";
import clock from '../images/icons_clock.png'
import pin from '../images/icons_pin.png'
import phone from '../images/icons_phone.png'
import tag from '../images/icons_tag.png'


const Card = (props) => {
    // const [state, setState] = useState(
    //   {Picture1:'',
    //     Name   :'',
    //     Zone   :'',
    //     Opentime:'',
    //     Add:'',
    //     Tel : '',
    //     Ticketinfo:''}
    // );
    // props:{
    //   item:{
    //     Picture1:
    //     Name:''
    //     Zone:''
    //     Opentime:''
    //     Add:''
    //     Tel: ''
    //     Ticketinfo:''
    //   }
    // }

//api
  //   useEffect(()=>{
  //       fetch( 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json',{method:"GET"})
  //         .then(res => res.json())
  //         .then(
  //           (data) => {                
  //             const card =  data.result.records[1];
              
  //             setState({
  //               // items: data.result.records
  //               image: card.Picture1,
  //               name: card.Name,
  //               zone: card.Zone,  
  //               opentime: card.Opentime,
  //               address: card.Add,
  //               tel: card.Tel,
  //               info: card.Ticketinfo,   
  //             });
  //           });
  //           // (sError) => {
  //           //   setState({
  //           //     isLoaded: true,
  //           //     error:sError,
  //           //     items:null
  //           //   });
  //           // }   
  // },[]);

  // const { image, name, zone,opentime,address,tel,info } = state;
  // const {Picture1,Name,Zone,Opentime,Add,Tel,Ticketinfo} = props;
  const {item} =  props;
  return(
    <li className="list-card">
      <div className="img" style={{backgroundImage: `url(${item.Picture1})`}}>
          <div className="img-title">
              <h3 className="title-24px">{item.Name}</h3>
              <p className="title-16px">{item.Zone}</p>
          </div>
      </div>
      <div className="content-card">
          <p><img src={clock}  alt="icon"/>{item.Opentime}</p>
          <p><img src={pin}  alt="icon"/>{item.Add}</p>
          <div className="card_down_area">
            <p><img src={phone}  alt="icon"/>{item.Tel}</p>
            <p><img src={tag}  alt="icon"/>{item.Ticketinfo}</p>
          </div>
      </div>
      {/* <img src={image}  alt=""/> */}
    </li>

  )
};
export default Card;