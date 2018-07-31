import React, {Component} from 'react' 
import {List, Grid} from 'antd-mobile'
import PropTypes from 'prop-types'

export default class IconSelector extends Component{

    static propTypes = {
        setIcon: PropTypes.func.isRequired
    }

    state = {
        icon: null,
        text: null
    }

    constructor(props){
        super(props)
        this.iconList = []
        for(let i = 0; i < 6; i++){
            this.iconList.push({
                text:`icon${i+1}`,
                icon:require(`../../assets/icons/icon${i+1}.png`)
            })
        }
    }

    handleClick = ({text, icon}) =>{
        this.setState({icon, text})
        this.props.setIcon(text)
    }

    render(){
        const {icon} = this.state
        const listHeader = !this.state.icon ? 'please select icon' : (
            <div>
                choosed icon : {this.state.text}
            </div>
        )
        return(
            <List renderHeader={()=> listHeader}>
                <Grid data={this.iconList} columnNum={3}
                    onClick={this.handleClick}/>
            </List>
        )
    }
}

