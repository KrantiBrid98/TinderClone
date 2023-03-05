import './common.css'

const InputText = ({ label, placeholder, onChange, type = 'text', style = {} }) => {

    return <div className='text-box-container'>
        <div className='label-container'>
            <label>{label}</label>
        </div>
        <input
            className='text-box'
            style={style}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
        />
    </div>
}

export default InputText