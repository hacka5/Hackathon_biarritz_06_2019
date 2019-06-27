import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Navbar, Row, Col } from 'reactstrap';
import Home from "./components/home/Home";
import Campuses from "./components/campus/Campuses";
import Students from "./components/students/Students";
import Matches from "./components/matches/Matches";
import Ranking from "./components/ranking/Ranking";
import Footer from './components/footer/Footer';

const RouterFile = () => {
    return (
        <div>
            <Router>
                <Navbar
                    color='dark'
                    expand='md'
                    className='d-flex justify-content-around flex-nowrap col-12'
                    style={{ fontSize: '12px', height:'inherit', padding:25 }}
                >
                <Row>
                <Col sm-6>
                    <NavLink exact to='/' activeStyle={{ color: 'red' }} style={{ color: 'white', textDecoration: 'none', fontSize:'1.5em', padding:20 }}>
                        HOME
                    </NavLink>
                    </Col>
                    <Col sm-6>

                    <NavLink to='/campuses' activeStyle={{ color: 'red' }} style={{ color: 'white', textDecoration: 'none', fontSize:'1.5em', padding:20 }}>
                        CAMPUSES
                    </NavLink>
                    </Col>

                    <Col sm-6>

                    <NavLink to='/students' activeStyle={{ color: 'red' }} style={{ color: 'white', textDecoration: 'none', fontSize:'1.5em', padding:20 }}>
                        STUDENTS
                    </NavLink>
                    </Col>
                    <Col sm-6>

                    <NavLink to='/matches' activeStyle={{ color: 'red' }} style={{ color: 'white', textDecoration: 'none', fontSize:'1.5em', padding:20 }}>
                        MATCHES
                    </NavLink>
                    </Col>
                    <Col sm-6>

                    <NavLink to='/ranking' activeStyle={{ color: 'red' }} style={{ color: 'white', textDecoration: 'none', fontSize:'1.5em', padding:20 }}>
                        RANKING
                    </NavLink>
                    </Col>

                    </Row>

                </Navbar>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/campuses' component={Campuses} />
                    <Route exact path='/students' component={Students} />
                    <Route exact path='/matches' component={Matches} />
                    <Route exact path='/ranking' component={Ranking} />
                </Switch>
                <Footer />
            </Router>
            
        </div>
    );
};

export default RouterFile;