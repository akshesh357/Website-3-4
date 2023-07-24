/* tslint:disable */
import {
  Project
} from '../index';

declare var Object: any;
export interface ClientInterface {
  "client_name": string;
  "company_name": string;
  "address": string;
  "city": string;
  "province": string;
  "postal_code": string;
  "email": string;
  "contact": number;
  "realm"?: string;
  "username"?: string;
  "emailVerified"?: boolean;
  "id"?: number;
  "password"?: string;
  accessTokens?: any[];
  project?: Project[];
}

export class Client implements ClientInterface {
  "client_name": string;
  "company_name": string;
  "address": string;
  "city": string;
  "province": string;
  "postal_code": string;
  "email": string;
  "contact": number;
  "realm": string;
  "username": string;
  "emailVerified": boolean;
  "id": number;
  "password": string;
  accessTokens: any[];
  project: Project[];
  constructor(data?: ClientInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Client`.
   */
  public static getModelName() {
    return "Client";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Client for dynamic purposes.
  **/
  public static factory(data: ClientInterface): Client{
    return new Client(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Client',
      plural: 'Clients',
      path: 'Clients',
      idName: 'id',
      properties: {
        "client_name": {
          name: 'client_name',
          type: 'string'
        },
        "company_name": {
          name: 'company_name',
          type: 'string'
        },
        "address": {
          name: 'address',
          type: 'string'
        },
        "city": {
          name: 'city',
          type: 'string'
        },
        "province": {
          name: 'province',
          type: 'string'
        },
        "postal_code": {
          name: 'postal_code',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "contact": {
          name: 'contact',
          type: 'number'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        project: {
          name: 'project',
          type: 'Project[]',
          model: 'Project',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'id'
        },
      }
    }
  }
}
