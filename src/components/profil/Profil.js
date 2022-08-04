import React from "react";

import { useAuth } from 'oidc-react';

const Profil = () => {
    const auth = useAuth();
    const { name, phone_number, metadata_email } = auth.userData.profile

    return (
        <div>
            <h1>Profil</h1>
            <p>{name}</p>
            <p>{phone_number}</p>
            <p>{metadata_email}</p>
        </div>
    )
}

export default Profil;