import React from 'react';

interface TaskbarProps {
  windows: { id: number; title: string }[];
}

const Taskbar: React.FC<TaskbarProps> = ({ windows }) => {
  return (
    <div className="taskbar fixed bottom-0 w-full flex items-center h-10 bg-win95Gray border-t border-win95Dark">
      <button className="start-button m-1">Start</button>
      {windows.map(win => (
        <div
          key={win.id}
          className="taskbar-item border border-win95Dark bg-win95Light px-2 m-1 text-xs"
        >
          {win.title}
        </div>
      ))}
    </div>
  );
};

export default Taskbar;
