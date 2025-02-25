import { useEffect } from 'react';

// This type of error occurs when there is a problem inside the useEffect hook.

export function EffectExample() {
  useEffect(() => {
    throw new Error('Error with Effect');
  },[]);

  return <div></div>;
}
