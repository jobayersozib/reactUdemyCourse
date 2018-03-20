

import {name} from './some-file'


const Info=(props)=>{
    return (
        <div>
            <h1>Name is: {name}</h1>
            <p>The info is : {props.info}</p>
        </div>
    )
}


const withAdminWarning=(WrappedComponent)=>{
    
    return (props)=>(
        <div>
            <p>Please don't share</p>
            <WrappedComponent {...props}/>
        </div>
       
    )
   
    
}

const withAuthenticateWarning=(WrappedComponent)=>{

    return (props)=>(
        <div>
            {props.isAuthenticate==="true"?<WrappedComponent {...props}/>:<p>User must be authenticate</p>}
        </div>
    )

}


const AdminInfo=withAdminWarning(Info)
const AuthInfo=withAuthenticateWarning(Info)

ReactDOM.render(<AuthInfo isAuthenticate="false" info="some text" />,document.getElementById("app"));