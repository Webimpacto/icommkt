"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var Icommkt = /** @class */ (function () {
    function Icommkt(apiKey) {
        this.apiKey = apiKey;
    }
    Icommkt.prototype.createContact = function (ProfileKey, Contact) {
        return axios_1.default.post("https://api.icommarketing.com/Contacts/SaveContact.Json/", {
            ProfileKey: ProfileKey,
            Contact: Contact
        }, {
            headers: {
                Authorization: this.apiKey
            },
            timeout: 3000
        });
    };
    return Icommkt;
}());
exports.default = Icommkt;
