import { ArrowRight } from 'phosphor-react';
import * as React from 'react';

import Button from '../../components/Button';
import PasswordCreationForm from './PasswordCreationForm';

const PasswordCreationPanel: React.FunctionComponent<{
  onComplete: () => void;
}> = ({ onComplete }) => (
  <>
    <div className="instructions-text">
      <h3>Let&apos;s start by setting a password.</h3>
      <p>
        Occasionally we will ask you for this to prevent unwanted access of your
        wallets.
      </p>
    </div>
    <PasswordCreationForm />
    <div>
      <div style={{ display: 'inline-block' }}>
        <Button
          onPress={onComplete}
          className="btn-primary"
          icon={<ArrowRight className="icon-md" />}
        >
          Continue
        </Button>
      </div>
    </div>
  </>
);

export default PasswordCreationPanel;