import React from 'react';
import './App.css';
import ItemMaster from '../../components/ItemMaster/ItemMaster';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
function App() {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            My App
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className='ion-padding'>
        
        <ItemMaster/>
      </IonContent>
      
    </IonApp>
  );
}

export default App;
