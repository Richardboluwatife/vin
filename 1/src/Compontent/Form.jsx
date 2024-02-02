import propTypes from 'prop-types';
import { useState } from 'react';

function Form(props) {
    const [username, SetUsername] = useState('');
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');


    return <div>
        <h1>{props.title}</h1>
        <p>{props.para}</p>
        <div>
            {props.people.map(function (person, index) {
                return <div className='person' key={index}>
                    <h3>{person.name}</h3>
                    <h3>{person.color}</h3>
                </div>
            })}
        </div>
        <form>
            <div className='username'>
                <input type="text" value={username} onChange={function (event) {
                    console.log(event.target.value);
                    SetUsername(event.target.value)
                }} placeholder='Enter Username.......' />
            </div>
            <div className="email">
                 <input type="text" value={email} onChange={function (event) {
                    console.log(event.target.value);
                    SetEmail(event.target.value)
                }} placeholder='Enter Username.......' />
            </div>
            <div className="password">
            <input type="text" value={password} onChange={function (event) {
                    console.log(event.target.value);
                    SetPassword(event.target.value)
                }} placeholder='Enter Username.......' />
            </div>
            <div>
                <button type='submit'>submit</button>
            </div>
        </form>
    </div>
}



Form.propTypes = {
    title: propTypes.string,
    para: propTypes.string,
    people: propTypes.array
}

export default Form;