import { useReducer } from "react";

let initialState={count:0}  //store

function reducer(state,action){
    switch(action.type){
        case "join":
                return {count:state.count+1}
        case "exit":
                return {count:state.count-1};
    }
}
export function ReducerDemo(){

    function JoinClick(){
        dispatch({type:'join'})
    }
    
    function ExitClick(){
        dispatch({type:'exit'})
    }

    const[state,dispatch]=useReducer(reducer,initialState);
    return(<div className="container-fluid">
        <div className="mt-4">
            <button className="btn btn-success" onClick={JoinClick}>Join</button>
            <button className="btn btn-danger ms-2" onClick={ExitClick}>Exit</button>
        </div>
        <h2>Live Broadcast</h2>
        <iframe title="viewer" width="400" height="200" src="https://www.youtube.com/embed/LNn3Qo58G_0"></iframe>
        <div>
            Liver Viewser :{state.count}
        </div>
    </div>)
}