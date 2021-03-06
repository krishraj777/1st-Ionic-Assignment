import { add } from ‘ionicons /icons’;
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { attachProps } from '@ionic/react/dist/types/components/utils';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Surya Ionic Project</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        the world is oyster
        <p>
          if you get lost, the {' '}
         <a
         target="_blank"
         rel="nooper"
         href="https://ionicframework.com/docs">
           docs </a> {' '}
           will be your guide
           </p>
      
        <IonHeader collapse="condense">
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
    <IonFabButton>
      <IonIcon icon={add} /> 
      <IonFabButton>
  </IonFab>
           <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
