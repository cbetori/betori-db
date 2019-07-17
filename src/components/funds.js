import React from 'react'
import {connect} from 'react-redux'

export default function Funds(props){
    return(
        <div>
            Funds: {props.result}
        </div>
    )
}

function mapStateToProps(state){
    return{
        result: state.funds
    }
}

connect(mapStateToProps)(Funds)
