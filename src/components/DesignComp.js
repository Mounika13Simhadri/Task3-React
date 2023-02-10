// import React,{useRef,useState} from 'react'
// function DesignComp() 
// {
//     const[five,setfive]=useState();
//     const valueRef1=useRef();
//     const valueRef2=useRef();
//     const valueRef3=useRef();
//     const valueRef4=useRef();
//     const valueRef5=useRef();       
//     const Tipfive=(event)=>{
//         event.preventDefault();
//         let b,n,tip,total;
//         b=valueRef1.current.value;   
//         if(b=="null"||isNaN(b)){
//             alert("please enter the bill value!");
//         }
//         n=valueRef2.current.value;
//         if(n=="null"||isNaN(n)){
//             alert("please enter the number of persons!");
//         }
//         n=valueRef2.current.value;             
//         tip=(b*0.05)/n;
//         total=(b/n)+tip;
//         valueRef3.current.value=tip;
//         valueRef4.current.value=total;       
//     }  
//     const Tipten=(event)=>{
//         event.preventDefault();
//         let b,n,tip,total;
//         b=valueRef1.current.value;     
//         if(b=="null"||isNaN(b)){
//             alert("please enter the bill value!");
//         }
//         n=valueRef2.current.value;
//         if(n=="null"||isNaN(n)){
//             alert("please enter the number of persons!");
//         }
//         n=valueRef2.current.value;              
//         tip=(b*0.10)/n;
//         total=(b/n)+tip;
//         valueRef3.current.value=tip;
//         valueRef4.current.value=total;   
//     }  
//     const Tipfifteen=(event)=>{
//         event.preventDefault();
//         let b,n,tip,total;
//         b=valueRef1.current.value;
      
//         if(b=="null"||isNaN(b)){
//             alert("please enter the bill value!");
//         }
//         n=valueRef2.current.value;
//         if(n=="null"||isNaN(n)){
//             alert("please enter the number of persons!");
//         }
//         n=valueRef2.current.value;  
            
//         tip=(b*0.15)/n;
//         total=(b/n)+tip;
//         valueRef3.current.value=tip;
//         valueRef4.current.value=total;
//     }  
//     const Tiptwentfive=(event)=>{
//         event.preventDefault();
//         let b,n,tip,total;
//         b=valueRef1.current.value;
      
//         if(b=="null"||isNaN(b)){
//             alert("please enter the bill value!");
//         }
//         n=valueRef2.current.value;
//         if(n=="null"||isNaN(n)){
//             alert("please enter the number of persons!");
//         }
//         n=valueRef2.current.value;             
//         tip=(b*0.25)/n;
//         total=(b/n)+tip;
//         valueRef3.current.value=tip;
//         valueRef4.current.value=total;      
//     }  
//     const Tipfifty=(event)=>{
//         event.preventDefault();
//         let b,n,tip,total;
//         b=valueRef1.current.value;       
//         if(b=="null"||isNaN(b)){
//             alert("please enter the bill value!");
//         }
//         n=valueRef2.current.value;
//         if(n=="null"||isNaN(n)){
//             alert("please enter the number of persons!");
//         }
//         n=valueRef2.current.value;              
//         tip=(b*0.5)/n;
//         total=(b/n)+tip;
//         valueRef3.current.value=tip;
//         valueRef4.current.value=total;       
//     }  
//     const Custom=(event)=>{
//         event.preventDefault();
//         let b,c,n,tip,total;
//         b=valueRef1.current.value;       
//         if(b=="null"||isNaN(b)){
//             alert("please enter the bill value!");
//         }
//         n=valueRef2.current.value;
//         if(n=="null"||isNaN(n)){
//             alert("please enter the number of persons!");
//         }
//         n=valueRef2.current.value;  
//         c=valueRef5.current.value;   
//         if(c=="null"||isNaN(c)){
//         alert("please enter the tip percentage!");
//         }           
//         tip=(b*(c/100))/n;
//         total=(b/n)+tip;
//         valueRef3.current.value=tip;
//         valueRef4.current.value=total;        
//     } 
//   return (
//     <div>
//         <div className="container">
//             <br/><br/><br/>
//             <h4>S&nbsp;&nbsp;P&nbsp;&nbsp;L&nbsp;&nbsp;I<br/>T&nbsp;&nbsp;T&nbsp;&nbsp;E&nbsp;&nbsp;R</h4>
//             <form className="form1">
//                 <div className="inptcont">
//                     <br/>
//                     <br/>
//                     <i className="fa-solid fa-user"></i>
//                     <label id="l1" for="bill">Bill</label>  <br/><br/>
//                     <img id="img1" alt="image" src="images/dollar.png"/>
//                     <input type="text" ref={valueRef1} id="txt1" placeholder="0"   /><br/><br/><br/>
//                     <label id="l2" for="tip">Select Tip %</label> <br/><br/>
//                     <button id="b5" onClick={Tipfive}>5%</button>
//                     <button id="b10" onClick={Tipten}>10%</button>
//                     <button id="b15" onClick={Tipfifteen}>15%</button><br/>
//                     <button id="b25" onClick={Tiptwentfive}>25%</button>
//                     <button id="b50" onClick={Tipfifty}>50%</button>
//                     <input type="text" ref={valueRef5} id="cb" placeholder="Custom" onChange={Custom}/> 
//                     <br/><br/><br/>
//                     <label id="l3" for="people">Number of People</label>  <br/> <br/>
//                     <img id="img2" alt="image" src="images/contact.jpg"/>
//                     <input type="text" id="txt2" ref={valueRef2} placeholder="0"/><br/>
//                 </div>
//                 <div className="outptcont">
//                     <label id="l4" for="TipAmount">Tip Amount<h6>/person</h6></label> 
//                     <input type="text" id="txt3" ref={valueRef3} value="$0.00"/><br/>
//                     <label id="l5" for="Total">Total<h6>/person</h6></label> 
//                     <input type="text" id="txt4" ref={valueRef4}value="$0.00"/><br/>
//                     <button type="reset" id="rb">RESET</button>
//                 </div>
//             </form>
//         </div>
//    </div>
//   )
// }
// export default DesignComp;