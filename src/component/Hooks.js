import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';

const HookCounter = () => {
    const [count, setIncrement] = useState(0);
    const [showAlert, setShowAlert] = useState(false);

    const incrementByFive = () => {
        setIncrement(count + 1)
    }

    const drecrement = () => {
        console.log(count)
        if (count >= 1) {
            return setShowAlert(true)
        }
    }

    const handleOk = () => {
        setShowAlert(false)
    }

    const handleCancel = () => {
        setShowAlert(false)
    }

    console.log('showAlert', showAlert)
    return (
        <div>
            <h1>Your count: {count}</h1>
            {showAlert === true ?
                <Modal
                    visible={showAlert}
                    title="Please Review My 1st Hooks code , Thank u"
                    onOk={handleOk}
                    onCancel={handleCancel}
                ></Modal> : ''}
            <Button type="primary" onClick={count >= 1 ? drecrement : incrementByFive} >Increment</Button>
        </div>
    )
}

export default HookCounter; 