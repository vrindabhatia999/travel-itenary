import React, { useEffect, useRef, useState } from 'react';
import './DragDrop.css';
import Trash from '../assets/animations/trash.png';
interface Props {}

function DragDropImg(props: Props) {
  const {} = props;
  const inputRef: any = useRef();
  //   const [files, setFiles] = useState<any>(null);
  const [fileDisplayImg, setFileDisplayImg] = useState<any>([]);

  const handleDrag = (e: any) => {
    e.preventDefault();
  };
  const handleDrop = (e: any) => {
    //prevent the browser from opening the image
    e.preventDefault();
    e.stopPropagation();
    //let's grab the image file
    let imageFile = e.dataTransfer.files[0];
    let id = 0;
    if (fileDisplayImg.length < 4) {
      let json = {
        img: URL.createObjectURL(imageFile),
        id: fileDisplayImg.length,
      };
      setFileDisplayImg((v: any) => [...v, json]);
    } else {
      alert('only 4 images can be uploaded');
    }
    // setFiles(e.dataTransfer.files);
  };
  console.log(fileDisplayImg);
  const handleFileInputSelect = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    let id = 0;
    let imageFile = e.target.files[0];
    if (fileDisplayImg.length < 4) {
      let json = {
        img: URL.createObjectURL(imageFile),
        id: fileDisplayImg.length,
      };
      setFileDisplayImg((v: any) => [...v, json]);
    } else {
      alert('only 4 images can be uploaded');
    }
  };
  const deleteHandler = (id: any) => {
    setFileDisplayImg(fileDisplayImg.filter((item: any) => item.id != id));
  };
  return (
    <div className='dropZone' onDragOver={handleDrag} onDrop={handleDrop}>
      <div className='drap-drp'>
        <label className='drop-label'> Drag and Drop Scenic views</label>
        <input
          type='file'
          hidden
          accept='image/png, image/jpeg'
          onChange={handleFileInputSelect}
          ref={inputRef}
        />
        {/*open file selector*/}
        <button className='file-btn' onClick={() => inputRef.current.click()}>
          Select Files
        </button>
        {/*show file as imgaes*/}
        <div className='image'>
          {fileDisplayImg.map((item: any) => {
            return (
              <div key={item.id} className='img-div-drag'>
                <img src={item.img} alt='image' className='drag-drp-img' />
                <button
                  onClick={() => deleteHandler(item.id)}
                  className='img-del-drag'>
                  <img height={'20px'} width={'20px'} src={Trash}></img>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DragDropImg;
