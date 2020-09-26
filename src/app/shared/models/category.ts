import {BaseModel} from './base-model.model';

export class Category extends BaseModel {
    name: String;
    parentId?: number;
}
