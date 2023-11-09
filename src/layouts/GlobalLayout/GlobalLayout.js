import React from 'react';
import { LoginGlobal } from '../../pages/Login';

export function GlobalLayout(props) {
  const { children } = props;
  const auth = null;



  return (
    <div>
      {children}
    </div>
  );
}
