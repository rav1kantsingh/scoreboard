import React from 'react';

class NotFoundPage extends React.Component {
    render() {
        return <div className='base'>
            <div className='pageNotFound'>
                <div className='message'>
                    <h2>404 Page not Found</h2>
                    <div className='message-container'>
                        <p className='message-info'> Sorry, looks like we sent you wrong way,
                            let us guide you back! Please click on </p><a href="/">main page.</a>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default NotFoundPage;
