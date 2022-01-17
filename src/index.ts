import axios from "axios";

export interface IcommContact {
    Email: String,
    CustomFields: [{
        Key: String,
        Value: String
    }]
}

class Icommkt{
    apiKey: string; 
    timeout: number;

    constructor(apiKey: string, timeout:number = 3000){
        this.apiKey = apiKey;
        this.timeout = timeout;
    }

    createContact(ProfileKey: string, Contact: IcommContact){
       return axios.post("https://api.icommarketing.com/Contacts/SaveContact.Json/",
            {
                ProfileKey,
                Contact
            }, {
                headers: {
                    Authorization: this.apiKey
                },
                timeout: this.timeout
            }
            )
    }
}

export default Icommkt