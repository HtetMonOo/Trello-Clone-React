import React, { useState, useEffect } from 'react'
import './Container.css'
import {appendApiKey} from '../utils';
import Axios from 'axios'
import List from './List'
import AddList from './AddList'

const Container = () => {
    const url = appendApiKey("list");
    const [lists, setLists] = useState([])
    const [addListClick, setAddListClick ] = useState(false)

    const fetchData = async() => {
        try{
            const res = await Axios.get(url);
            setLists(res.data)
            console.log("ok");
        }catch{
            setLists([])
        }
        // const selectedlsit = lists.find(x => x.id === list.id);
        // selectedlsit.cards.find(asdf)

        // const newListslists = [...lists];
        // setLists(newListslists)
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

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
        const newList = lists.filter(l => l.id !== id)
        setLists(newList)
    }

    return (
        <div className="Container" id='container'>
            {
                lists && lists.map(list => (
                    <List key={list.id} list={list} deleteList={deleteList}/>
                ))
            }
            <AddList addList={addList} addListClick={addListClick} showInput={showInput} cancel={showInput}/>
        </div>
    )
}

export default Container
