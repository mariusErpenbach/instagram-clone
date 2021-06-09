import Header from "./components/Header.js"
import PictureSection from "./components/PictureSection.js"
import ProfileSection from "./components/ProfileSection.js"
import FriendSection from "./components/FriendSection.js"
import "./scss/main.scss"


function App() {
  return (
    <div className="App">
      <Header/>
      <ProfileSection/>
      <FriendSection/>
      <PictureSection/>
    </div>
  );
}

export default App;
