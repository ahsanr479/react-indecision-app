console.log('app.js is running')

let appObject = {
    title: 'Indecision App',
    subtitle:'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        appObject.options.push(option);
        e.target.elements.option.value = "";
        renderFunction()
    }
}

const wipeArray = () => {
    appObject.options = []
    renderFunction();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appObject.options.length);
    const option = appObject.options[randomNum];
    alert(option);
    console.log(randomNum)
}


const appRoot = document.getElementById('app');

//JSX - JavaScript XML
const renderFunction = () => {
    const template = (
        <div>
            <h1>{appObject.title}</h1>
            {appObject.subtitle && <p>{appObject.subtitle}</p>}
            {appObject.options.length > 0 ? <p>Here are your options</p> : <p>you dont have any options</p>}
            <button disabled={appObject.options.length === 0} onClick={onMakeDecision}>What should i do</button>
            <button onClick={wipeArray}>Remove All</button>
            <ol>
                {
                    appObject.options.map((option) =>{
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template,appRoot);
};

renderFunction();