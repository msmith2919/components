import React from 'react';

function Box(props){

    const [name, setName]=React.useState(props.name);
    const [age, setAge]=React.useState(props.age);
    const [color, setColor]=React.useState(props.color);

    return(
        <div>
            <h2>Name: {props.name}</h2>
            <button onClick={()=>setAge(+ age + 1 )}>I am {age} years old.</button>
            <h2>The coolest color is {props.color}</h2>
        </div>
    )
}

export default Box;
