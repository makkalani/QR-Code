import React, { useState } from 'react';
import QRCode from 'qrcode';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonCard, IonCardContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './QRCodeGenerator.css';

const QRCodeGenerator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [qrCode, setQRCode] = useState<string | null>(null);
  const history = useHistory();

  const generateQRCode = async () => {
    try {
      const url = await QRCode.toDataURL(input);
      setQRCode(url);
      // Save QR code to localStorage
      const savedQRs = JSON.parse(localStorage.getItem('qrCodes') || '[]');
      savedQRs.push(url);
      localStorage.setItem('qrCodes', JSON.stringify(savedQRs));
    } catch (error) {
      console.error('Error generating QR code', error);
    }
  };

  const handleInputChange = (e: CustomEvent) => {
    setInput(e.detail.value!);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>QR Code Generator</IonTitle>
          <IonButton className="back-button" onClick={() => history.push('/home')}>
            &#x2190;
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="generator-content">
          <IonInput
            value={input}
            placeholder="Enter text"
            onIonChange={handleInputChange}
            className="input-field"
          />
          <IonButton onClick={generateQRCode} className="generate-button">Generate QR Code</IonButton>
          {qrCode && (
            <IonCard className="qr-card">
              <IonCardContent>
                <img src={qrCode} alt="QR Code" className="qr-image" />
              </IonCardContent>
            </IonCard>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default QRCodeGenerator;
