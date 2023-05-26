// import { SayHello } from './components/sayHello/sayHello'
// import { AboutPage } from './components/about/aboutPage'
// import './components/about/aboutPage.css';
// import './App.css';

import { useState } from 'react';


// function App() {
//   return (
//     <div className="App">
//       <SayHello/>
//       <AboutPage/>     
//     </div>
//   );
// }


//Displaying Data -----------------------------------------

// const user = {
//   name: 'Neslihan Atasever',
//   imageUrl: 'https://avatars.githubusercontent.com/u/75980632?v=4',
//   imageSize: 90,
//   borderRadius: 50,
// };

// export default function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Photo of ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize,
//           borderRadius: user.borderRadius,
//         }}
//       />
//     </>
//   );
// }

//Conditional Rendering ----------------------------------------

// let content;
// if (isLoggedIn) {
//   content = <AdminPanel />;
// } else {
//   content = <LoginForm />
// }
// return (
//   <div>
//     {content}
//   </div>
// );

/* <div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div> 

<div>
    {isLoggidIn && <AdminPanel />}
</div>
*/


//Rendering Lists -----------------------------------


// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1},
//   { title: 'Garlic', isFruit: false, id: 2},
//   { title: 'Apple' , isFruit: true, id: 3}
// ];

// export default function ShoppingList() {
//   const listItems = products.map(product =>
//     <li
//     key={product.id}
//     style={{color: product.isFruit ? 'magenta' : 'darkgreen'}} 
//     >
//       {product.title}
//     </li>
//     );

//     return (
//       <ul>{listItems}</ul>
//     );
// }

//------------------------------------------------------------

// const listItems = products.map(product =>
//   <li key ={product.id}>
//     {product.title}
//   </li>
// );

//   return (
//     <ul>{listItems}</ul>
//   )


//Responding to Events --------------------------------------

// function MyButton() {
//   function handleClick(){
//     alert('you clicked me!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }


//Updating the Screen -------------------------

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  } 

  return (
    <div>
      <h1>Counters that update seperately</h1>
      <MyButton count= {count} onClick={handleClick} />
      <MyButton count= {count} onClick={handleClick} />
    </div>
  );
}

 function MyButton({count, onClick}) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

