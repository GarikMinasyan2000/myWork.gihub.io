export const sendRequest = (url, method, body, formData = false) => {
    return fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json; charset = utf-8' },
        body: JSON.stringify(body)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            throw err
        })
}