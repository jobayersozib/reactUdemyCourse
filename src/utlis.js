console.log("From utlis file here")

const Test=()=>{
    return <h1>Hellow everyone</h1>
}

class Another extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <h1>Another component</h1>
    }
}


export {Test ,Another}