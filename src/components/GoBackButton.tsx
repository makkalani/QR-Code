// src/components/GoBackButton.tsx
import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonButton } from '@ionic/react';

const GoBackButton: React.FC = () => {
  const history = useHistory();

  const goBack = () => {
    history.push('/home');
  };

  return (
    <IonButton expand="full" onClick={goBack}>
      Go Back
    </IonButton>
  );
};

export default GoBackButton;
