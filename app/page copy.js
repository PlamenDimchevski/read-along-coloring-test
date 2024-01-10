'use client';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
let socket;

export default function Home() {
  const [input, setInput] = useState('');
  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch('/api/socket', { cache: 'no-cache' });
    socket = io( undefined, {path: '/api/socket_io'});

    socket.on('connect', () => {
      console.log('connected');
    });

    
    socket.on('update-input', (msg) => {
      setInput(msg);
    });
  };

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    socket.emit('input-change', e.target.value);
  };

  return (
    <main className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

      <code>
        <h2>What is Lorem Ipsum?</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </code>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <input
          style={{ color: "#000" }}
          placeholder="Type something"
          value={input}
          onChange={onChangeHandler}
        />
      </div>
    </main>
  );
}
