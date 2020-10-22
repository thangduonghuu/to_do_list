import React, { Component } from 'react';

import Done from '../img/Done.svg'
import '../component/Done_list.css'
class Done_list extends Component{
 
    render(){
        const {job , onClick} = this.props;
        return(
        <div onClick={onClick} className="task">
            <p className="Done-content"> 
            <img src={Done} width="32" />
                {job.job} 
            </p>
        </div>
        )
    }
}

export default Done_list;