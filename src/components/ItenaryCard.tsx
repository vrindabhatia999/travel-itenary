import React, { useEffect, useRef, useState } from 'react';
import './ItenaryCard.css';
import ItenaryListing from './ItenaryListing';

function ItenaryCard() {
  const [itenaryArr, setItenaryArr] = useState<any>({
    id: 0,
    destination: '',
    date: Date,
    purpose: '',
  });
  const [fullItenearyArr, setFullItenaryArr] = useState<any>([]);
  const inputRef: any = useRef();
  const dateRef: any = useRef();
  const purposeRef: any = useRef();
  const hamdleInputItem = (e: any) => {
    e.preventDefault();
    setItenaryArr((v: any) => ({ ...v, [e.target.id]: e.target.value }));
  };
  const handleSubmit = () => {
    setItenaryArr((v: any) => ({ ...v, id: v.id + 1 })); //set prev things plus add id every time
    setFullItenaryArr((v: any, index: any) => [...v, itenaryArr]);
    // inputRef.current.value = '';
    // dateRef.current.value = '';
    // purposeRef.current.value = '';
  };
  const hamdleDateItem = (e: any) => {
    setItenaryArr((v: any) => ({ ...v, [e.target.id]: e.target.value }));
  };
  const handleTextAreaChange = (e: any) => {
    setItenaryArr((v: any) => ({ ...v, [e.target.id]: e.target.value }));
  };

  const deleteHandler = (id: any) => {
    console.log(id);
    const filteredArr = fullItenearyArr.filter((el: any) => el.id !== id);
    setFullItenaryArr(filteredArr);
  };

  //update function
  const updateItenary = (id: any, updatedIteneary: any) => {
    if (updateItenary.length > 0) {
      setFullItenaryArr(
        fullItenearyArr.map((l: any) => {
          if (l.id === id) {
            return {
              ...l,
              destination: updatedIteneary.destination,
              date: updatedIteneary.date,
              purpose: updatedIteneary.purpose,
            };
          } else {
            return l;
          }
        })
      );
    }
    console.log(fullItenearyArr);
  };

  //function to caculate present day date and pass to date picker
  const minDate = () => {
    const today = new Date().toISOString().split('T')[0];
    return today;
  };
  return (
    <div className='itenary-card'>
      <div className='itenary-creation'>
        <label className='title-itenary'>Make your itenary</label>
        <div className='inp-cont'>
          <label className='inp-label'>Destination</label>
          <input
            id='destination'
            className='dest-input'
            type='text'
            required
            ref={inputRef}
            onChange={hamdleInputItem}></input>
        </div>
        <div className='inp-cont'>
          <label className='inp-label'>Date of journey</label>
          <input
            className='inp-label'
            id='date'
            type='date'
            required
            ref={dateRef}
            min={minDate()}
            onChange={hamdleDateItem}></input>
        </div>

        <div className='inp-cont'>
          <label className='inp-label'>Purpose</label>
          <textarea
            className='dest-input'
            id='purpose'
            rows={4}
            cols={10}
            required
            ref={purposeRef}
            onChange={handleTextAreaChange}></textarea>
        </div>

        <button className='itn-btn' onClick={handleSubmit}>
          Create
        </button>
      </div>
      <ItenaryListing
        deleteHandler={deleteHandler}
        fullItenearyArr={fullItenearyArr}
        updateHandler={updateItenary}
      />
    </div>
  );
}

export default ItenaryCard;
