import React from 'react';

export default function Alert(props) {
  const capitalize = (str) => {
    if (!str) return '';
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Determine text color based on background color
  let textColor;
  switch (props.mode) {
    case 'light':
      textColor = 'dark';
      break;
    case 'primary':
    case 'warning':
      textColor = 'light';
      break;
    default:
      textColor = 'dark';
  }

  // Customize alert message based on background color
  let alertMsg;
  switch (props.mode) {
    case 'light':
    case 'primary':
      alertMsg = 'Success! Primary color successfuly compalied';
      break;
    case 'success':
      alertMsg = 'Success! Success color successfuly compalied';
      break;
    case 'warning':
      alertMsg = 'Success! Warning color successfuly compalied';
      break;
    default:
      alertMsg = 'An alert message.';
  }

  return (
    <div>
      <div style={{ height: '-50px' }}></div>
      {props.alert && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show text-${textColor}`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong> {alertMsg}
        </div>
      )}
    </div>
  );
}
