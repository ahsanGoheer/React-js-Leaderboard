import React,{Component} from "react";
import './Student.css';

export default class Student extends Component
{
    constructor(props)
    {
        super();
        this.state={
            score:0,
            success:false,
            fail:false
        }
    }

    componentDidMount()
    {
        this.setState({
            score:this.props.score
        },()=>{
            if(this.state.score>=350)
            {
                this.setState({success:true,fail:false});
                
            }
            else if(this.state.score<300)
            {
                this.setState({success:false,fail:true});
            }
            else{
                this.setState({success:false,fail:false});
            }
        });
    }

    increaseScore()
    {

        this.setState({
            score:this.state.score+1
        },()=>{
            if(this.state.score>=350)
            {
                this.setState({success:true,fail:false});
              
            }
            else if(this.state.score<300)
            {
                this.setState({success:false,fail:true});
            }
            else{
                this.setState({success:false,fail:false});
            }
        });
        
    }

    decreaseScore()
    {
        this.setState({
            score:this.state.score-1
        },()=>{
            if(this.state.score>=350)
            {
                this.setState({success:true,fail:false});
              
            }
            else if(this.state.score<300)
            {
                this.setState({success:false,fail:true});
            }
            else{
                this.setState({success:false,fail:false});
            }
        });
    }

    render()
    {
        let text ='';
        const isSuccessful= this.state.success;
        const isFailing=this.state.fail;
        if(isSuccessful&&!isFailing)
        {
            text=<span>Success !</span>;
            console.log(text);
        }
        else if(!isSuccessful&&isFailing){
            text=<span style={{backgroundColor:"red"}}>Failed !</span>;
        }
        else{
            text='';
        }


        return (
            <div className="details">
            <div className="left">
        <div className="studentName">
            {this.props.name}
            <button className="addScoreBtn" onClick={()=>this.increaseScore()}>+</button>
            <button className="minusScoreBtn" onClick={()=>this.decreaseScore()}>-</button>
        </div>
        <div className="university">{this.props.uni} {text}</div>
        
            </div>
            <div className="right">
        <div className="score-box">{this.state.score}</div>
            </div>
            </div>
        );
    }
}

