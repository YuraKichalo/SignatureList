import React from 'react';
import {connect} from 'react-redux';

import {isActive, isNotActive, onDelete} from '../actions';
import '../styles/SignatureItem.css'

class SignatureItem extends React.Component {
    state = {
        hover: false
    };

    // <EVENTS>
    onImgEnter = () => {
        this.setState({hover: true});
    };

    onImgLeave = () => {
        this.setState({hover: false});
    };

    onCheckboxClickOn = () => {
        this.props.isActive(this.props.index); //true
    };

    onCheckboxClickOff = () => {
        this.props.isNotActive(this.props.index); //fasle
    };

    onCardRemove = () => {
        this.props.onDelete([this.props.index]);
    };
    // <EVENTS>


    //RENDER CONTENT
    renderActiveCheckbox() {
        if (this.props.isChouse && this.props.selectedItemsArr.includes(this.props.index)) {
            return <i className="inverted check icon"></i>
        } else {
            return null;
        }
    };

    renderHoveredItems() {
        if (this.state.hover) {
            return (
                <div className="hovered" onMouseEnter={this.onImgEnter}>

                    <div className="checkboxWrapper">
                        <input type="checkbox" name="example" className="checkbox" />
                        <span onClick={this.onCheckboxClickOn} className="fake">
                            {this.renderActiveCheckbox()}
                        </span>
                    </div>

                    <div className="hoveredContent">
                        <p>Sent by admin:</p>
                        <p>Installed by user:</p>
                        <p>Last edited:</p>
                        <p>NO</p>
                        <p>NO</p>
                        <p>03.04.2019 16:43</p>
                    </div>

                    <div className="hoveredFooter">
                        <a href="https://www.google.com.ua/" target="_blanck">
                            <button className="tiny ui inverted button">Use</button>
                        </a>
                        <div className="icons">
                            <i className="inverted pencil alternate icon"></i>
                            <i className="inverted eye icon"></i>
                            <i
                                onClick={this.onCardRemove}
                                className="inverted trash alternate icon">
                            </i>
                        </div>
                    </div>

                </div>
            );
        } else {
            return null;
        }
    };

    renderActiveItems() {
        if (!this.props.isChouse) {
            return this.renderHoveredItems();
        } else {
            return (
                <div className="checkboxWrapper">
                    <input type="checkbox" name="example" className="checkbox" />
                    <span
                        onClick={() => this.props.selectedItemsArr.includes(this.props.index) ?
                            this.onCheckboxClickOff() :
                            this.onCheckboxClickOn()
                        }
                        className="fake"
                    >
                        {this.renderActiveCheckbox()}
                    </span>
                </div>
            );
        }
    }

    renderHoverColor() {
        let opacity = 1;
        
        if (this.props.isChouse) {
            return .3;
        }

        if (!this.state.hover) {
            return opacity;
        } else {
            opacity = .3;
        }
        
        return opacity;
    }
    //RENDER CONTENT

    render() {
        const {url, alt} = this.props.image;

        return(
            <div className="card">
                <img
                    src={url}
                    alt={alt}
                    style={{width:'100%', height:'200px', opacity:this.renderHoverColor()}}
                    onMouseOver={this.onImgEnter}
                    onMouseOut={this.onImgLeave}
                />
                {this.renderActiveItems()}
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        isChouse: state.checkbox.isActive,
        selectedItemsArr: state.checkbox.selectedItems,
    };
};

export default connect(mapStateToProps, {
    isActive,
    isNotActive,
    onDelete
})(SignatureItem);