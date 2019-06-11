import React from "react";
import styled from "styled-components";
import { Colors } from "./button";

const TabContainer = styled.div`
    width:100%;
    line-break:strict;
`;

const Tab = styled.button`
    border:none;
    background-color:${({color})=> color};
    padding:1rem;
    margin:.3rem;
    box-shadow: 3pt 3pt 3pt 0 ${({color})=> color};
    &:active {
        box-shadow:none;
    }
    float:left;
    overflow-x:auto;
`;

export default function Tabs ({
    names,
    onSelected
}) {
    const tabs = names.map((name)=>typeof name == "string" && (
        <Tab key={name} color={Colors.tertiary} onClick={()=>onSelected(name)}>{name}</Tab>
    )||typeof name == "object" && (
        <Tab key={name.key} color={Colors.tertiary} onClick={()=> onSelected(name.key)}>{name.value}</Tab>
    ))
    return (

        <TabContainer >{tabs}</TabContainer>
    )
}