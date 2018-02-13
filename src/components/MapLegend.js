import React, { Component } from 'react';
import './MapLegend.css';
class MapLegend extends React.PureComponent {
    render() {
        return (
            <div className='mapLegend'>
                <div className='leftLegend'/>
                <div className='rightLegend'>
                    <div className='rightTop'>
                        <div className='eye'></div>
                        <div className='select'></div>
                    </div>
                    <div className='rightBottom'></div>
                </div>
            </div>
        )
    }
}
export default MapLegend;