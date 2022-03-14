
import InputBox from './InputBox'

const UserForm = ({userList, setUserList}) => {
    const handleSubmit = (e) => {
        e.preventDefault()

        const username = e.target.username.value
        const fullname = e.target.fullname.value

        setUserList({...userList, [username]: {username, fullname, friends: []}})
    }
    return (
        <main>
            <div className="user-form">
                <form onSubmit={handleSubmit}>
                    <InputBox type="text" name="fullname" label={"FullName"}/>
                    <InputBox type="text" name="username" label={"UserName"}/>
                    <input className='form-item submit-button' type="submit" value="Add User"/>
                </form>
            </div>
        </main>
    )
}

export default UserForm;