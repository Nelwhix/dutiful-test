export default class HTTPClient {
    host = import.meta.env.API_URL

    static async post(url = "", data = {}) {
        const res = await fetch(`${this.host + url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            const data = await res.json()
            throw new Error(`{"message": "${data.message}","code": ${res.status}}`)
        }

        return res.json()
    }

    static async $get(url = "") {
        const res = await fetch(`${this.host + url}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('nuber_token')}`
            },
        });
        if (!res.ok) {
            const data = await res.json()
            throw new Error(`{"message": "${data.message}","code": ${res.status}}`)
        }

        return res.json()
    }
}