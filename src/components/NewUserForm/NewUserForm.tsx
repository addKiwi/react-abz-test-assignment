import React, { useEffect, useState } from "react";
import { addUser, getPositions, getToken } from "../../api/api";
import { Position } from "../../types/Position";

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

import './NewUserForm.scss';

export const NewUserForm:React.FC = () => {
  const [positions, setPositions] = useState<Position[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [positionId, setPositionId] = useState(0);
  const [image, setImage] = useState<File>();

  useEffect(() => {
    getPositions()
      .then(data => setPositions(data.positions))
  },[]);

  const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;

    if (!fileList) return;

    setImage(fileList[0]);
};

  const addNewUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

     const token = await getToken();

    const formData = new FormData();
    formData.append('position_id', `${positionId}`); 
    formData.append('name', `${name}`); 
    formData.append('email', `${email}`); 
    formData.append('phone', `${phone}`); 
    if(image) {
      formData.append('photo', image, image?.name);
    }
    
    addUser(formData, token)
  }

  return (
    <>
      <h2>Form</h2>
      <form 
        method="post" 
        action="#"
        className="form"  
        onSubmit={addNewUser}
      >
        <TextField
          id="name"
          label="Your name"
          onChange={e => setName(e.target.value)}  
          className="form__input"
          margin="normal"
        />
        <TextField
          id="email"
          label="Email"
          onChange={e => setEmail(e.target.value)}
          className="form__input"
          margin="normal"
        />
        <TextField
          id="phone"
          label="Phone"
          helperText="+38 (XXX) XXX - XX - XX"
          onChange={e => setPhone(e.target.value)}
          className="form__input"
          margin="normal"
          />
        <div className="form__select">
          select your position
          {
            positions.map(pos => 
              (
                <FormControlLabel 
                  key={pos.id}
                  value={pos.id} 
                  control={<Radio size="small" />} 
                  label={pos.name} 
                  checked={pos.id === positionId}
                  onChange={e => setPositionId(pos.id)}
                />
              )
            )
          }
        </div>
        <input 
          type="file" 
          onChange={handleImageChange}
          placeholder="Upload your photo"
          className="form__file"
        />
        <input 
          type="submit" 
          value="Sign up" 
          className="button" />
      </form>
    </>
  )
}