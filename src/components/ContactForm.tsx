import React, { useState } from 'react';
import { useContactForm } from '../hooks/useContactForm';
import { FormField } from './ui/form/FormField';
import { SubmitButton } from './ui/buttons/SubmitButton';
import { useFormValidation } from './ui/form/hooks/useFormValidation';
import type { ValidationField } from './ui/form/utils/types';
import type { ContactEmailData } from '../services/email/types/contact';

const INITIAL_DATA: ContactEmailData = {
  fullName: '',
  email: '',
  subject: '',
  message: ''
};

const REQUIRED_FIELDS: ValidationField[] = ['fullName', 'email', 'subject', 'message'];

export function ContactForm() {
  const [formData, setFormData] = useState<ContactEmailData>(INITIAL_DATA);
  const { sendEmail, isLoading } = useContactForm();
  const { errors, validateFormField, validateForm, clearErrors } = useFormValidation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (field: keyof ContactEmailData) => {
    validateFormField(field as ValidationField, formData[field]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm(formData, REQUIRED_FIELDS)) {
      return;
    }

    const success = await sendEmail(formData);
    if (success) {
      setFormData(INITIAL_DATA);
      clearErrors();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        onBlur={() => handleBlur('fullName')}
        error={errors.fullName}
        required
      />

      <FormField
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={() => handleBlur('email')}
        error={errors.email}
        required
      />

      <FormField
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        onBlur={() => handleBlur('subject')}
        error={errors.subject}
        required
      />

      <FormField
        label="Message"
        name="message"
        type="textarea"
        value={formData.message}
        onChange={handleChange}
        onBlur={() => handleBlur('message')}
        error={errors.message}
        required
        rows={4}
      />

      <SubmitButton 
        isSubmitting={isLoading}
        text="Send Message"
        loadingText="Sending..."
      />
    </form>
  );
}