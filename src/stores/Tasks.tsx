import React from 'react';

interface ITasks {
  onDelete: (id: string) => void;
  onFinish: (id: string) => void;
}

const Tasks = React.createContext<ITasks | null>(null);

export default Tasks;
