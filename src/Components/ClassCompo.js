import React,{Component} from "react";

class ClassCompo extends Component{
    constructor(){
        super();
        this.state = {
            name : '',
            department : '',
            rating : '',
            detaStore : []
        }

    }

    handlechange = (e) =>{
        this.setState({[e.target.name] : e.target.value})
        // console.log(e.target.name);
        // console.log([e.target.name]);
    }

    DataSubmit = () => {
        const newObj = {
            name : this.state.name,
            department : this.state.department,
            rating : this.state.rating,
        }
        this.state.detaStore.push(newObj)
        this.setState({
            detaStore : this.state.detaStore
        })
    }

    render(){
        return(
            <>
                <div>
                    <div className="form">
                            <label htmlFor="name">Name: </label>
                            <input type="text" id="name" name="name" placeholder="Enter Your Name" onChange={this.handlechange} required/><br/>

                            <label htmlFor="deprt">Department: </label>
                            <input type="text" id="deprt" name="department" placeholder="Enter Your Department" onChange={this.handlechange} required/><br/>

                            <label htmlFor="num">Rating: </label>
                            <input type="number" id="num" name="rating" placeholder="Enter Your Rating" onChange={this.handlechange} required/><br/>

                            <button onClick={this.DataSubmit}>Submit</button>
                    </div>

                        <div className="main">
                            <div className="data">
                                {this.state.detaStore.map((item,index) => {
                                    return(
                                        <div className="content" key={index}>
                                             <h4>Name: {item.name} | Department: {item.department} | Rating: {item.rating} </h4>
                                        </div>
                                    ) 
                                })}
                            </div>
                        </div>
                </div>
            </>
        )
    }
}

export default ClassCompo;