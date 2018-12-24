import React from 'react';
import axios from 'axios';
import Employee from './Employee';
import Filter from './Filter';
import styled from '../node_modules/@emotion/styled';


const Container = styled('div')`
    background-color:#F1F1F1;
    display:flex;
    flex-wrap: wrap;
    border: 0;
    padding: 0;
`
const Header = styled('div')`
    width: 350px;
    box-shadow: -38px 64px 210px -78px rgba(0,0,0,0.75);
    border-radius: 10px;
    background: white;
    margin: 20px;
    padding-bottom: 20px;
    position: relative;
    height: 100%;
    ::before {
        content: '';
        position: absolute;
        top: 0;
        right: 10%;
        height: 100%;
        width: 20%;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQYV2NkYGD4z8DAwMgABXAGNgGwSgwVAFbmAgXQdISfAAAAAElFTkSuQmCC)repeat;

    }
    h1{
        font-size: 18px;
        font-family: 'arial';
        text-transform: uppercase;
        padding: 10px;
    }
`

export default class App extends React.Component {
    state = {
        employees: [], 
        skills: [], 
        filter: [],
    }
    componentDidMount(){
        this.getEmployees();
    }
    getEmployees = () => {
        const url = 'http://sys4.open-web.nl/employees.json';
        axios.get(url).then((response) => {
            this.setState({employees: response.data.employees}, () => this.setSkillFilters())
        })
    }
    setSkillFilters = () => {
        const skills = this.state.employees.reduce((acc, employee)=> {
            employee.skills.forEach(skill => {
                if(!acc.includes(skill)){
                    acc.push(skill);
                }
            })
            return acc;
        }, []);
        this.setState({skills});
    }
    onClickHandler = (e) => {
        const value = event.target.value;
        let arr = [...this.state.filter];
        if(arr.includes(value)){
            arr = arr.filter(item => item !== value);
        }else {
            arr.push(value);
        }
        this.setState({filter: arr});
    }
    render() {
        return (
            <Container>
                <Header>
                    {this.state.skills && <h1> Selecteer skill</h1>}
                    {this.state.skills.map(
                        (skill, i) => 
                        <Filter key={i} skill={skill} checked={this.state.filter.includes(skill)} onClickHandler={this.onClickHandler} />
                    )}
                </Header>
                {this.state.employees.filter(
                    employee => employee.skills.some(
                        skill => this.state.filter.includes(skill)
                    ))
                    .map((employee, i)=> <Employee key={i} {...employee} selectedSkills={this.state.filter} />)
                }
            </Container>
        )
        
    }
}
