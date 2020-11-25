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
                    <CardActions border >
                        <Button colored style={{ float: 'left'}}  >Live App</Button>
                        
                        <Button colored style={{ float: 'right'}} href="https://github.com/msurio/project2" rel="noopener noreferrer" target="_blank">Code</Button>
                   </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'url() center / cover'}}></CardTitle>
                    <CardText>
                        kzs;lkads;lka;lfkS:L
                    </CardText>
                    <CardActions border >
                        <Button colored style={{ float: 'left'}}>Live App</Button>
                        
                        <Button colored style={{ float: 'right'}}>Code</Button>
                   </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'url() center / cover'}}></CardTitle>
                    <CardText>
                        kzs;lkads;lka;lfkS:L
                    </CardText>
                    <CardActions border >
                        <Button colored style={{ float: 'left'}}>Live App</Button>
                        
                        <Button colored style={{ float: 'right'}}>Code</Button>
                   </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'url() center / cover'}}></CardTitle>
                    <CardText>
                        kzs;lkads;lka;lfkS:L
                    </CardText>
                    <CardActions border >
                        <Button colored style={{ float: 'left'}}>Live App</Button>
                        
                        <Button colored style={{ float: 'right'}}>Code</Button>
                   </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 4) {
            return (
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'url() center / cover'}}></CardTitle>
                    <CardText>
                        kzs;lkads;lka;lfkS:L
                    </CardText>
                    <CardActions border >
                        <Button colored style={{ float: 'left'}}>Live App</Button>
                        
                        <Button colored style={{ float: 'right'}}>Code</Button>
                   </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 5) {
            return (
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'url() center / cover'}}></CardTitle>
                    <CardText>
                        kzs;lkads;lka;lfkS:L
                    </CardText>
                    <CardActions border >
                        <Button colored style={{ float: 'left'}}>Live App</Button>
                        
                        <Button colored style={{ float: 'right'}}>Code</Button>
                   </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        }
    }



    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.active} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
                    <Tab>Express/Handlebars</Tab>
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