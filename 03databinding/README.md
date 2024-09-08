# data binding
-Data Binding is the process of accsessing data from source and render in UI,identifying the chnages in UI and updating 
 back into data source

 - Data Binding is classified into 2 types
 1]One way Binding
 2]Two way Binding

 -Trygve introduced the concept of data binding in application,which are separted into 3 components called
 a)Model
 b)View
 c)Controller

-Model repserent data.
-View represent UI.
-Controller represent application logic.
-Controller handle communication between model and view.

-One Way Binding allows application to access data implicitly and binding UI.but will not allow to
update the change back to model.

-React support only one way binding.
    * it is secured
    * it used less memory
    * it is faster in rendring
    * it improves the performance of application
    * however it is not good for updating tha data source
    * It requires explicit action.
-React can handle one way data binding without using DOM manipulation or DOM Methods


npm i react-router-dom


Two way data binding:
-Interally not support this.
-It is process of accessing data from source and binding to UI.
-Identifying the chnages in UI and upadting back to source.
-Javacsript handles 2-way binding using various events.
-React can use all javscript browser events.
-But chnages in value can be identified only with "onChnage" event.
-Hence two way data binidng can be managed only with "onChnage" event.

syntax:
    <input type="text" onChnage={handleNameChnages}/>
    <select onChnage={handleCityChnage}/>

function handleNameChnages(){

}

function handleCityChnage(){

}

-You have to use "event" argument to access information about elements and event
[javascript uses "this" for object details and "event" for event details]

-React can use only one argument that is "event",which provide access to both object and event details

function handleNameChnages(event){
    event.clientX   ===> Event details
    event.clinetY
    event.keyCode

    event.target.id     ===>Object details
    event.target.value
    event.target.className
}



-You can access the value from elements and initialize into state reference by using setter

const [userName,setUserName]=useState('');


function handleNameChnages(e){
    setUserName(e.target.value);
}


<input type="text" value={userName} onChnage={handleNameChnages}/>

import { useState } from "react";

export function TwoWayDataBinding() {
  const [userName, setUserName] = useState("Anil");

  return (
    <>
      <h2>Edit </h2>
      User Name:{" "}
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
    </>
  );
}
