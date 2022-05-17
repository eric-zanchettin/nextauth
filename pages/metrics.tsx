import { setupAPIClient } from '../services/api';
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
    return (
        <>
            <h1>Métricas</h1>
        </>
    );
};

export const getServerSideProps = withSSRAuth(async (ctx) => {
    const api = setupAPIClient(ctx);
    const response = await api.get('/me');

    return {
        props: {},
    };
}, {
    permissions: ['metrics.list'],
    roles: ['administrator'],
});