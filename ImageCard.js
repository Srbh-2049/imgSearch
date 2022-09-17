import React from "react";


class ImageCard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.imageRef=React.createRef();
        this.state={span:0}
    }
    setSpans=()=>
        {
            const height=(this.imageRef.current.clientHeight);

            const span=Math.ceil(height/10) + 1;

            this.setState({span});
        };
    componentDidMount()
    {
        this.imageRef.current.addEventListener('load',this.setSpans);   
    }
    render()
    {
        const {description,urls}=this.props.image;
        return (<div style={{gridRowEnd:`span ${this.state.span}`}}>
            <img alt={description} 
            src={urls.regular}
            ref={this.imageRef}/>
        </div>)
    }
}

export default ImageCard;