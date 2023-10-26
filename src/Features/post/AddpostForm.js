import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/userSlice";
import React from 'react'

const AddpostForm = () => {
    const dispatch = useDispatch()
    const [title,setTitle]=useState('')
    const [userId, setUserId] = useState(""); 
    const [content,setContent]=useState('')

    const users =useSelector(selectAllUsers)
    const onTitlechanged =e=> setTitle(e.target.value)
    const onContentChanged = e=> setContent(e.target.value)
const onAuthorChanged = e=> setUserId(e.target.value)
    const onSavePostClicked=()=>{
    if(title &&content){
        dispatch(
            postAdded({
                title,
                content,
            userId
            })
        )
        setTitle('')
        setContent('')
    }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const userOptions = users.map(user=>(
        <option key={user.id} value={user.id}>{user.name}</option>
    ))
  return (
    <div>
      <section>
        <form>
          <label htmlFor="postTitle"></label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitlechanged}
          ></input>
          <label htmlFor ="postAuthor">Author:</label>
          
          <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
            <option value=""></option>
            {userOptions}
          </select>
          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            name="postTitle"
            value={content}
            onChange={onContentChanged}
          />
          <button 
          type="button" 
          onClick={onSavePostClicked} disabled={!canSave}> 
            Save Post</button>
        </form>

        <h2>add a new post</h2>
      </section>
    </div>
  );
}

export default AddpostForm
