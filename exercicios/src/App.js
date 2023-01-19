import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import Card from './components/Card'
import axios from "axios";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://hp-api.onrender.com/api/characters"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };
  console.log(users)

  return (
    <ChakraProvider>
      {users.map((user)=>{
      return (
      <Card
        key={user.id}
        name={user.name}
        image={user.image}
        house={user.house}
        ancestry={user.ancestry}
      />
      )
    })}
    </ChakraProvider>
  );
}

export default App;
