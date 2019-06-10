

export default function callAPi(param) {
    return new Promise((resolve, reject) => { 
        const url = `http://localhost:3001/items?q=${param.payload}`;
        fetch(url, {method: "GET"})
            .then(response => response.json())
            .then(res => {
                resolve(res);
                console.log(res)
            })
            .catch(err => {
                reject(err)
            })
        })
}




