import './App.css'; // Import the CSS file
import UserList from './components/UserList';

const App = () => {
  const users = [
    {
      "id": 1,
      "firstName": "Linor",
      "lastName": "Monir",
      "icon":"😊"
    },
    {
      "id": 2,
      "firstName": "Ronnie",
      "lastName": "Rachma",
      "icon":"👌"
    },
    {
      "id": 3,
      "firstName": "Keren",
      "lastName": "Black",
      "icon":"❤️"

    },
    {
      "id": 4,
      "firstName": "Ofra",
      "lastName": "Ayalon",
      "icon":"❤️"
    },
    {
      "id": 5,
      "firstName": "Inbar",
      "lastName": "Ayalon"
    },
    {
      "id": 6,
      "firstName": "Idan",
      "lastName": "Ayalon"
      
    }
  ];

  return (
    <div>
      <h1>Users list</h1>
      <UserList users={users} />
    </div>
  );
};

export default App;
