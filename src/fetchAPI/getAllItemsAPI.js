
export default function callAPi() {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/items`;
        fetch(url, {method: "GET"})
            .then(response => response.json())
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            })
        })
}




