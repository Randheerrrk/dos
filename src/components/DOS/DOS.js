import { useState, useEffect } from "react";

import './DOS.css'

const DOS = ({userList}) => {
    const [firstPerson, setFirstName] = useState("")
    const [secondPerson, setSecondName] = useState("")
    const [showDos, setShowDos] = useState(false)
    const [dos, setDos] = useState([])
    useEffect(() => {
        setShowDos(false)
    }, [])

    const findDOS = (username, lst, res) => {
        lst.push(username)
        if(username===secondPerson) {
            const copy = []
            for(var i of lst) {
                copy.push(userList[i])
            }
            res.push(copy)
            lst.pop()
            return
        }
        const friends = userList[username].friends
        for(var friend of friends) {  
            if(lst.indexOf(friend) ===-1 && friend!==firstPerson) {
                findDOS(friend, lst, res)
            }
        }
        lst.pop()
    }

    const handleSubmit = e => {
        e.preventDefault()
        setShowDos(true)
        setDos([])
        const res = []
        findDOS(firstPerson, [], res)
        setDos(res)
    }

    const getDos = d => {
        const l = d.length
        let str = ""

        for(var i=0; i<l-1; i++) {
            str += d[i].fullname + ' -> '
        }
        str += d[l - 1].fullname
        return str
    }

    return (
        <main>
            <div className="dos-search">
                <form onSubmit={handleSubmit}>
                    <input className='form-item' type="text" name="firstPerson" value={firstPerson} onChange={(e) => {
                        e.preventDefault()
                        setFirstName(e.target.value)
                    }} />
                    <input className='form-item' type="text" name="secondPerson" value={secondPerson} onChange={(e) => {
                        e.preventDefault()
                        setSecondName(e.target.value)
                    }} />
                    <input className="submit-button" type="submit" value="Submit"/>
                </form>
            </div>
            { showDos && <div className="dos-display">
                <div>
                    <p>The Degree of Seperation between {firstPerson} and {secondPerson}</p>
                </div>
                <div className="dos-display-inner">
                    {dos.map(d => <p>{getDos(d)}</p>)}
                </div>
            </div>}
        </main>
    )
}

export default DOS;