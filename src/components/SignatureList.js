import React from 'react';
import {connect} from 'react-redux';

import '../styles/SignatureList.css';
import SignatureItem from './SignatureItem';

class SignatureList extends React.Component {
    onCardRemove = (index) => {
        const images = Object.assign([], this.props.images); //copy of state arr
        images.splice(index, 1);
        this.setState({imagesArr: images});
    };

    renderList() {
        return this.props.images.map((image, index) => {
            return <SignatureItem
                image={image}
                key={index}
                index={index}
                onCardRemove={this.onCardRemove}
            />
        });
    }

    render() {
        return(
            <div className="SignatureList">
                {this.renderList()} 
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {images: state.images.imagesArr}
};

export default connect(mapStateToProps)(SignatureList);