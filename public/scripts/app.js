'use strict';

console.log('app.js is running');

var appObject = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        appObject.options.push(option);
        e.target.elements.option.value = "";
        renderFunction();
    }
};

var wipeArray = function wipeArray() {
    appObject.options = [];
    renderFunction();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * appObject.options.length);
    var option = appObject.options[randomNum];
    alert(option);
    console.log(randomNum);
};

var appRoot = document.getElementById('app');

//JSX - JavaScript XML
var renderFunction = function renderFunction() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            appObject.title
        ),
        appObject.subtitle && React.createElement(
            'p',
            null,
            appObject.subtitle
        ),
        appObject.options.length > 0 ? React.createElement(
            'p',
            null,
            'Here are your options'
        ) : React.createElement(
            'p',
            null,
            'you dont have any options'
        ),
        React.createElement(
            'button',
            { disabled: appObject.options.length === 0, onClick: onMakeDecision },
            'What should i do'
        ),
        React.createElement(
            'button',
            { onClick: wipeArray },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            appObject.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderFunction();
