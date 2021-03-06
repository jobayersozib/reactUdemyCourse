

// var template=(
//     <div>
//         <h1>This jsx from app.js</h1>
//         <p>Some info</p>
//     </div>
// ); 
// var Indecision={
//     title:"Title here update",
//     subTitle:"Subtitle here"
// }
// var templateTwo=(
//             <div>
//                 <h1>Title: {Indecision.title}</h1>
//                 {Indecision.subTitle && <p>Subtitle: {Indecision.subTitle}</p>}
//                 <p>{Indecision.options ? 'Some options' : 'No options'} </p>
//             </div>
// )
// var appRoot=document.getElementById("app");

// ReactDOM.render(templateTwo,appRoot);

// let count=0;


// const addOne=()=>{
//     count++;
//     renderCounter();
//  }

//  const renderCounter=()=>{
//     const templateTwo=(
//         <div>
//             <h1>Count: {count}</h1>
//             <button id="my-id" onClick={addOne} className="button">+1</button>
//         </div>
//     )
//     //console.log(templateTwo);
//     ReactDOM.render(templateTwo,document.getElementById("app"));
//  }

//  renderCounter();

class CounterToggle extends React.Component{
    render(){
        return (
            <div>
                <Counter count={5}/>
                <Toggle/>
            </div>
        )
    }
}

class Counter extends React.Component{
    
    constructor(props){
        super(props)
        
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state={
            count:this.props.count
        }
    }
    handleAddOne(){
        this.setState((preStates)=>{
            return {
                count:preStates.count+1
            };
        })
    }
    handleMinusOne(){
        this.setState((preStates)=>{
            return {
                count:preStates.count-1
            };
        })
    }
    handleReset(){
        this.setState((preStates)=>{
            return {
                count:0
            };
        })
    }
    render(){
        return(
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

Counter.defaultProps={
    count:10
}

class Toggle extends React.Component{
    constructor(props){
        super(props)
        this.handleToggle=this.handleToggle.bind(this);
        this.state={
            display:"none",
        }
    }
    handleToggle(){
        this.setState((preState)=>{
            let toggleValue= preState.display==="none" ? "show" : "none"
            
            return {
               display:toggleValue
            }
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.handleToggle}>Click</button>
                {this.state.display!=="none" && <p>Display details</p>}
            </div>
        )
    }
}


ReactDOM.render(<CounterToggle/>,document.getElementById("app"));