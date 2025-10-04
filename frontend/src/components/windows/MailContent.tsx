import React, { memo, useState } from 'react';

const MailContent: React.FC = memo(() => {
  const [formData, setFormData] = useState({
    to: 'cenizaruper13@gmail.com',
    subject: '',
    from: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSend = () => {
    if (!isValidEmail(formData.to)) {
      alert('Invalid email address');
      return;
    }
    
    if (!formData.subject.trim()) {
      alert('Please enter a subject');
      return;
    }
    
    if (!formData.message.trim()) {
      alert('Please enter a message');
      return;
    }

    const mailtoUrl = `mailto:${formData.to}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="w-full h-full bg-[#c0c0c0] flex flex-col overflow-hidden">
      <div className="bg-[#c0c0c0]">
        <div className="flex border-b border-[#808080]">
          <button 
            onClick={handleSend}
            className="h-5 px-3 flex items-center bg-[#c0c0c0] whitespace-nowrap"
            style={{ 
              border: '1px solid',
              borderTopColor: 'white',
              borderLeftColor: 'white',
              borderRightColor: '#404040',
              borderBottomColor: '#404040',
              boxShadow: 'inset -1px -1px #808080, inset 1px 1px #ffffff',
              fontFamily: "'W95FA', sans-serif",
              fontSize: '10px',
              color: '#000000',
              justifyContent: 'center',
              minWidth: '40px'
            }}
          >
            Send
          </button>
        </div>
      </div>
      
      <div className="h-1 bg-[#c0c0c0]"></div>
      
      <div className="flex-1 bg-[#c0c0c0] flex flex-col p-2">
        <h2 className="text-sm font-bold mb-3 text-black" style={{ fontFamily: "'W95FA', sans-serif" }}>New Message</h2>
        
        <div className="space-y-2 mb-3">
          <div className="flex items-center">
            <label className="w-12 text-xs text-black" style={{ fontFamily: "'W95FA', sans-serif" }}>To:</label>
            <input
              type="email"
              name="to"
              value={formData.to}
              onChange={handleInputChange}
              className="flex-1 px-1 py-1 border bg-white text-xs"
              placeholder="recipient@example.com"
              style={{
                borderTopColor: '#404040',
                borderLeftColor: '#404040',
                borderRightColor: '#ffffff',
                borderBottomColor: '#ffffff',
                color: '#000000',
                fontFamily: "'W95FA', sans-serif"
              }}
            />
          </div>

          <div className="flex items-center">
            <label className="w-12 text-xs text-black" style={{ fontFamily: "'W95FA', sans-serif" }}>Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="flex-1 px-1 py-1 border bg-white text-xs"
              style={{
                borderTopColor: '#404040',
                borderLeftColor: '#404040',
                borderRightColor: '#ffffff',
                borderBottomColor: '#ffffff',
                color: '#000000',
                fontFamily: "'W95FA', sans-serif"
              }}
            />
          </div>

          <div className="flex items-center">
            <label className="w-12 text-xs text-black" style={{ fontFamily: "'W95FA', sans-serif" }}>From:</label>
            <input
              type="email"
              name="from"
              value={formData.from}
              onChange={handleInputChange}
              className="flex-1 px-1 py-1 border bg-white text-xs"
              placeholder="your-email@example.com"
              style={{
                borderTopColor: '#404040',
                borderLeftColor: '#404040',
                borderRightColor: '#ffffff',
                borderBottomColor: '#ffffff',
                color: '#000000',
                fontFamily: "'W95FA', sans-serif"
              }}
            />
          </div>
        </div>

        <div className="flex-1">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full h-full p-2 border bg-white text-xs resize-none"
            placeholder="Type your message here..."
            style={{
              borderTopColor: '#404040',
              borderLeftColor: '#404040',
              borderRightColor: '#ffffff',
              borderBottomColor: '#ffffff',
              color: '#000000',
              fontFamily: "'W95FA', sans-serif"
            }}
          />
        </div>
      </div>
    </div>
  );
});

export default MailContent;