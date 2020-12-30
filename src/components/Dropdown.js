// import React,{useState, useEffect} from "react";


const Dropdown = (props) =>{
  const {itemZones} =  props;

  return(
    <select>
          <option selected disabled>--請選擇行政區--</option>
           {/* notes:使用 map 會自動 return，但用 forEach 和 for 迴圈不會自動 return，
            因此這邊建議直接使用 map 比較好 */}
          {itemZones.map((zone) =>(
              // itemZones[index] = zone
            <option value={zone}>{zone}</option>   
            )
          )}
    </select>

  )
}  
   
  // const [state,setState] = useState({
  //   // items: [],
  //   error: null,
  //   isLoaded: false,
  //   itemZones:[] //宣告一個新的陣列(不重複區域)

  // });
  

  // useEffect(()=>{
  //       fetch( 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json',{method:"GET"})
  //         .then(res => res.json())
  //         .then(
  //           (data) => {
  //             setState({
  //               isLoaded: true,
  //               // items: data.result.records,

  //               // 過濾重複的區域資料，並存在 itemZones 的新陣列中
  //               itemZones: data.result.records.map((item)=>(item.Zone)).filter(function(element, index, arr){
  //                   return arr.indexOf(element) === index;
  //               })
  //             });
  //           },
  //           (sError) => {
  //             setState({
  //               isLoaded: true,
  //               error:sError
  //             });
  //           }
  //         )
  // },[]);


        // const { error, isLoaded,itemZones } = state;

        // if (error) {
        //   return <div>Error: {error.message}</div>;
        // } else if (!isLoaded) {
        //   return <div>Loading...</div>;
        // } else {
        // return (
        //           <select>
        //                 <option selected disabled>--請選擇行政區--</option>

        //                  {/* notes:使用 map 會自動 return，但用 forEach 和 for 迴圈不會自動 return，
        //                 因此這邊建議直接使用 map 比較好 */}
        //                 {itemZones.map((zone) =>(
        //                     // itemZones[index] = zone
        //                         <option value={zone}
        //                          >{zone}</option>   
                         

                           
        //                     )
        //                 )}
                     
        //                 {/* {result.map((zone) =>(
        //                     // itemZones[index] = zone
        //                         <option value={zone}
        //                          >{zone}</option>   
                         

                           
        //                     )
        //                 )} */}
      
        //           </select>
             
        //   );
        // }
    


export default Dropdown;