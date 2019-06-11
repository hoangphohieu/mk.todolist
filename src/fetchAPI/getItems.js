

export default function callAPi(param) {

    
    return new Promise((resolve, reject) => {
        let url;
        if(param.payload.valueSearch !== null & param.payload.valueSearch !== undefined){
            url = `http://localhost:3001/items?q=${param.payload.valueSearch}&_sort=id&_order=DESC&_page=${param.payload.activePage}&_limit=5`;
        }else if(param.payload.activePage!== undefined){
            url = `http://localhost:3001/items?_sort=id&_order=DESC&_page=${param.payload.activePage}&_limit=5`;
        }
        else{
            url =`http://localhost:3001/items?_sort=id&_order=DESC&_page=${param.payload}&_limit=5`;
        }

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




