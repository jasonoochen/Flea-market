/*
user register router component
*/ 
import React, {Component} from 'react'
import{
    NavBar, 
    WingBlank, 
    List, 
    InputItem,
    WhiteSpace,
    Radio,
    Button
} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {register} from '../../redux/actions'
import Logo from '../../components/logo/logo'
//const ListItem = List.Item

class Register extends Component { 
    state = {
        username:'',
        password:'',
        confirmpw:'',
        type:'buyer',  //buyer & seller
    }
    register = () => {
        this.props.register(this.state)
    }
    handleChange = (name, val) => {
        this.setState({
            [name] : val
        })
    }
    toLogin = () => {
        this.props.history.replace('/login')
    }
    render() { 
        // const {type} = this.state
        const {msg, redirectTo} = this.props.user
        //if redirectTo has value, redirect to main page
        if(redirectTo){
            return <Redirect to ={redirectTo}/>
        }
        return ( 
        <div>
            <NavBar>Flea &nbsp;Market</NavBar>
            <Logo/>
            <WingBlank>
                <List>
                    {msg ? <div className='error-msg'>{msg}</div> : null}
                    <InputItem clear='true' placeholder='enter your username' onChange={val => {this.handleChange('username',val)}}></InputItem>
                    <InputItem clear='true' placeholder='enter your password' type="password" onChange={val => {this.handleChange('password',val)}}></InputItem>
                    <InputItem clear='true' placeholder='re-enter password' type="password" onChange={val => {this.handleChange('confirmpw',val)}}></InputItem>
                    <List.Item>
                        <span>user type:</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Radio checked={this.state.type==='buyer'} onChange={() => this.handleChange('type', 'buyer')}>buyer</Radio>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Radio checked={this.state.type==='seller'} onChange={() => this.handleChange('type', 'seller')}>seller</Radio>
                    </List.Item>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.register}>sign up</Button>
                    <WhiteSpace/>
                    <Button onClick={this.toLogin}>sign in</Button>
                </List>
            </WingBlank>
        </div> 
        ) 
    } 
}

export default connect(
    state => ({user : state.user}),
    {register}
)(Register)