import React from 'react';
import styled from '@emotion/styled';
import {array, string} from 'prop-types';

const Container = styled('div')`
    width: 350px;
    box-shadow: -38px 64px 210px -78px rgba(0,0,0,0.75);
    border-radius: 10px;
    background: white;
    margin: 20px;
    height: 100%;
`
const Name = styled('div')`
    background: black;
    color: white;
    font-weight: bolder;
    padding: 10px;
    width: 50%;
    margin:20px;
`
const Bio = styled('div')`
    border-left: 3px solid #6A9E67;
    padding-left: 50px;
    font-style:italic;
    font-size: 80%;
    width: 60%;
    margin: 20px;
`
const Role = styled('div')`
    padding: 10px;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bolder;
    display:flex;
    justify-content: center;
`
const Skills = styled('div')`
    text-transform: uppercase;
    font-size: 8px;
    opacity: .5;
    margin: 5px;
    display: flex;
    justify-content:right;
    margin-left: 20px;
    
`
const Skill = styled('div')`
    margin: 2px;
    padding: 3px;
    border: ${props => props.selectedSkills.includes(props.skill) ? 'none' : '1px solid' };
    color: ${props => props.selectedSkills.includes(props.skill) ? 'white' : 'black' };
    background: ${props => props.selectedSkills.includes(props.skill) ? 'rgba(106,158,103.5)' : 'white' };
`
const Image = styled('div')`
    max-width: 200px;
    overflow:hidden;
    display:flex;
    justify-content: center;
    margin-left:150px;
`
const Employee = ({name, role, bio, skills, profileImage, selectedSkills}) => {
    return (
        <Container>
            <Name>{name}</Name>
            <Image>
                <img src={profileImage} onError={e=> e.target.src=""}/>
            </Image>
            <Skills >
                {skills && skills.map((skill, i) => <Skill key={i} selectedSkills={selectedSkills} skill={skill}> {skill}</Skill> )}
            </Skills>
            <Bio>{bio}</Bio>
            <Role>{role}</Role>
        </Container>
    );
}
Employee.defaultProps={
    bio: '',
    selectedSkills: [],
    profileImage: ''
}
Employee.propTypes= {
    name: string.isRequired, 
    role: string.isRequired, 
    skills: array.isRequired, 
    selectedSkills: array,
    bio: string, 
    profileImage: string, 
}

export default Employee;