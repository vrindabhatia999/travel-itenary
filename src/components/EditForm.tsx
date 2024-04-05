import React, { useState } from 'react';
import './EditForm.css';
import Cross from '../assets/animations/cross.svg';
type EditFormProps = {
  theItenaryArr: any;
  setUpdatedIte: any;
  updateItenary: (id: any, updatedIte: any) => void;
  setCloseForm: any;
};

function EditForm(props: EditFormProps) {
  const [destination, setDest] = useState<any>(props.theItenaryArr.destination);
  const [date, setDate] = useState(props.theItenaryArr.date);
  const [purpose, setPurpose] = useState(props.theItenaryArr.purpose);
  const submitHandler = (
    id: any,
    destination: any,
    date: any,
    purpose: any
  ) => {
    let json: any = {
      id: null,
      destination: null,
      date: null,
      purpose: null,
    };
    json['id'] = id;
    json['destination'] = destination;
    json['date'] = date;
    json['purpose'] = purpose;
    props.updateItenary(id, json);
    props.setCloseForm((prevState: any) => !prevState);
  };
  return (
    <div className='edit-form-modal'>
      <div className='edit-form-modal-content'>
        <div
          className='cross'
          onClick={() => props.setCloseForm((prevState: any) => !prevState)}>
          <img src={Cross}></img>
        </div>
        <input
          type='text'
          className='input-dest'
          value={destination}
          onChange={(e: any) => setDest(e.target.value)}></input>
        <input
          type='date'
          value={date}
          onChange={(e: any) => setDate(e.target.value)}></input>
        <input
          type='text'
          value={purpose}
          className='input-dest'
          onChange={(e: any) => setPurpose(e.target.value)}></input>
        <button
          className='edit-form-btn'
          onClick={() =>
            submitHandler(props.theItenaryArr.id, destination, date, purpose)
          }>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditForm;
