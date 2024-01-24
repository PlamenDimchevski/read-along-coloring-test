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
      socket = io(undefined, { path: '/api/socket_io' });

      socket.on('connect', () => {
         console.log('connected');
      });

      socket.on('update-input', msg => {
         setInput(msg);
      });
   };

   const onChangeHandler = e => {
      setInput(e.target.value);
      socket.emit('input-change', e.target.value);
   };

   return (
      <main className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
         <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
            <input style={{ color: '#000' }} placeholder="Type something" value={input} onChange={onChangeHandler} />
         </div>
      </main>
   );
}
