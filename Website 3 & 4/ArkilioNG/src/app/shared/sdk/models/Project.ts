/* tslint:disable */
import {
  Client,
  Milestone
} from '../index';

declare var Object: any;
export interface ProjectInterface {
  "project_name": string;
  "project_description": string;
  "project_cost": string;
  "project_deadline": Date;
  "invoice_frequency": string;
  "client_id": number;
  "id"?: number;
  client?: Client;
  milestone?: Milestone[];
}

export class Project implements ProjectInterface {
  "project_name": string;
  "project_description": string;
  "project_cost": string;
  "project_deadline": Date;
  "invoice_frequency": string;
  "client_id": number;
  "id": number;
  client: Client;
  milestone: Milestone[];
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
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        client: {
          name: 'client',
          type: 'Client',
          model: 'Client',
          relationType: 'belongsTo',
                  keyFrom: 'id',
          keyTo: 'id'
        },
        milestone: {
          name: 'milestone',
          type: 'Milestone[]',
          model: 'Milestone',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'id'
        },
      }
    }
  }
}
