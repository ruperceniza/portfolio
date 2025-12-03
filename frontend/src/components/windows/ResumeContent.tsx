import React, { memo } from 'react';

const ResumeContent: React.FC = memo(() => {
  return (
    <div className="w-full h-full flex flex-col bg-[#c0c0c0] overflow-hidden">
      <div className="bg-[#c0c0c0] p-1">
        <div className="flex gap-1 border-b border-[#808080] pb-1">
          <a 
            href="/resume.pdf" 
            download
            className="h-7 flex items-center bg-[#c0c0c0] text-[12px] text-black no-underline whitespace-nowrap font-win95"
            style={{ 
              border: '2px solid',
              borderTopColor: 'white',
              borderLeftColor: 'white',
              borderRightColor: '#404040',
              borderBottomColor: '#404040',
              boxShadow: 'inset -1px -1px #808080, inset 1px 1px #ffffff',
              fontFamily: "'W95FA', sans-serif",
              paddingLeft: '8px',
              paddingRight: '8px',
              minWidth: '70px',
              justifyContent: 'center',
              color: '#000000'
            }}
          >
            Download
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="h-7 flex items-center bg-[#c0c0c0] text-[12px] text-black no-underline whitespace-nowrap font-win95"
            style={{ 
              border: '2px solid',
              borderTopColor: 'white',
              borderLeftColor: 'white',
              borderRightColor: '#404040',
              borderBottomColor: '#404040',
              boxShadow: 'inset -1px -1px #808080, inset 1px 1px #ffffff',
              fontFamily: "'W95FA', sans-serif",
              paddingLeft: '8px',
              paddingRight: '8px',
              minWidth: '110px',
              justifyContent: 'center',
              color: '#000000'
            }}
          >
            Open in New Tab
          </a>
        </div>
      </div>
      
      <div className="h-1 bg-[#c0c0c0]"></div>
      
      <div className="flex-1 bg-black w-full overflow-hidden">
        <iframe 
          src="/resume.pdf" 
          className="w-full h-full border-none"
          style={{ backgroundColor: 'black' }}
          title="Resume PDF Viewer"
        />
      </div>
      
      <div className="bg-[#c0c0c0] h-5 border-t border-[#808080] px-2 text-xs flex justify-between items-center text-black">
        <div>Page 1</div>
        <div>100%</div>
      </div>
    </div>
  );
});

ResumeContent.displayName = 'ResumeContent';

export default ResumeContent;