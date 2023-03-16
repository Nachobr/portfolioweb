import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';

const SkillsSection = () => {
    return (
        <SkillsContainer>
            <SkillsWrapper>
                <SkillsH2>My Skills</SkillsH2>
                <SkillsIcons>
                    <SkillIcon>
                        <FaHtml5 />
                        <SkillName>HTML5</SkillName>
                    </SkillIcon>
                    <SkillIcon>
                        <FaCss3Alt />
                        <SkillName>CSS3</SkillName>
                    </SkillIcon>
                    <SkillIcon>
                        <FaJs />
                        <SkillName>JavaScript</SkillName>
                    </SkillIcon>
                    <SkillIcon>
                        <FaReact />
                        <SkillName>React</SkillName>
                    </SkillIcon>
                    <SkillIcon>
                        <FaNodeJs />
                        <SkillName>Node.js</SkillName>
                    </SkillIcon>
                </SkillsIcons>
            </SkillsWrapper>
        </SkillsContainer>
    );
};

const SkillsContainer = styled.div`
 background-color: #f2f2f2;
 padding: 80px 0`;

const SkillsWrapper = styled.div`
 display: flex;
 flex - direction: column;
 align - items: center`;

const SkillsH2 = styled.h2`
 font-size: 2.5rem;
 margin - bottom: 50px`;
 
const SkillsIcons = styled.div`
 display: flex;
 flex - wrap: wrap;
 justify - content: center`;

const SkillIcon = styled.div`
 display: flex;
 flex - direction: column;
 align - items: center;
 margin: 30px`;

const SkillName = styled.p`
 font-size: 1.5rem;
 margin - top: 20px`;

export default SkillsSection;
