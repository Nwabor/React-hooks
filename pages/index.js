import React, { useState } from 'react';

const InputElement = () => {
  const [InputText, setInputText] = useState('');
  const [historyList, setHistoryList] = useState([]);

  function showInput(e) {
    setInputText(e.target.value);
  }

  function showHistoryList(e) {
    setHistoryList([...historyList, e.target.value]);
  }
  return (
    <div>
      <input
        placeholder='Enter some text'
        onChange={(showInput, showHistoryList)}
      />
      <br />
      {InputText}
      <hr />
      <br />
      <ul>
        {historyList.map((rec) => {
          return <div>{rec}</div>;
        })}
      </ul>
    </div>
  );
};

export default InputElement;
