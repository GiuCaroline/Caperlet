const API_URL = 'https://api-caperlet.onrender.com/api';

// Função original apiRequest para manter compatibilidade
export async function apiRequest(endpoint, method = "GET", data = null) {
    const options = {
        method,
        headers: { "Content-Type": "application/json" },
    };
    if (data) options.body = JSON.stringify(data);

    const response = await fetch(`${API_URL}${endpoint}`, options);
    const result = await response.json();
    return result;
}

// Nova API com métodos específicos
export const api = {
    async get(endpoint) {
        return apiRequest(endpoint, "GET");
    },

    async post(endpoint, data) {
        return apiRequest(endpoint, "POST", data);
    },

    async put(endpoint, data) {
        return apiRequest(endpoint, "PUT", data);
    },

    async delete(endpoint) {
        return apiRequest(endpoint, "DELETE");
    }
};