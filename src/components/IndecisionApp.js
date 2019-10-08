import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state = {
        options:[],
        selectedOption:undefined
    }

    componentDidMount = () => {
       try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options){
                this.setState(() => ({options}));
        }
       }catch(e){
            //Do nothing at all
       }
    }

    componentDidUpdate=(prevProps,prevState) => {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
            console.log('saving data');
        }
    }

    componentWillUnmount= () =>{
        console.log('component will unmount')
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption:undefined}));
    }

    handleDeleteOptions= () =>{
        this.setState(() => ({ options:[] }));
    }

    handlePick= () => {
        const randomIndex = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomIndex];
        // alert(option);
        this.setState(() => ({
            selectedOption: option
        }));
    }

    handlDeleteOption= (optionToRemove) => {
       this.setState((prevState) => ({
           options: prevState.options.filter((option) => {
               return optionToRemove !== option;
           })
       }));
    }

    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add option';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((preState) => (
             {
               options: preState.options.concat([option])
            }
        ))
    }

    render(){
        const subTittle = "Put you life in the hands of a computer";
        const options = this.state.options;
        return (
            <div>
                <Header subTittle = {subTittle}/>
                <Action 
                    hasOptions={options.length > 0}
                    handlePick = {this.handlePick}
                />
                <Options options={options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handlDeleteOption = {this.handlDeleteOption}
                />
                <AddOption handleAddOption = {this.handleAddOption} />
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>
        )
    }
}