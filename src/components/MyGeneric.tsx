import React, { useState } from "react";

interface EventTypeProps {
  onSubmit: (form: { name: string; description: string }) => void;
};

interface GenericProp {
  name: string;
  description?: string;
}

function MyGeneric() {
  const [state, setState] = useState<GenericProp>({
    name: 'SYSNAR',
    description: 'is one of Developer'
  });


  return (
    <div>
      <h1>My Generic</h1>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}
