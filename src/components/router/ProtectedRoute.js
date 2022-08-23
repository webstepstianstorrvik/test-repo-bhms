import React, { useEffect } from "react";
import { useAuth } from "react-oidc-context";

const ProtectedRoute = ({children}) => {

    const auth = useAuth();

    useEffect(() => {
        if(!auth.isLoading && !auth.isAuthenticated) {
            auth.signinRedirect()
        }
    }, [auth.isLoading, auth.isAuthenticated])

    if(auth.isLoading || !auth.isAuthenticated) {
        return <></>
    }

    return children;
}

export default ProtectedRoute;