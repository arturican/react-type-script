import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating";

function App() {
    console.log("App rendering");
    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion title={"Список"}/>
            <Accordion title={"Меню"}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>

    );
}
function PageTitle(props: any){
    console.log("PageTitle rendering");
    return <h1>{props.title}</h1>
}

export default App;
