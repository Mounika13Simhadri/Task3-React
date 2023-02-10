import React,{useState} from 'react'
function New() 
{
    const [values,setValues]=useState({bill:0,people:0,tip:0,total:0,custom:0})
    const [tipPercent,setPercent]=useState()
    const submitInfo=(e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value,
          });
          console.log(e.target.value)
    }   
    const calculate=(e)=>{
        e.preventDefault();
        let b,n;
        b=values.bill;
        if(b==="null"||isNaN(b)){
            alert("please enter the bill value!");
        }
        n=values.people;
        if(n==="null"||isNaN(n)){
            alert("please enter the number of persons!");
        }
        n=values.people;              
        values.tip=(b*(tipPercent)/100)/n;
        console.log(values.tip)
        values.total=(b/n)+values.tip; 
    }
    const Custom=(event)=>{
        event.preventDefault();
        let b,c,n;
        b=values.bill;
       
        if(b==="null"||isNaN(b)){
            alert("please enter the bill value!");
        }
        n=values.people;
        if(n==="null"||isNaN(n)){
            alert("please enter the number of persons!");
        }
        n=values.people;
        c=values.custom;
    
        if(c==="null"||isNaN(c)){
        alert("please enter the tip percentage!");
        }      
        values.tip=(b*(c/100))/n;
        values.total=(b/n)+values.tip;
    } 
  return (
    <div>
        <div className="container">
            <br/><br/><br/>
            <h4>S&nbsp;&nbsp;P&nbsp;&nbsp;L&nbsp;&nbsp;I<br/>T&nbsp;&nbsp;T&nbsp;&nbsp;E&nbsp;&nbsp;R</h4>
            <form className="form1">
                <div className="inptcont">
                    <br/>
                    <br/>
                    <i className="fa-solid fa-user"></i>
                    <label id="l1" for="bill">Bill</label>  <br/><br/>
                    <img id="img1" alt="image1" src="images/dollar.png"/>
                    <input type="text" name="bill" onChange={submitInfo} id="txt1" placeholder="0"   /><br/><br/><br/>
                    <label id="l2" for="tip">Select Tip %</label> <br/><br/>
                    <button id="b5" onClick={(e)=>{setPercent(5);calculate(e)}}>5%</button>
                    <button id="b10" onClick={(e)=>{setPercent(10);calculate(e)}}>10%</button>
                    <button id="b15" onClick={(e)=>{setPercent(15);calculate(e)}}>15%</button><br/>
                    <button id="b25" onClick={(e)=>{setPercent(25);calculate(e)}}>25%</button>
                    <button id="b50" onClick={(e)=>{setPercent(50);calculate(e)}}>50%</button>
                    <input type="text"  id="cb" placeholder="Custom" name="custom" onChange={Custom}/> 
                    <br/><br/><br/>     
                    <label id="l3" for="people">Number of People</label>  <br/> <br/>
                    <img id="img2" alt="image2" src="images/contact.jpg"/>
                    <input type="text" id="txt2" name="people" onChange={submitInfo} placeholder="0"/><br/>
                </div>
                <div className="outptcont">
                    <label id="l4" for="TipAmount">Tip Amount<h6>/person</h6></label> 
                    <input type="text" id="txt3" name="tip" value={values.tip} placeholder="$0.00"/><br/>
                    <label id="l5" for="Total">Total<h6>/person</h6></label> 
                    <input type="text" id="txt4" name="total" value={values.total}placeholder="$0.00"/><br/>
                    <button type="reset" id="rb">RESET</button>
                </div>
            </form>
        </div>
   </div>
  )
}
export default New;