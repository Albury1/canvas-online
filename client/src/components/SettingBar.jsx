import React from 'react'
import '../styles/toolbar.scss'
import toolState from "../store/toolState";

const SettingBar = () => {
    return (
        <div className="setting-bar">
            <label htmlFor="line-width" style={{margin: 10}}>Толщина линии</label>
            <input
                onChange={e => toolState.setLineWidth(e.target.value)}
                style={{margin: "10px 10px 8px"}}
                id="line-width"
                type="number"
                defaultValue={1}
                required min={1} max={50} />
            <label htmlFor="stroke-color" style={{margin: 10}}>Цвет обводки</label>
            <input onChange={
                e => toolState.setStrokeColor(e.target.value)}
                   id="stroke-color"
                   type="color"/>
        </div>
    )
}

export default SettingBar