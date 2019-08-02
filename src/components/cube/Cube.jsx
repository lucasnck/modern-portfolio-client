import React from 'react'

export default (props) => {
    return <div className={ `cube-item ${props.color != undefined ? props.color : ''}` }>
        <h2>{props.name}</h2>
        <div className={'cube-wrapper'}>
            <div className="cube">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
}