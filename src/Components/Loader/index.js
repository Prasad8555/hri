import { Audio } from "react-loader-spinner"
import './index.scss'

const Loader = () => (
    <div className="loading-container">
        <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
            />
    </div>
)

export default Loader