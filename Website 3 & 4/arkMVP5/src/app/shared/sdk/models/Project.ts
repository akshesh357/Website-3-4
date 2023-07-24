/* tslint:disable */
import {
  Milestone,
  Client
} from '../index';

declare var Object: any;
export interface ProjectInterface {
  "project_name": string;
  "project_description"?: string;
  "project_cost"?: string;
  "project_deadline"?: Date;
  "invoice_frequency"?: string;
  "client_id": number;
  "project_address"?: string;
  "city"?: string;
  "province"?: string;
  "country"?: string;
  "postal_code"?: string;
  "reminder_1"?: string;
  "reminder_2"?: string;
  "reminder_3"?: string;
  "proposal_file"?: any;
  "contract_file"?: any;
  "id"?: number;
  milestone?: Milestone[];
  client?: Client;
}

export class Project implements ProjectInterface {
  "project_name": string;
  "project_description": string;
  "project_cost": string;
  "project_deadline": Date;
  "invoice_frequency": string;
  "client_id": number;
  "project_address": string;
  "city": string;
  "province": string;
  "country": string;
  "postal_code": string;
  "reminder_1": string;
  "reminder_2": string;
  "reminder_3": string;
  "proposal_file": any;
  "contract_file": any;
  "id": number;
  milestone: Milestone[];
  client: Client;
  constructor(data?: ProjectInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Project`.
   */
  public static getModelName() {
    return "Project";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Project for dynamic purposes.
  **/
  public static factory(data: ProjectInterface): Project{
    return new Project(data);
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
      name: 'Project',
      plural: 'Projects',
      path: 'Projects',
      idName: 'id',
      properties: {
        "project_name": {
          name: 'project_name',
          type: 'string'
        },
        "project_description": {
          name: 'project_description',
          type: 'string'
        },
        "project_cost": {
          name: 'project_cost',
          type: 'string'
        },
        "project_deadline": {
          name: 'project_deadline',
          type: 'Date'
        },
        "invoice_frequency": {
          name: 'invoice_frequency',
          type: 'string'
        },
        "client_id": {
          name: 'client_id',
          type: 'number'
        },
        "project_address": {
          name: 'project_address',
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
        "country": {
          name: 'country',
          type: 'string'
        },
        "postal_code": {
          name: 'postal_code',
          type: 'string'
        },
        "reminder_1": {
          name: 'reminder_1',
          type: 'string'
        },
        "reminder_2": {
          name: 'reminder_2',
          type: 'string'
        },
        "reminder_3": {
          name: 'reminder_3',
          type: 'string'
        },
        "proposal_file": {
          name: 'proposal_file',
          type: 'any'
        },
        "contract_file": {
          name: 'contract_file',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        milestone: {
          name: 'milestone',
          type: 'Milestone[]',
          model: 'Milestone',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'project_id'
        },
        client: {
          name: 'client',
          type: 'Client',
          model: 'Client',
          relationType: 'belongsTo',
                  keyFrom: 'client_id',
          keyTo: 'id'
        },
      }
    }
  }
}
