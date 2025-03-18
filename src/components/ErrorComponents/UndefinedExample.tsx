import { useState } from 'react';

// This type of error occurs when there is a problem with the rendering of the component.

export function UndefinedExample() {
  const [obj] = useState<{ prop?: string }>();
  return <div>{obj!.prop!.length}</div>;
}
