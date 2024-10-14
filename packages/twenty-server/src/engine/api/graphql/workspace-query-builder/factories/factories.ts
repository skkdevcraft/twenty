import { ForeignDataWrapperServerQueryFactory } from 'src/engine/api/graphql/workspace-query-builder/factories/foreign-data-wrapper-server-query.factory';

import { ArgsAliasFactory } from './args-alias.factory';
import { ArgsStringFactory } from './args-string.factory';
import { CreateManyQueryFactory } from './create-many-query.factory';
import { DeleteManyQueryFactory } from './delete-many-query.factory';
import { DeleteOneQueryFactory } from './delete-one-query.factory';
import { FieldAliasFactory } from './field-alias.factory';
import { FieldsStringFactory } from './fields-string.factory';
import { FindDuplicatesQueryFactory } from './find-duplicates-query.factory';
import { FindManyQueryFactory } from './find-many-query.factory';
import { FindOneQueryFactory } from './find-one-query.factory';
import { RecordPositionQueryFactory } from './record-position-query.factory';
import { RelationFieldAliasFactory } from './relation-field-alias.factory';
import { UpdateManyQueryFactory } from './update-many-query.factory';
import { UpdateOneQueryFactory } from './update-one-query.factory';

export const workspaceQueryBuilderFactories = [
  ArgsAliasFactory,
  ArgsStringFactory,
  RelationFieldAliasFactory,
  CreateManyQueryFactory,
  DeleteOneQueryFactory,
  FieldAliasFactory,
  FieldsStringFactory,
  FindManyQueryFactory,
  FindOneQueryFactory,
  FindDuplicatesQueryFactory,
  RecordPositionQueryFactory,
  UpdateOneQueryFactory,
  UpdateManyQueryFactory,
  DeleteManyQueryFactory,
  ForeignDataWrapperServerQueryFactory,
];
