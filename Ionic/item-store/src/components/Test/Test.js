import React, { Component } from 'react';

import { IonButton, IonToast, IonIcon } from '@ionic/react';
import { play } from 'ionicons/icons'


class ButtonExample extends Component {

    //myRef = React.createRef(this.buttonClickedHandler);
    state = {
        toastIsShow: false,
    }

    buttonClickedHandler = () => {
        this.setState({
            toastIsShow: true
        })
        setTimeout(() => {
            this.setState({
                toastIsShow: false
            })
        }, 1500)
    }
    render() {
        return (
            <div>
                <IonButton shape="round" onClick={this.buttonClickedHandler}>
                    <IonIcon icon={play} slot='start'/> Click Me
                </IonButton>
                <IonToast isOpen={this.state.toastIsShow} message="Button Clicked"></IonToast>
            </div>

        );
    }

}
export default ButtonExample;