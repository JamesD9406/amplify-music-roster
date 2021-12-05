import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ArtistsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Artists {
  readonly id: string;
  readonly name: string;
  readonly rate?: number;
  readonly streams?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Artists, ArtistsMetaData>);
  static copyOf(source: Artists, mutator: (draft: MutableModel<Artists, ArtistsMetaData>) => MutableModel<Artists, ArtistsMetaData> | void): Artists;
}