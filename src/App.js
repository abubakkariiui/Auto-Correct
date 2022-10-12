import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [correct, setCorrect] = useState('');
  return (
    <div>
      <textarea
        data-testid="textarea"
        value={correct}
        onChange={(e) => {
          setCorrect(e.target.value);
          const corrections = {
            bool: 'Boolean',
            practace: 'practice',
            int: 'integer',
            realy: 'really',
            wierd: 'weird',
          };
          const arr = correct.split(' ');
          const objArr = Object.getOwnPropertyNames(corrections);
          arr.map((d, i) => {
            const n = objArr.indexOf(d);
            if (n !== -1) {
              arr[i] = corrections[objArr[n]];
              setCorrect(arr.join(' ') + ' ');
            }
            return true;
          });
        }}
      />
    </div>
  );
}
