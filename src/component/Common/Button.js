import './common.css'

const Button = ({ label, isDisabled = false, onClick = () => { } }) => {

    return <div className='button-container'>
        <button
            className={isDisabled ? 'disabled-button' : 'primary-button'}
            onClick={onClick}
            disabled={isDisabled}
        >
            {label}
        </button>
    </div >
}

export default Button