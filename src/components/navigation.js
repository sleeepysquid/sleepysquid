import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

import GithubIcon from "react-icons/lib/go/mark-github"
import logo from "../assets/sleepysquid_blue.svg"
import typography, { rhythm, scale } from "../utils/typography"

const Navbar = styled.div`
    height: 75px;
    margin: auto;
    z-index: 1;
    left: 0px;
    right: 0px;
`;

const NavItemList = styled.ul`
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 10px;
    list-style: none;
    font-size: 20px;
    li > a {
        color: #224F90;
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
                            style={{ height: `100%`, width: rhythm(10)}} />
                    </Link>
                </li>
                {/* <NavItem linkTo="/services">Services</NavItem>
                <NavItem linkTo="/tutorials">Tutorials</NavItem>
                <NavItem linkTo="/blog">Blog</NavItem> */}
                {/* <li style={{display: `inline-block`, margin: `20px`}}>
                    <a href="https://github.com/sleeepysquid" title="GitHub">
                        <GithubIcon style={{ verticalAlign: `center` }} />
                    </a>
                </li> */}
            </NavItemList>
        </Navbar>
    )
}