/* eslint-disable react/display-name */
import React, { Component } from 'react';

const LayoutWrapper = (HocComponent, props) => {
    const style = props ? props : {};
    return class extends Component {
        render() {
            return (
                <div style={style}>
                    <div style={{padding:'2px 12px', maxWidth: 1120, margin: '0 auto', width: '100%' }}>
                        <HocComponent {...this.props} />
                    </div>
                </div>

            );
        }
    }
}

export default LayoutWrapper;