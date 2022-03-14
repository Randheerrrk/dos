
import InputBox from './InputBox'

const UserConnect = ({userList, setUserList}) => {
    const handleSubmit = (e) => {
        e.preventDefault()

        const usernameOne = e.target.personOne.value
        const usernameTwo = e.target.personTwo.value

        userList[usernameOne].friends.push(usernameTwo)
        userList[usernameTwo].friends.push(usernameOne)
    }
    return (
        <main>
            <div className="user-connect">
                <form onSubmit={handleSubmit}>
                    <InputBox type="text" name="personOne" label={"Username of first person"}/>
                    <InputBox type="text" name="personTwo" label={"Username of second person"}/>
                    <input className='form-item submit-button' type="submit" value="Connect"/>
                </form>
            </div>
        </main>
    )
}

export default UserConnect;