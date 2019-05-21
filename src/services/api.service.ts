export class APIBase{
    private domain : string = '';

    public config(domain: string){
        this.domain = domain;
    }

    private async raw (endpoint: string, params: any){
        try {
            let res = (await fetch(endpoint, params).then(res => res.json()));
            if(res.status == true){
                return [null, res];
            }
            else{
                return ['API error: ' + res.msg, null];
            }
        }
        catch(err){
            return [err, null];
        }
    }

    post(path: string, data: any){
        return this.raw(this.domain + path, {
            body: JSON.stringify(data),
            headers: {
                'Accept' : 'application/json',
                'Content-type': 'application/json',
            },
            method: 'POST'
        });
    }

    get(path: string, query: string){
        return this.raw(this.domain + path + "?" + query, {
            headers: {
                'Accept' : 'application/json',
                'Content-type': 'application/json',
            },
            method: 'GET'
        });
    }

    put(path: string, data: any){
        return this.raw(this.domain + path, {
            body: JSON.stringify(data),
            headers: {
                'Accept' : 'application/json',
                'Content-type': 'application/json',
            },
            method: 'PUT'
        })
    }

    delete(path: string, data: any){
        return this.raw(this.domain + path, {
            body: JSON.stringify(data),
            headers: {
                'Accept' : 'application/json',
                'Content-type': 'application/json',
            },
            method: 'DELETE'
        })
    }
}