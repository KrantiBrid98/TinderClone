import './common.css'

const DropDown = ({ label, options, onChange, style = {} }) => {

    return <div className='dropdown-container'>
        <div className='label-container'>
            <label>{label}</label>
        </div>
        <div className='options-wrapper'>
            <select className='text-box'>
                {options.map(o => <option
                    value={o}
                >{o}</option>)}
            </select>
        </div>
    </div>
}

export default DropDown