/* tslint:disable */
import {
  Project
} from '../index';

declare var Object: any;
export interface MilestoneInterface {
  "typeof_milestone": string;
  "percentage": string;
  "priceof_milestone": string;
  "deadline": Date;
  "reminder": Date;
  "completed": boolean;
  "paid": boolean;
  "project_id": number;
  "file_upload"?: any;
  "id"?: number;
  project?: Project;
}

export class Milestone implements MilestoneInterface {
  "typeof_milestone": string;
  "percentage": string;
  "priceof_milestone": string;
  "deadline": Date;
  "reminder": Date;
  "completed": boolean;
  "paid": boolean;
  "project_id": number;
  "file_upload": any;
  "id": number;
  project: Project;
  constructor(data?: MilestoneInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Milestone`.
   */
  public static getModelName() {
    return "Milestone";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Milestone for dynamic purposes.
  **/
  public static factory(data: MilestoneInterface): Milestone{
    return new Milestone(data);
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
      name: 'Milestone',
      plural: 'Milestones',
      path: 'Milestones',
      idName: 'id',
      properties: {
        "typeof_milestone": {
          name: 'typeof_milestone',
          type: 'string'
        },
        "percentage": {
          name: 'percentage',
          type: 'string'
        },
        "priceof_milestone": {
          name: 'priceof_milestone',
          type: 'string'
        },
        "deadline": {
          name: 'deadline',
          type: 'Date'
        },
        "reminder": {
          name: 'reminder',
          type: 'Date'
        },
        "completed": {
          name: 'completed',
          type: 'boolean'
        },
        "paid": {
          name: 'paid',
          type: 'boolean'
        },
        "project_id": {
          name: 'project_id',
          type: 'number'
        },
        "file_upload": {
          name: 'file_upload',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        project: {
          name: 'project',
          type: 'Project',
          model: 'Project',
          relationType: 'belongsTo',
                  keyFrom: 'id',
          keyTo: 'id'
        },
      }
    }
  }
}
