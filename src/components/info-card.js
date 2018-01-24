import React from "react"
import styled from "styled-components"
import webDev from "../assets/web_dev.png"

const Card = styled.div`
    border-radius: 6px;
    box-shadow: 0 6px 12px 0 #e1ebef;
    border: solid 1px #e8f5f9;
    margin: 10px;
    width: 100%;
    height: 400px;
    padding: 40px;
`


export default ({ children }) => (
    <Card>
        <div>
        <img 
            src={webDev} 
            alt="Service Image" 
            style={{ height: `200px`, width: `200px`}} />
        </div>
        <div>
            <h4><b>Service Title</b></h4>
            <p>This is the services description</p>
        </div>
    </Card>
)

