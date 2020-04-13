import React, {Component} from "react";
import PropTypes from 'prop-types';

class MemeGenerator extends Component
{   
    handleChangeTopText = e => {
        const value = e.target.value;
        this.props.setTopText(value);
      }    
    handleChangeBottomText = e => {
    const value = e.target.value;
    this.props.setBottomText(value);
    }  

    handleSubmit = e => {
        e.preventDefault()
        const randNum = Math.floor(Math.random() * this.props.allMemeImgs.length)
        const randMemeImg = this.props.allMemeImgs[randNum].url
        this.props.setRandomImg(randMemeImg);
        }  

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.props.setResponse(memes);
            })
    }

    render(){
        console.log(this.props)
        return(
            <div>
                     <form className="meme-form" onSubmit={this.handleSubmit}>
                         <input 
                            type="text"
                            name="topText"
                            placeholder="Top Text"
                            value={this.props.topText}
                            onChange={this.handleChangeTopText}
                        /> 
                        <input 
                            type="text"
                            name="bottomText"
                            placeholder="Bottom Text"
                            value={this.props.bottomText}
                            onChange={this.handleChangeBottomText}
                        /> 
                    
                        <button>Gen</button>
                    </form>
                    <div className="meme">
                        <img align="center" src={this.props.randomImg} alt="" />
                        <h2 className="top">{this.props.topText}</h2>
                        <h2 className="bottom">{this.props.bottomText}</h2>
                    </div>
            </div>
        )
    }
    
}

MemeGenerator.propTypes = {
    randomImg: PropTypes.string.isRequired,
    topText: PropTypes.string.isRequired,
    allMemeImgs: PropTypes.array.isRequired,
    bottomText: PropTypes.string.isRequired,
    setRandomImg: PropTypes.func.isRequired,
    setTopText: PropTypes.func.isRequired,
    setBottomText: PropTypes.func.isRequired,
    setResponse: PropTypes.func.isRequired,
  }

export default MemeGenerator;