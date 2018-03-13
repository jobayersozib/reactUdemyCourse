
import React from 'react'
import ReactDOm from 'react-dom'
import Modal from 'react-modal';
import './styles/style.scss'
import 'normalize.css/normalize.css'
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            options:[],
            visibility:true

        }
        this.handleAddOptionEvent=this.handleAddOptionEvent.bind(this);
        this.handleRemoveOption=this.handleRemoveOption.bind(this);
        this.handleModalVisibility=this.handleModalVisibility.bind(this);
    }

    handleModalVisibility(e){
        this.setState(()=>({
            visibility:false
        })
        
    );

        console.log(this.state.visibility)
       
    }
    handleRemoveOption(e){
        e.preventDefault();
        const tId=e.target.getAttribute("id");
        this.setState((pre)=>{
            options:delete pre.options[tId];
        })
        console.log(e.target.getAttribute("id"));
    }
    handleAddOptionEvent(e){
        e.preventDefault();
        const value=e.target.elements[0].value;
        this.setState((pre)=>{
            options:pre.options.push(value);
        })
    }
    render(){
        return (
            <div>
                <Header title="Title here" subTitle="Put your life in the hands of a computer (sub)"/>
                <hr/>
                <Action data={this.state.options} visibility={this.state.options.length>0 ? true : false}/>
                <Options/>
                <Option data={this.state.options} handleRemove={this.handleRemoveOption}/>
                <Addoption handler={this.handleAddOptionEvent}/>
                <Modal isOpen={this.state.visibility}
                       style={customStyles}
                       contentLabel="Example Modal">
                       <div>
                        <h3>Hellow there</h3>
                        <p>Some text here</p>
                        <button onClick={this.handleModalVisibility}>Close</button>
                       </div>
                </Modal>       
            </div>
        )
    }
}

const Header=(props)=>{
    
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    )
}
Header.defaultProps={
    title:"Indecision",
    subTitle:"Put your life in the hands of a computer"
}
// class Header extends React.Component {
//     render(){
//         return(<div>
//                 <h1>Indecision</h1>
//                 <h2>Put your life in the hands of a computer</h2>
//             </div>)
//     }
// }

class Action extends React.Component{
    constructor(props){
        super(props)
        this.handlePick=this.handlePick.bind(this);
    }
    handlePick(){
        console.log(this.props.data[this.props.data.length-1]);
    }
    render(){
        return (
            <div>
                <button disabled={this.props.visibility ? "":"disabled"} onClick={this.handlePick}>What should i do ?{this.props.visibility}</button>
            </div>
        )
    }
}

class Options extends React.Component{
   
    render(){
        return(
           
            <div>
                <h3>Options below</h3>
               
               
                <hr/>
            </div>
        )
    }
}

class Option extends React.Component{
   constructor(props){
        super(props);
        this.handleRemoveAll=this.handleRemoveAll.bind(this);
        //console.log(this.props);
    }
    handleRemoveAll(e){
        e.preventDefault()
       console.log(e.target.textContent);
    }
    render(){
        return(
            <div>
                <ul>
                    {this.props.data.map((x,index)=>{
                       return <li onClick={this.handleRemoveAll} id={index} key={index}>{x}-----<a id={index} onClick={this.props.handleRemove} href="#">Remove</a></li>
                    })
                }
                </ul>
                <button onClick={this.handleRemoveAll}>Remove all</button>
           </div>
        );
    }
}

class Addoption extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOption=this.handleAddOption.bind(this);
       
        
    }
    handleAddOption(e){
      e.preventDefault();
      if(e.target.elements.addOption.value.length>0){
        alert(e.target.elements.addOption.value)
      }
      
     
    }
    render(){
        return(
            <div>
                <form id="add-action" onSubmit={this.props.handler}>
                    <input type="text" name="addOption" placeholder="Enter your option"/>
                    <button>Add action</button>
                </form>
            </div>
        );
       
    }
}

const User=(props)=>{
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

ReactDOM.render(<IndecisionApp/>,document.getElementById("app"));

class OldSyntax{
    constructor(){
        this.name='mike'
    }
}
const obj=new OldSyntax()

console.log(obj);

class NewSyatax{
    name="jobayer"
}

console.log(new NewSyatax())