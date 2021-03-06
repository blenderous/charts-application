import React from 'react';

class ListItem extends React.Component {

    render() {
        return(
            <li keyprop={this.props.keyProp}>
                <button style={this.props.style} onClick={this.props.onClick} className="sidebar__button">{this.props.children}</button>
            </li>
        );
    }

}

export default ListItem;