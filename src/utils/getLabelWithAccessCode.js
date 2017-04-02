import React from 'react';

export const getLabelWithAccessCode = (label, pos) => {
  const accessChar = <span className="access-key">{label[pos]}</span>;
  return (
    <span className="label">
      {label.slice(0, pos)}{accessChar}{label.slice(pos + 1)}
    </span>
  );
}

export const appendZero = (digit) => digit > 9 ? digit : ("0" + digit);