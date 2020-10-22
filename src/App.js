import React, { Component } from 'react';
import './App.css';
import Doing_list from "./component/Doing_list"
import To_do_Item from "./component/To_do_Item"
import Done_list from './component/Done_list'
import 'bootstrap/dist/css/bootstrap.min.css';
import add from './img/add.svg'
import update from 'react-addons-update';
class App extends Component {
    constructor(){
      super();
      this.state = {
        newItem:"",
        Items:
        [
          { job: " đi học " , status: "Do" , Date:"10-11-2000"},
          { job: " Học react " , status: "Do" , Date: "28-2-2000"},
          { job: " chơi game " , status: "Do" , Date: "3-2-2000"}
        ],
        ItemStatus: ["Do" , "Doing" , "Done"],
        show: false,
      } 
      this.textInput = this.textInput.bind(this);
      this.onChange = this.onChange.bind(this);
     // this.backToDoList = this.backToDoList.bind(this);   
    }

  removeItems(item){
    const {Items} = this.state;
    const index = Items.indexOf(item)
    
    return()=>{
      this.setState({
        Items:[
          ...Items.slice(0,index),
          ...Items.slice(index+1)
        ]
      })
    }
  }
  changeStatus(item){
      const {Items} = this.state;
      const index = Items.indexOf(item)
      const {ItemStatus} = this.state;
      const ThisStatus = ItemStatus.indexOf(item.status);
      return ()=>{
        this.setState({
            Items:[
              ...Items.slice(0 , index),
              {
                ...item, status: ItemStatus[(ThisStatus + 1)%3]
              },
              ...Items.slice(index+1)
            ]
          }) 
      };
    }
    timeOut(item){   
      const {Items} = this.state;
      const index = Items.indexOf(item)
      let runTime =  setTimeout(() => {
      this.setState(update(this.state, {
            Items: {
            [index]: {
              $set: {...item, status: "Do"}
            }
          }
        }));
        }, 2000);
      return ()=> clearTimeout(runTime);
    }
    textInput(event){
      var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      let text = event.target.value;
      if(event.keyCode === 13){
      if(!text || text===''){
        return;
      }

      text = text.trim();
      if(!text){return;}
            
      this.setState({
        newItem:"",  
        Items:[
             {
              job: text, status: "Do", Date: date
            },
            ...this.state.Items,  
          ]
      })
    }
  }
  onChange(event){
    this.setState({
      newItem: event.target.value,
    })
  
  }
    showInput(){
      this.setState(
          {
            show: !this.state.show
          }
      )
    }
  render(){
    const {Items} = this.state;
    return ( 
      <div className="container">
          <div className="Do">
            <div className="add-job">
            <h3>         To Do List         </h3> 
            <button className="button"><img src={add} onClick={() => this.showInput()} width="52px"/></button>
            </div>
            {
                this.state.show?<input type="text"
                 onKeyUp={this.textInput} 
                 onChange={this.onChange} 
                 value={this.state.newItem} 
                 className="txtb" placeholder="Nhập Công Việc Bạn muốn làm" /> :null
            }
            {
            Items.filter(item => item.status==="Do" ).map((item , index) => 
              <To_do_Item 
              key={index} 
              job = {item} 
              click = {this.removeItems(item)}
              onClick={this.changeStatus(item)}/>)
            }
          </div>
      <div className="Doing">
        <h3>      Doing List        </h3>
            {
            Items.filter(item => item.status==="Doing" ).map((item , index) => 
            <Doing_list
            key={index} 
            job = {item} 
           
           // timeOut ={this.timeOut(item)}
            onClick={this.changeStatus(item)}
            />)
            }
      </div>
      <div className="Done">
          <h3>          Done         </h3>
         { 
         Items.filter(item => item.status==="Done" ).map((item , index) => 
         <Done_list
            key={index} 
            job = {item} 
         />)
         }
  </div>
</div>
    );
  };
}

export default App;
