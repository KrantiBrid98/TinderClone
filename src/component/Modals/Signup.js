import React, { useState } from 'react'
import Button from "../Common/Button";
import InputText from "../Common/InputText"
import './Modal.css';


const SignUp = () => {

    const [inputDetails, setInputDetails] = useState({
        username: '',
        password: '',
        cPassword: ''
    })

    const onChange = (key, value) => {
        let temp = inputDetails;
        temp[key] = value;
        setInputDetails({ ...temp })
    }

    const onCreateClick = () => {
        if(inputDetails.password !== inputDetails.cPassword){
            alert('Password and Confirm Password does not match!')
        }
    }

    return <div className="signup-modal">
        <div className="signup-modal-container">
            <h3>Enter Details!</h3>
            <div>
                <InputText
                    label='username: '
                    placeholder='username'
                    value={inputDetails.username}
                    onChange={(e) => { onChange('username', e.target.value) }}
                />
            </div>
            <div>
                <InputText
                    label='Password: '
                    type='password'
                    placeholder='Password'
                    value={inputDetails.password}
                    onChange={(e) => { onChange('password', e.target.value) }}
                />
            </div>
            <div>
                <InputText
                    label='Confirm Password: '
                    type='password'
                    placeholder='Confirm Password'
                    value={inputDetails.cPassword}
                    onChange={(e) => { onChange('cPassword', e.target.value) }}
                />
            </div>
            <Button
                isDisabled={inputDetails.username == '' || inputDetails.password == '' || inputDetails.cPassword == ''}
                label="Create"
                onClick={onCreateClick}
            />
        </div>

    </div>
}

export default SignUp