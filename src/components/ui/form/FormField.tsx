import React from 'react';
import { FormLabel } from './FormLabel';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import { FormSelect } from './FormSelect';
import { FormError } from './FormError';
import { getFieldLabel, getFieldPlaceholder } from './utils/labels';
import type { FormFieldProps } from './utils/types';

export function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  required = false,
  rows = 4,
  options = []
}: FormFieldProps) {
  const fieldLabel = label || getFieldLabel(name);
  const placeholder = getFieldPlaceholder(name);

  const commonProps = {
    id: name,
    name,
    value,
    onChange,
    onBlur,
    required,
    hasError: !!error,
    placeholder
  };

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return <FormTextarea {...commonProps} rows={rows} />;
      case 'select':
        return <FormSelect {...commonProps} options={options} />;
      default:
        return <FormInput {...commonProps} type={type} />;
    }
  };

  return (
    <div className="space-y-1">
      <FormLabel
        htmlFor={name}
        label={fieldLabel}
        required={required}
      />
      {renderInput()}
      {error && <FormError message={error} />}
    </div>
  );
}