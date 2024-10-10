import React, { useState } from 'react';

function CtrlandEnter() {
  const [message, setMessage] = useState('');
  const [sentMessage, setSentMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'Enter') {
      event.preventDefault(); // Prevents new line in textarea
      handleClick(event);
    }
  };

  const handleClick = () => {
    if (message.trim() !== '') {
      setSentMessage(message.trim()); // Update sentMessage state with the current message
      setMessage(''); // Clear the text area after sending
    }
  };

  return (
    <div>
      <textarea 
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown} // Handle key events within textarea
        placeholder="Type your comment here..."
        rows="4"
        cols="50"
      />
      <br />
      <button onClick={handleClick}>Send</button>
      <br />
      {sentMessage && <p>Sent message: {sentMessage}</p>}
    </div>
  );
}

export default CtrlandEnter;
