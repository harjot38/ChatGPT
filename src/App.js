import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg'

function App() {
  return (
    <div className="App">
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'>
            <img src={gptLogo} alt='Logo' className='logo' />
            <span className='brand'>ChatGPT</span>
          </div>
          <button className='midBtn'>
            <img src={addBtn} alt='new chat' className='addBtn' />
            New Chat
          </button>
          <div className='upperSideBottom'>
            <button className='query'>
              <img src={msgIcon} alt='Query' />
              What is Programming
            </button>
            <button className='query'>
              <img src={msgIcon} alt='Query' />
              How to use an API?
            </button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className='listItems'>
            <img src={home} alt='home' className='listItemsImg' /> Home
          </div>
          <div className='listItems'>
            <img src={saved} alt='save' className='listItemsImg' /> Save
          </div>
          <div className='listItems'>
            <img src={rocket} alt='upgrade' className='listItemsImg' /> Upgrade To Pro
          </div>
        </div>
      </div>
      <div className='main'>
        <div className='chats'>
          <div className='chat'>
            <img className = "chatImg" src={userIcon} alt="userIcon" />
            <p className='txt'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quibusdam magni iusto illo sapiente eligendi voluptatum necessitatibus rerum aperiam sint dicta deserunt deleniti, non quasi eius repudiandae placeat officiis quia.
            </p>
          </div>
          <div className='chat bot'>
            <img className = "chatImg" src={gptImgLogo} alt="gptLogo" />
            <p className='txt'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores, quaerat minima quasi, modi consequatur sint ea fugit aliquid ad doloribus. Unde non, sequi voluptatibus impedit sapiente enim adipisci quis fugit eveniet nam, voluptatem earum! Alias autem necessitatibus, tempore dolor voluptas nemo! Placeat possimus, nemo obcaecati, repudiandae consectetur blanditiis maiores sint necessitatibus dicta at aut fuga? Consectetur adipisci quidem aspernatur hic voluptatum. Necessitatibus odit explicabo qui est sed accusantium et pariatur natus? Quos cupiditate impedit ratione. Pariatur ratione nemo animi eaque officia sed optio at, totam rerum unde id dolor. Aut ut sed ducimus sint at eligendi aspernatur consequatur ea?
            </p>
          </div>
        </div>

        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' placeholder='Send a message' />
            <button className='send'>
              <img src={sendBtn} alt='Send' />
            </button>
          </div>
          <p>ChatGPT may produce inaccurate results. Check important info</p>
        </div>
      </div>
    </div>
  );
}

export default App;
