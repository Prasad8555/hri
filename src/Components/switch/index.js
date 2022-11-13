import './index.css'

const Switch = props => {
    const {checkBoxStatus, toggle} = props

    return(
        <label type="checkbox" className="switch">
            <input type="checkbox" checked={checkBoxStatus} onChange={toggle} />
            <span className="slider" />
        </label>
    )
}

export default Switch