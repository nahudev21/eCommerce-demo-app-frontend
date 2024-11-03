import { useState } from "react"

export default function Home() {
  
  //Prueba con el servidor
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const id = 2

  const product = {
    name: "Iphone 15 Pro Max",
    brand: "Apple",
    price: 2000000,
    inventory: 10,
    description: "Iphone 15 Pro Max, 512GB, Negro",
    category: "Electronics",
  };

  const user = {
    email: "nahuel23@gmail.com",
    password: "admin",
  };

  const login = async () => {
    const response = await fetch("http://localhost:9193/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify(user),
    });
    if(response.ok) {
      const json = await response.json();
      console.log(json);
    }
  }

  

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}
