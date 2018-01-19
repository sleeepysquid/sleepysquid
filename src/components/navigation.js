import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

import GithubIcon from "react-icons/lib/go/mark-github"
import logo from "../assets/sleepysquid_white.svg"
import typography, { rhythm, scale } from "../utils/typography"

const Navbar = styled.div`
    height: 75px;
    max-width: 1400px;
    margin: auto;
    z-index: 1;
    left: 0px;
    right: 0px;
`;

const NavItemList = styled.ul`
    display: flex;
    justify-content: center;
    padding: 10px;
    list-style: none;
    font-size: 20px;
    li > a {
        color: #fff;
    }
`;

const NavItem = ({ linkTo, children }) => (
    <li style={{ 
        display: `inline-block`,
        margin: 20,
        
         }}>
        <Link to={linkTo} style={{ textDecoration: `none`}}>
            {children}
        </Link>
    </li>
)

export default () => {
    return (
        <Navbar>
            <NavItemList>
                <li style={{ marginRight: `auto`}}>
                    <Link 
                        to="/" 
                        style={{ display: `inline-block`}}>
                        <img 
                            src={logo} 
                            alt="" 
                            style={{ height: rhythm(5), width: rhythm(10)}} />
                    </Link>
                </li>
                <NavItem>Home</NavItem>
                <NavItem>Services</NavItem>
                <NavItem>Tutorials</NavItem>
                <NavItem>Blog</NavItem>
                <li style={{display: `inline-block`, margin: `20px`}}>
                    <a href="https://github.com/sleeepysquid" title="GitHub">
                        <GithubIcon style={{ verticalAlign: `center` }} />
                    </a>
                </li>
            </NavItemList>
        </Navbar>
    )
}