import {BaseModel} from './base-model.model';

export interface Characteristic extends BaseModel {
    name: string;
    values: string[];
}
