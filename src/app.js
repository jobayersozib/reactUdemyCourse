


class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            options:["Option one","Option two","Option three","Option four","Option five","Option six"]

        }
        this.handleAddOptionEvent=this.handleAddOptionEvent.bind(this);
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
                <Header/>
                <hr/>
                <Action data={this.state.options} visibility={this.state.options.length>0 ? true : false}/>
                <Options/>
                <Option data={this.state.options}/>
                <Addoption handler={this.handleAddOptionEvent}/>
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
                    {this.props.data.map(x=><li onClick={this.handleRemoveAll} key={x.toString()}>{x}</li>)}
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


ReactDOM.render(<IndecisionApp/>,document.getElementById("app"));