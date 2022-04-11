import {Entity, model, property} from '@loopback/repository';

@model()
export class Company extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  CompanyId?: number;

  @property({
    type: 'string',
    required: true,
  })
  CompanyName: string;

  @property({
    type: 'string',
    required: true,
  })
  location: string;

  @property({
    type: 'number',
    required: true,
  })
  headcount: number;


  constructor(data?: Partial<Company>) {
    super(data);
  }
}

export interface CompanyRelations {
  // describe navigational properties here
}

export type CompanyWithRelations = Company & CompanyRelations;
