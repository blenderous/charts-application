import React from 'react';

class ListItem extends React.Component {

    render() {
        return(
            <li keyprop={this.props.keyProp}>
                <button onClick={this.props.onClick} className="sidebar__button">{this.props.text}</button>
            </li>
        );
    }

}

export default ListItem;