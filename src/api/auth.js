import { API_URL } from '../config'

export const loginRequest = async (user) => {
  
    try {
        
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        const json = await response.json();
        return json
      }

    } catch (error) {
        console.log(error)
    }

}

export const registerRequest = async (user) => {

    try {
        
        const response = await fetch(`${API_URL}/users/add`, {
          method: "POST",
          headers: { "Content-type": "Application/json" },
          body: JSON.stringify(user),
        });
        if (response.ok) {
          const json = await response.json();
          return json
        }

    } catch (error) {
        console.log(error)
    }

}