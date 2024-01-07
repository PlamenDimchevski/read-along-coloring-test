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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <input
          style={{ color: '#000' }}
          placeholder="Type something"
          value={input}
          onChange={onChangeHandler}
        />
      </div>
    </main>
  );
}
