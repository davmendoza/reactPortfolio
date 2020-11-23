import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import myImg from '../images/My-foto.jpg'

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img
                    src={myImg}
                    alt="in bryce canyon"
                    className="my-img"
                    />

                    <div className="banner-text">
                        <h1>Full Stack Developer</h1>

                        <hr/>

                        <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>

                        <div className="social-links">
                           {/* Linkedin */}
                            <a href="https://www.linkedin.com/in/david-mendoza-105486102/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                            </a>
                            {/* github */}
                            <a href="https://github.com/davmendoza" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>
                            <a href="https://www.instagram.com/zdnmdvd/" rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-instagram-square" aria-hidden="true"/>
                            </a>
                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;