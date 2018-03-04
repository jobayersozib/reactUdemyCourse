
const options=["Option one","Option two","Option three","Option four","Option five"]

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
    handleRemoveAll(){
        alert("Ouch!!s");
    }
    render(){
        return(
           
            <div>
                <h3>Options below</h3>
                <Option/>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                <hr/>
            </div>
        )
    }
}

class Option extends React.Component{
    render(){
        return(
            <ul>
                {options.map(x=><li key={x.toString()}>{x}</li>)}
           </ul>
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