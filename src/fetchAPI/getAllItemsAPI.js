
export default function callAPi(param) {
    console.log(param.payload.valueSearch);
    
    return new Promise((resolve, reject) => {
        let url;
        if(param.payload.valueSearch===null){url = `http://localhost:3001/items`;}
         else { url =`http://localhost:3001/items?q=${param.payload.valueSearch}`}

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




