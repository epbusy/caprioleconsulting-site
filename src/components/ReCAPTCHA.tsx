import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface Props {
  onChange: (token: string | null) => void;
}

export function ReCaptchaComponent({ onChange }: Props) {
  return (
    <div className="flex justify-center my-4">
      <ReCAPTCHA
        sitekey="6LfvSJkqAAAAAOKWI-0tjGsRvz2GWxNJ0Hi5kopm"
        onChange={onChange}
      />
    </div>
  );
}