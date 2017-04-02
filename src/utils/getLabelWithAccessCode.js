import React from 'react';

export const getLabelWithAccessCode = (label, pos) => {
  const accessChar = <span className="access-key">{label[pos]}</span>;
  return (
    <span className="label">
      <span>{ label.slice(0, pos) }</span>
      { accessChar }
      <span>{label.slice(pos + 1) }</span>
    </span>
  );
}

export const appendZero = (digit) => digit > 9 ? digit : ("0" + digit);