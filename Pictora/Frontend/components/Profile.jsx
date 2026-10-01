import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Profile() {

    const { id } = useParams();

    const [profile, setProfile] = useState(null);

    useEffect(() => {

        fetch(`http://localhost:3000/api/users/${id}`)
            .then((response) => response.json())
            .then((data) => setProfile(data))
            .catch((error) => console.error(error));

    }, [id]);

    if (!profile) {
        return <p>Loading...</p>;
    }

    return (

        <div>

            <h2>{profile.username}</h2>
            <p>{profile.fName}</p>
            <p>{profile.sName}</p>
            {profile.profileImage}

        </div>

    );

}

export default Profile;