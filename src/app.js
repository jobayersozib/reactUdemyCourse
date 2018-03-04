
const options=["Option one","Option two","Option three","Option four","Option five"]
const obj={
    name:"jobayer",
    getName(){
        return this.name;
    }
}
console.log(obj.getName());
class IndecisionApp extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <hr/>
                <Action/>
                <Options/>
                <Addoption/>
            </div>
        )
    }
}

class Header extends React.Component {
    render(){
        return(<div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>)
    }
}

class Action extends React.Component{
    handlePick(){
        alert("Ouch!!");
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should i do ?</button>
            </div>
        )
    }
}

class Options extends React.Component{
   
    render(){
        return(
           
            <div>
                <h3>Options below</h3>
                <Option data={options}/>
               
                <hr/>
            </div>
        )
    }
}

class Option extends React.Component{
   
    constructor(props){
        super(props);
        this.handleRemoveAll=this.handleRemoveAll.bind(this);
        console.log(this.props);
    }
    handleRemoveAll(){
        alert(this.props.data);
    }
    render(){
        return(
            <div>
                <ul>
                    {this.props.data.map(x=><li key={x.toString()}>{x}</li>)}
                </ul>
                <button onClick={this.handleRemoveAll}>Remove all</button>
           </div>
        );
    }
}

class Addoption extends React.Component{
    handleAddOption(e){
      e.preventDefault();
      if(e.target.elements.addOption.value.length>0){
        alert(e.target.elements.addOption.value)
      }
       
    }
    render(){
        return(
            <div>
                <form id="add-action" onSubmit={this.handleAddOption}>
                    <input type="text" name="addOption" placeholder="Enter your option"/>
                    <button>Add action</button>
                </form>
            </div>
        );
       
    }
}


ReactDOM.render(<IndecisionApp/>,document.getElementById("app"));