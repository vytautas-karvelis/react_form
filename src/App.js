import logo from './logo.svg';
import './App.css';
import TextInput from './components/TextInput/TextInput';
import Label from './components/label/Label';
import Button from './components/button/Button';
import Outline from './components/TextInput/Outline';
import Message from './components/message/Message';
import { FaUser } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { useRef} from 'react'

function App() {

  const messageOneRef = useRef()
  const messageTwoRef = useRef()
  const messageThreeRef = useRef()

  const nameRef = useRef()
  const usernameRef = useRef()
  const emailRef = useRef()

  const updateMessage = (e) => {
    if(e.target === nameRef.current){
      if(e.target.value.length < 5){
        messageOneRef.current.innerText ='Invalid name'
        messageOneRef.current.style.color = 'red'
      }   
      else {
        messageOneRef.current.innerText ='This name is valid'  
        messageOneRef.current.style.height = '15px'
        messageOneRef.current.style.color = 'green'
      }           
    } else if (e.target === usernameRef.current) {
      if(e.target.value.length < 5){
        messageTwoRef.current.innerText ='Invalid username'
        messageTwoRef.current.style.color = 'red'
      } 
      else{
        messageTwoRef.current.innerText = 'This username is valid'
        messageTwoRef.current.style.height = '15px'
        messageTwoRef.current.style.color = 'green'
      } 
    } else if (e.target === emailRef.current){
      if(!e.target.value.includes('@')){
        messageThreeRef.current.innerText ='Invalid email'
        messageThreeRef.current.style.color = 'red'
      } 
      else {
        messageThreeRef.current.innerText = 'This email is valid'
        messageThreeRef.current.style.height = '15px'
        messageThreeRef.current.style.color = 'green'
      } 
    }
  }

  return (
    <div className="container">
      <form>
          <div className="formControl">
              <Label text={"Name"} htmlFor={"Name"} />

              <Outline render={(color, changeColor)=> (
                <TextInput
                type={"text"}
                color={color}
                changeColor={changeColor}
                action={updateMessage}
                ref={nameRef}
                className={'firstInput'}
                ></TextInput>
              )} > </Outline>
              
              <Message ref={messageOneRef} />
            </div>
              
            <div className="formControl">
                <Label text={"Username"} htmlFor={"username"} />

                <Outline render={(color, changeColor)=> (
                  <TextInput
                  type={"text"}
                  color={color}
                  ref={usernameRef}
                  action={updateMessage}
                  changeColor={changeColor} 
                  ><FaUser className="first" color="gray"/> </TextInput>              
                )} />

              <Message ref={messageTwoRef} />
          </div>

          <div className="formControl">
            <Label text={"Email"} />
              <Outline render={(color, changeColor)=> (
                <TextInput
                type={"email"}
                color={color}
                ref={emailRef}
                action={updateMessage}
                changeColor={changeColor}
                ><AiOutlineMail className="first" color="gray" /> </TextInput>
              )} />
              <Message ref={messageThreeRef} />
          </div>

          <div className="formControl">
            <label htmlFor="Subject">Subject</label>
            <select>
              <option value="0">Select dropdown:</option>
              <option value="1">Meet</option>
              <option value="2">Go for coffee</option>
              <option value="3">Discuss work</option>
            </select>
          </div>
          <div className="formControl">
            <label htmlFor="Message">Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="formControl">
            <input type="checkbox" id="terms" name="term" value="agree" />
            <label for="term"> I agree to the <span>terms and conditions</span></label>
          </div>
          <div className="formControl">
          <div className="radio1">
              <input type="radio" id="yes" name="check" value="yes"
              checked />
                <label for="yes">Yes</label>
          </div>
          <div className="radio2">
              <input type="radio" id="no" name="check" value="no"/>
              <label for="no">No</label>
          </div>
        
         
          </div>
          <div className="formControl">
            <Button text={'Submit'} classname={'blue'} />
            <Button text={'Cancel'} classname={'pale'} />
          </div>

      </form>

    </div>
  );
}

export default App;
