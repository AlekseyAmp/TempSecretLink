import axios from "../utils/axios";


export async function createSecret(message, expire_time, password) {
    try {
        const passwordQueryParam = password === null ? '' : `&password=${password}`;

        const response = await axios.post(
            `/secret/create?message=${message}&expire_time=${expire_time}${passwordQueryParam}`,
            { message, expire_time, password }
        );

        if (response.data) {
            return response.data.link;
        }
    } catch (error) {
        console.log(error.response.data.detail);
    }
}

export async function getSecret(link, password) {
    try {
        const passwordQueryParam = password === null ? '' : `&password=${password}`;

        const response = await axios.get(`/secret?link=${link}${passwordQueryParam}`);

        if (response.data) {
            return response.data;
        }
    } catch (error) {
        console.log(error.response.data.detail);
    }
}