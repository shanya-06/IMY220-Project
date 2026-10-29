import { useEffect, useState } from "react";

function FriendBar({ userId }) {

    const [user, setUser] = useState(null);

    useEffect(() => {

        fetch(`http://localhost:3000/api/users/${userId}`)
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => console.error(error));

    }, [userId]);

    if (!user) {
        return <p>Loading friends...</p>;
    }

    return (
        <section>
            <h2>Friends</h2>
            {user.friends?.map((friendId) => (
                <p key={friendId}>
                    {friendId}
                </p>
            ))}
        </section>

    );

}

export default FriendBar;