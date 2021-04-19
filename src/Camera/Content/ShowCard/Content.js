import React, { Component } from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
class Content extends Component {
    render() {
        return (
            <div>
                <LeftContent/>
                <RightContent/>
            </div>
           
        );
    }
}
export default Content;