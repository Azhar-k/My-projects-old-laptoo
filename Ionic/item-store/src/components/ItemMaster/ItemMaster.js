import React, { Component } from 'react';

import { IonButton, IonToast, IonIcon, IonContent, IonItem, IonLabel, IonInput } from '@ionic/react';
import { play } from 'ionicons/icons'


class ItemMaster extends Component {
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
            <IonContent>
                <IonItem>
                    <IonLabel position="floating">Item Name</IonLabel>
                    <IonInput value='' clear-input={true} type='text'></IonInput>
                </IonItem>
            </IonContent>

        );
    }

}
export default ItemMaster;