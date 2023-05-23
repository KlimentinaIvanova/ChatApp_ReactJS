import {ChatEngine} from 'react-chat-engine'
import './App.css';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm';

function App() {

  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <div className="App">
      <ChatEngine
      height="100vh"
      projectID="3a4a2e90-763d-48e4-824a-581d206636e4"
      userName="ivan"
      userSecret="asdasd"
      renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
      onNewMessage={()=>new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
