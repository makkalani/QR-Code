import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './QRCodeDisplay.css';

const QRCodeDisplay: React.FC = () => {
  const [qrCodes, setQRCodes] = useState<string[]>([]);
  const history = useHistory();

  useEffect(() => {
    // Load QR codes from localStorage
    const savedQRs = JSON.parse(localStorage.getItem('qrCodes') || '[]');
    setQRCodes(savedQRs);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Display QR Codes</IonTitle>
          <IonButton className="back-button" onClick={() => history.push('/home')}>
            &#x2190;
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="display-content">
          {qrCodes.length === 0 ? (
            <p>No QR codes generated yet.</p>
          ) : (
            <div className="qr-grid">
              {qrCodes.map((url, index) => (
                <IonCard key={index} className="qr-card">
                  <IonCardContent>
                    <img src={url} alt={`QR Code ${index}`} className="qr-image" />
                  </IonCardContent>
                </IonCard>
              ))}
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default QRCodeDisplay;
