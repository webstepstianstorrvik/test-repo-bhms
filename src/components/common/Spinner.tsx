import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Spinner = () => {
    return (
        <div className="spinner">
            <FontAwesomeIcon icon={faSpinner} size="5x" spin />
        </div>
    )
}

export default Spinner
