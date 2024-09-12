import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>QR Code App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="home-content">
          <div className="welcome-text">
            <h1>Welcome to the QR Code App</h1>
            <p>Generate and manage your QR codes with ease.</p>
          </div>
          <div className="card-container">
            <div className="card">
              <h2>Generate QR Code</h2>
              <IonButton className="card-button" onClick={() => history.push('/generate')}>Get Started</IonButton>
            </div>
            <div className="card">
              <h2>Display QR Codes</h2>
              <IonButton className="card-button" onClick={() => history.push('/display')}>View QR Codes</IonButton>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
