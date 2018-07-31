import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import IconSelector from '../../components/icon-selector/icon-selector'

class BuyerInfo extends Component {

    state = {
        icon:'',
        name:'',
        mobile:'',
        address:'',
        info:'',
    }

    handleChange = (name, val) => {
        this.setState({[name] : val})
    }

    setIcon = (icon) => {
        this.setState({icon})
    }

    render() {
        return(
            <div>
                <NavBar>Complete Buyer's personal information</NavBar>
                <IconSelector setIcon={this.setIcon}/>
                <InputItem placeholder='please enter your name'>name:</InputItem>
                <InputItem placeholder='please enter your phone number'>mobile:</InputItem>
                <InputItem placeholder='please enter your address'>address:</InputItem>
                <TextareaItem title='introduction:' placeholder='tell me something about yourself' rows={3}/>
                <Button type='primary' onClick={console.log(this.state)}>save</Button>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(BuyerInfo)