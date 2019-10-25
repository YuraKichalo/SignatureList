import React from 'react';
import {connect} from 'react-redux';

import {unSelected, onDelete} from '../actions';
import '../styles/Header.css';

class Header extends React.Component {
    //EVENTS
    onSelectClick = () => {
        this.props.unSelected();
    };

    onDeleteClick = () => {
        this.props.onDelete(this.props.selectedItemsArr);
    };
    //EVENTS

    renderSelectedHeader() {
        const {selectedItemsArr, isChouse} = this.props;

        if (isChouse) {
            return (
                <div className="selected">
                    <p onClick={this.onSelectClick}>
                        Selected({selectedItemsArr.length})
                        <i className="times icon"></i>
                    </p>
                    <p onClick={this.onDeleteClick} style={{color:"#007acc"}}>
                        <i className="blue trash alternate icon"></i>
                        Delete({selectedItemsArr.length})
                    </p>
                </div>
            );
        } else {
            return (
                <div className="unSelected">
                    <h4 className="header-title">Signature List</h4>
                    <a href="https://www.google.com.ua/" target="_blanck">
                        <button className="tiny ui primary basic button">
                            Create a Signature
                        </button>
                    </a>
                </div>
            );
        }
    };

    render() {
        return (
            <div className="header">
                {this.renderSelectedHeader()}
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        selectedItemsArr: state.checkbox.selectedItems,
        isChouse: state.checkbox.isActive,
        images: state.checkbox.imagesArr
    };
};

export default connect(mapStateToProps, {unSelected, onDelete})(Header);