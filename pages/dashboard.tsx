import { useContext } from "react";
import { setupAPIClient } from '../services/api';

import { AuthContext } from "../contexts/AuthContext";
import { withSSRAuth } from "../utils/withSSRAuth";

import { Can } from "../components/Can";

export default function Dashboard() {
    const { user, signOut, } = useContext(AuthContext);

    return (
        <>
            <h1>Dashboard: { user?.email }</h1>

            <button onClick={signOut}>Logout</button>

            <Can permissions={['metrics.list']}>
                <div>Métricas</div>
            </Can>
        </>
    );
};

export const getServerSideProps = withSSRAuth(async (ctx) => {
    const api = setupAPIClient(ctx);
    const response = await api.get('/me');

    console.log(response.data);
    
    return {
        props: {},
    };
});