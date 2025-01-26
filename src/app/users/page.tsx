import React from 'react';
import styles from "@/style/styles.module.css";
import GetDate from '../components/GetDate';


interface User_t 
{
    id : number;
    name : string;
    username : string;
    email : string;
    address: object;
    phone : string;
    website : string;
    company : object;
};


const userPAge = async () => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {cache:"no-store"});
    const users : User_t[] = await response.json();


    return (
    <>
        <h1>Users</h1>
        <GetDate />
        <section className={styles.sectionUser}>
            {users.map(user => (
               <div key={user.id}>
                    <h1>ABOUT {user.name}</h1>
                    <ul>
                        <li>email : {user.email}</li>
                        <li>phone number : {user.phone}</li>
                        <li>username : {user.username}</li>
                        <li>website : {user.website}</li>
                    </ul>
               </div>
            )) }
        </section>
    </>
    )
}

export default userPAge