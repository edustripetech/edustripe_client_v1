import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

import './home.css';

const Home = () => {
  return (
    <div>
      <div>Home page</div>
      <div>
        <Button
          label='Sign in'
          type='submit'
          id='signin'
          className="signin"
          style={{
            background: '#109CF1',
            color: '#fff',
            cursor: 'pointer',
            borderRadius: '5px',
            border: '1px solid #109CF1',
            outline: 'none',
            height: '2rem',
            padding: '5px',
            height: '2.5rem',
            fontSize: '24px',
            textAlign: 'center',
            alignItems: 'center',
            margin: '15px 0',
            width: '19.5rem',
          }}
        />
      </div>
      <div>
        <Input

        />
      </div>
    </div>
  )
};

export default Home;
