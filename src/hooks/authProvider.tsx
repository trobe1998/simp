import { createContext, useState } from "react";



interface ContextProps {
  auth: {
    _id: string;
    email: string;
    fullName: string;
    password: string;
    status: string;
  };
  setAuth:any;
}
// const AuthContext = createContext<ContextProps>({
//   auth: {
//     _id: "",
//     email: "",
//     fullName: "",
//     password: "",
//     status: "",
//   },
//   setAuth: () => {},
// });

const AuthContext = createContext<ContextProps | null>(null);

export const AuthProvider = ({ children }:any) => {
    const [auth, setAuth] = useState({
      _id: "",
          email: "",
          fullName: "",
          password: "",
          status: "",
    });

    return (
        < AuthContext.Provider value={{ auth, setAuth }} >
        {children}
        </AuthContext.Provider>
    )
    
}

export default AuthContext    











// interface globalContextProp{
//     user: {
//         _id: string,
//         email: string,
//         fullName: string,
//         password: string,
//         status: string
//     },
//     setUser: ()=> void
// }
// export const GlobalContext = createContext<globalContextProp>({
//     user: {
//         _id: '',
//         email: '',
//         fullName: '',​
//         password: '',
//         status: ''
//     },
//     setUser: ()=>{}
// })
// export const GlobalContextProvider = (props: any) => {
//     const [currentUser, setCurrentUser] = useState({})
//     return (
//         <GlobalContext.Provider  
//         value= {{
//         user: currentUser,
//     setUser: ()=> void
//         }}>
//        {props.children}
// </GlobalContext.Provider>
//     )
// }
// // export const AuthProvider = ({ children }) => {
// //     const [auth, setAuth] = useState({})
// // console.log(children)
// //     return (
// //         < AuthContext.Provider value={{ auth, setAuth }} >
// //         {children}
// //         </AuthContext.Provider>
// //     )
    
// // }

// export default AuthContext    