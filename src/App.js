// import { SayHello } from './components/sayHello/sayHello'
// import { AboutPage } from './components/about/aboutPage'
import './components/about/aboutPage.css';
import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <SayHello/>
//       <AboutPage/>     
//     </div>
//   );
// }


const user = {
  name: 'Neslihan Atasever',
  imageUrl: 'https://avatars.githubusercontent.com/u/75980632?v=4',
  imageSize: 90,
  borderRadius: 50,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: user.borderRadius,
        }}
      />
    </>
  );
}

