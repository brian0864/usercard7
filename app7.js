import logo from './logo.svg';
import './App.css';

import UserCard from './UserCard';

function App() {
  const user = [
    {
      Name: 'Bill Gates',
      Location: 'Silicon Valley',
      FoodType: 'Vegeterian',
      Age: 24,
      Likes: 'Coding and Debugging',
      Twitter: 'BillGates147',
      TwitterLink:<a href="https://twitter.com/chrisoncode">@chrisoncode</a>,
      Avatar: 'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    },
    {
      Name: 'Chris Bates',
      Location: 'Florida',
      FoodType: 'Chicken and Chips',
      Age: 45,
      Likes: 'Swimming and Reading',
      Twitter: 'ChrisBates45',
      TwitterLink:<a href="https://twitter.com/chrisoncode">@bates45</a>,
      Avatar: 'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    }
  ]
  return (
    <div className="App">

     <UserCard myUser = {user}/>
    </div>
  );
}

export default App;