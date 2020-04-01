export default {
    
    getTest (/*req*/) {
        return new Promise((resolve/*, rejected*/) => {
            resolve({ test: 'muh' });
        });
    }

}