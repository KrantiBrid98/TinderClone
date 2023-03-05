import React, { useState } from 'react';
import Button from '../component/Common/Button';
import DropDown from '../component/Common/Dropdown';
import InputText from '../component/Common/InputText'
import './CSS/onBoarding.css'

const Onboarding = () => {
  return <div className='onBoarding-container'>
    <h2>Create Account</h2>
    <div className="section-wrapper">
      <div className="section">
        {/* --------first name-------- */}
        <InputText
          label='Full Name: '
          style={{ width: '100%' }}
          type='text'
          placeholder='Full Name'
        />
        {/* --------Birthdate-------- */}
        <InputText
          label='Birthdate '
          style={{ width: '100%' }}
          type='date'
          placeholder='birthdate'
        />
        {/* ------gender------ */}
        <div style={{ display: "flex" }}>
          <DropDown
            label='Gender '
            options={['Man', 'Woman', 'More']}
          />
          {/* -------show me-------- */}
          <DropDown
            label='Show me '
            options={['Man', 'Woman', 'Both']}
          />
        </div>
        {/* --------about me------ */}
        <InputText
          label='About me '
          style={{ width: '100%' }}
          type='text'
          placeholder='About me'
        />
        <Button
          label="Create"
          onClick={() => { }}
        />
      </div>
      <div className="section">
        <InputText
          label='Profile url '
          style={{ width: '100%' }}
          type='url'
          placeholder='Profile url'
        />
        <div className='image-container'>
          <img src='https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            alt='dp'
          />
        </div>
      </div>
    </div>
  </div>
}

export default Onboarding