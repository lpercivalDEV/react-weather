//Credits:  Modified from the following tutorial - https://www.youtube.com/watch?v=204C9yNeOYI


import React from "react";  //tells file to import react object from the react package that lives in package.json

import Title from "./components/Titles";

import Form from "./components/Form";

import Weather from "./components/Weather";

//need to initialize component first -
 //creates an instance of App and that instance is extending React.Component which is a object that lives inside node modules and you open up the component with curly braces
class App extends React.Component {
    //render method returns JSX (which is why we need babel to convert js into something the browser can understand)
    render() {
        return(
            //with return you can only return ONE parent element for example the following is not allowed:
                // <div>Hello!</div>
                // <p> Yo! </p>
                // BAD! *Hisssssssss*

                //wrapper for other components
            <div>
                <Title />
                <Form />
                <Weather />
            </div>
        );
    }
}

//tells file to make this component available for other files to import
export default App;
