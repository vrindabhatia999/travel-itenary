import React, { useState } from 'react';
import './ItenaryListing.css';
import Trash from '../assets/animations/trash.png';
import EditForm from './EditForm';
import Edit from '../assets/animations/edit.svg';
export type ItenaryListProps = {
  fullItenearyArr: any;
  deleteHandler: (id: any) => void;
  updateHandler: (id: any, updatedItenary: any) => void;
};

function ItenaryListing(props: ItenaryListProps) {
  const [updatedIte, setUpdatedIte] = useState<any>();
  const [showEditForm, setShowUpdatedForm] = useState(false);
  const [datatToSend, setDataToSend] = useState<any>({
    id: null,
    destination: null,
    date: null,
    purpose: null,
  });
  const sendDataToForm = (
    id: any,
    destination: any,
    date: any,
    purpose: any
  ) => {
    setDataToSend({
      id: id,
      destination: destination,
      date: date,
      purpose: purpose,
    });
  };
  return (
    <>
      {props.fullItenearyArr.length > 0 && (
        <div className='ite-listing-cont'>
          <ul className='ite-list-ul'>
            {props.fullItenearyArr.map((item: any, index: any) => {
              return (
                <li className='ite-list-li' key={item?.id}>
                  <label className='ite-list-date-label'>{item?.date}</label>
                  <div className='list-cont'>
                    <label className='destination-label'>
                      {item?.destination}
                    </label>
                    <label className='purpose-label'>{item?.purpose}</label>
                  </div>

                  <div className='ite-action'>
                    <button
                      className='edit-btn'
                      onClick={() => {
                        setShowUpdatedForm(true);
                        sendDataToForm(
                          item.id,
                          item.destination,
                          item.date,
                          item.purpose
                        );
                      }}>
                      <img src={Edit}></img>
                    </button>
                    <button
                      className='del-btn'
                      onClick={() => props.deleteHandler(item.id)}>
                      <img height={'20px'} src={Trash} />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {showEditForm && (
        <EditForm
          theItenaryArr={datatToSend}
          setUpdatedIte={setUpdatedIte}
          updateItenary={props.updateHandler}
          setCloseForm={setShowUpdatedForm}
        />
      )}
    </>
  );
}

export default ItenaryListing;
