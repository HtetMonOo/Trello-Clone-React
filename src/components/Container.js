import React, { useState, useEffect } from 'react'
import './Container.css'
import {appendApiKey} from '../utils';
import Axios from 'axios'
import List from './List'
import AddList from './AddList'

const Container = () => {
    const url = appendApiKey("lists");
    const [lists, setLists] = useState([])
    const [addListClick, setAddListClick ] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        try{
            const res = await Axios.get(url);
            setLists(res.data)
            console.log("ok");
        }catch{
            setLists([])
        }
        
    }

    const showInput = () => {
        setAddListClick(!addListClick)
    }

    const addList = (newList) => {
        lists.push(newList)
        console.log(lists)
        showInput()
        setLists(lists)

    }

    const deleteList = (id) => {
        var newList = lists.filter(l => l.id !== id)
        setLists(newList)
    }

    return (
        <div id='container'>
            {
                lists.map(list => (
                    <List key={list.id} list={list} deleteList={deleteList}/>
                ))
            }
            <AddList addList={addList} addListClick={addListClick} showInput={showInput} cancel={showInput}/>
        </div>
    )
}

export default Container
