import { createContext, useContext, useReducer } from "react";
import { faker } from '@faker-js/faker';

// import { faker } from '@faker-js/faker';
import { cartReducer } from "./Reducer";

const Cart = createContext();

const Context = ({ children }) => {
    const products = [...Array(20)].map(() => ({
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    }))

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
});

  return <Cart.Provider value={{ state, dispatch }}>{ children }</Cart.Provider>
};

export default Context;

export const CartState = () => {
    return useContext(Cart);
};