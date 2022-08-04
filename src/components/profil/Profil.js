import React from "react";

import { useAuth } from 'oidc-react';

const Profil = () => {
    const auth = useAuth();
    const { name, phone_number, metadata_email } = auth.userData.profile

    return (
        <div>
            <p><b>Følgende info er hentet fra auth:</b></p>
            <p>{name}</p>
            <p>{phone_number}</p>
            <p>{metadata_email}</p>
        </div>
    )
}

export default Profil;