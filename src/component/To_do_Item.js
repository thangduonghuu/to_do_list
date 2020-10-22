import React, { Component } from 'react';
import trash from '../img/trash.svg'
import './To_do_Item.css'
import ToDo from '../img/ToDo.svg'
class To_do_Item extends Component{
    render(){
        const {job , onClick , click} = this.props;
        return(
            <div>
                <p className="To_Do_Item-content">
                    <img src={ToDo} width="32" />
                    <p className="content" onClick={onClick}> 
                         {job.job} 
                    </p> 
                    <img className="trash-can" onClick={click} src={trash} width="25" />
            </p>
        </div>
        )
    }
}

export default To_do_Item;