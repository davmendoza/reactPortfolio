import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };

    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'url() center / cover'}}></CardTitle>
                    <CardText>
                        kzs;lkads;lka;lfkS:L
                    </CardText>
                </Card>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>Boo Chat</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>Note Taker</h1></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>Something with Mongo</h1></div>
            )
        } else if (this.state.activeTab === 4) {
            return (
                <div><h1>Handlebars and Heroku</h1></div>
            )
        } else if (this.state.activeTab === 5) {
            return (
                <div><h1>SoleMate App</h1></div>
            )
        }
    }



    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.active} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
                    <Tab>Project 1</Tab>
                    <Tab>Project 2</Tab>
                    <Tab>Project 3</Tab>
                    <Tab>Project 4</Tab>
                    <Tab>Project 5</Tab>
                    <Tab>Project 6</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

                </section>
            </div>
        )
    }
}

export default Projects;