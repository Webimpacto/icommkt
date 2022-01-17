export interface IcommContact {
    Email: String;
    CustomFields: [
        {
            Key: String;
            Value: String;
        }
    ];
}
declare class Icommkt {
    apiKey: string;
    constructor(apiKey: string);
    createContact(ProfileKey: string, Contact: IcommContact): Promise<import("axios").AxiosResponse<any, any>>;
}
export default Icommkt;
