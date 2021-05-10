/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { I_DraftAdministrativeDataRequestBuilder } from './I_DraftAdministrativeDataRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomFieldV2, DateField, EntityBuilderType, EntityV2, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "I_DraftAdministrativeData" of service "SEPMRA_PROD_MAN".
 */
export class I_DraftAdministrativeData extends EntityV2 implements I_DraftAdministrativeDataType {
  /**
   * Technical entity name for I_DraftAdministrativeData.
   */
  static _entityName = 'I_DraftAdministrativeData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
  /**
   * Créé par.
   * Maximum length: 12.
   * @nullable
   */
  createdByUser?: string;
  /**
   * Dernière modif.
   * @nullable
   */
  lastChangeDateTime?: Moment;
  /**
   * Dernière modif. par.
   * Maximum length: 12.
   * @nullable
   */
  lastChangedByUser?: string;
  /**
   * Ty. accès vers. pré.
   * Maximum length: 1.
   * @nullable
   */
  draftAccessType?: string;
  /**
   * Début du traitement.
   * @nullable
   */
  processingStartDateTime?: Moment;
  /**
   * Responsable.
   * Maximum length: 12.
   * @nullable
   */
  inProcessByUser?: string;
  /**
   * Sauveg. par l'util.
   * @nullable
   */
  draftIsKeptByUser?: boolean;
  /**
   * Début du blocage.
   * @nullable
   */
  enqueueStartDateTime?: Moment;
  /**
   * Créée par moi.
   * @nullable
   */
  draftIsCreatedByMe?: boolean;
  /**
   * Dern. modif. par moi.
   * @nullable
   */
  draftIsLastChangedByMe?: boolean;
  /**
   * Traitée par moi.
   * @nullable
   */
  draftIsProcessedByMe?: boolean;
  /**
   * Description.
   * Maximum length: 80.
   * @nullable
   */
  createdByUserDescription?: string;
  /**
   * Description.
   * Maximum length: 80.
   * @nullable
   */
  lastChangedByUserDescription?: string;
  /**
   * Description.
   * Maximum length: 80.
   * @nullable
   */
  inProcessByUserDescription?: string;
  /**
   * VersPrélim. (IDtech).
   */
  draftUuid!: string;
  /**
   * ID entité vers. pré.
   * Maximum length: 30.
   * @nullable
   */
  draftEntityType?: string;
  /**
   * Créé le.
   * @nullable
   */
  creationDateTime?: Moment;

  /**
   * Returns an entity builder to construct instances of `I_DraftAdministrativeData`.
   * @returns A builder that constructs instances of entity type `I_DraftAdministrativeData`.
   */
  static builder(): EntityBuilderType<I_DraftAdministrativeData, I_DraftAdministrativeDataType> {
    return EntityV2.entityBuilder(I_DraftAdministrativeData);
  }

  /**
   * Returns a request builder to construct requests for operations on the `I_DraftAdministrativeData` entity type.
   * @returns A `I_DraftAdministrativeData` request builder.
   */
  static requestBuilder(): I_DraftAdministrativeDataRequestBuilder {
    return new I_DraftAdministrativeDataRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `I_DraftAdministrativeData`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `I_DraftAdministrativeData`.
   */
  static customField(fieldName: string): CustomFieldV2<I_DraftAdministrativeData> {
    return EntityV2.customFieldSelector(fieldName, I_DraftAdministrativeData);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface I_DraftAdministrativeDataType {
  createdByUser?: string | null;
  lastChangeDateTime?: Moment | null;
  lastChangedByUser?: string | null;
  draftAccessType?: string | null;
  processingStartDateTime?: Moment | null;
  inProcessByUser?: string | null;
  draftIsKeptByUser?: boolean | null;
  enqueueStartDateTime?: Moment | null;
  draftIsCreatedByMe?: boolean | null;
  draftIsLastChangedByMe?: boolean | null;
  draftIsProcessedByMe?: boolean | null;
  createdByUserDescription?: string | null;
  lastChangedByUserDescription?: string | null;
  inProcessByUserDescription?: string | null;
  draftUuid: string;
  draftEntityType?: string | null;
  creationDateTime?: Moment | null;
}

export namespace I_DraftAdministrativeData {
  /**
   * Static representation of the [[createdByUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER: StringField<I_DraftAdministrativeData> = new StringField('CreatedByUser', I_DraftAdministrativeData, 'Edm.String');
  /**
   * Static representation of the [[lastChangeDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_CHANGE_DATE_TIME: DateField<I_DraftAdministrativeData> = new DateField('LastChangeDateTime', I_DraftAdministrativeData, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastChangedByUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_CHANGED_BY_USER: StringField<I_DraftAdministrativeData> = new StringField('LastChangedByUser', I_DraftAdministrativeData, 'Edm.String');
  /**
   * Static representation of the [[draftAccessType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFT_ACCESS_TYPE: StringField<I_DraftAdministrativeData> = new StringField('DraftAccessType', I_DraftAdministrativeData, 'Edm.String');
  /**
   * Static representation of the [[processingStartDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROCESSING_START_DATE_TIME: DateField<I_DraftAdministrativeData> = new DateField('ProcessingStartDateTime', I_DraftAdministrativeData, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[inProcessByUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IN_PROCESS_BY_USER: StringField<I_DraftAdministrativeData> = new StringField('InProcessByUser', I_DraftAdministrativeData, 'Edm.String');
  /**
   * Static representation of the [[draftIsKeptByUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFT_IS_KEPT_BY_USER: BooleanField<I_DraftAdministrativeData> = new BooleanField('DraftIsKeptByUser', I_DraftAdministrativeData, 'Edm.Boolean');
  /**
   * Static representation of the [[enqueueStartDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENQUEUE_START_DATE_TIME: DateField<I_DraftAdministrativeData> = new DateField('EnqueueStartDateTime', I_DraftAdministrativeData, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[draftIsCreatedByMe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFT_IS_CREATED_BY_ME: BooleanField<I_DraftAdministrativeData> = new BooleanField('DraftIsCreatedByMe', I_DraftAdministrativeData, 'Edm.Boolean');
  /**
   * Static representation of the [[draftIsLastChangedByMe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFT_IS_LAST_CHANGED_BY_ME: BooleanField<I_DraftAdministrativeData> = new BooleanField('DraftIsLastChangedByMe', I_DraftAdministrativeData, 'Edm.Boolean');
  /**
   * Static representation of the [[draftIsProcessedByMe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFT_IS_PROCESSED_BY_ME: BooleanField<I_DraftAdministrativeData> = new BooleanField('DraftIsProcessedByMe', I_DraftAdministrativeData, 'Edm.Boolean');
  /**
   * Static representation of the [[createdByUserDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER_DESCRIPTION: StringField<I_DraftAdministrativeData> = new StringField('CreatedByUserDescription', I_DraftAdministrativeData, 'Edm.String');
  /**
   * Static representation of the [[lastChangedByUserDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_CHANGED_BY_USER_DESCRIPTION: StringField<I_DraftAdministrativeData> = new StringField('LastChangedByUserDescription', I_DraftAdministrativeData, 'Edm.String');
  /**
   * Static representation of the [[inProcessByUserDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IN_PROCESS_BY_USER_DESCRIPTION: StringField<I_DraftAdministrativeData> = new StringField('InProcessByUserDescription', I_DraftAdministrativeData, 'Edm.String');
  /**
   * Static representation of the [[draftUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFT_UUID: StringField<I_DraftAdministrativeData> = new StringField('DraftUUID', I_DraftAdministrativeData, 'Edm.Guid');
  /**
   * Static representation of the [[draftEntityType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFT_ENTITY_TYPE: StringField<I_DraftAdministrativeData> = new StringField('DraftEntityType', I_DraftAdministrativeData, 'Edm.String');
  /**
   * Static representation of the [[creationDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE_TIME: DateField<I_DraftAdministrativeData> = new DateField('CreationDateTime', I_DraftAdministrativeData, 'Edm.DateTimeOffset');
  /**
   * All fields of the I_DraftAdministrativeData entity.
   */
  export const _allFields: Array<StringField<I_DraftAdministrativeData> | DateField<I_DraftAdministrativeData> | BooleanField<I_DraftAdministrativeData>> = [
    I_DraftAdministrativeData.CREATED_BY_USER,
    I_DraftAdministrativeData.LAST_CHANGE_DATE_TIME,
    I_DraftAdministrativeData.LAST_CHANGED_BY_USER,
    I_DraftAdministrativeData.DRAFT_ACCESS_TYPE,
    I_DraftAdministrativeData.PROCESSING_START_DATE_TIME,
    I_DraftAdministrativeData.IN_PROCESS_BY_USER,
    I_DraftAdministrativeData.DRAFT_IS_KEPT_BY_USER,
    I_DraftAdministrativeData.ENQUEUE_START_DATE_TIME,
    I_DraftAdministrativeData.DRAFT_IS_CREATED_BY_ME,
    I_DraftAdministrativeData.DRAFT_IS_LAST_CHANGED_BY_ME,
    I_DraftAdministrativeData.DRAFT_IS_PROCESSED_BY_ME,
    I_DraftAdministrativeData.CREATED_BY_USER_DESCRIPTION,
    I_DraftAdministrativeData.LAST_CHANGED_BY_USER_DESCRIPTION,
    I_DraftAdministrativeData.IN_PROCESS_BY_USER_DESCRIPTION,
    I_DraftAdministrativeData.DRAFT_UUID,
    I_DraftAdministrativeData.DRAFT_ENTITY_TYPE,
    I_DraftAdministrativeData.CREATION_DATE_TIME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<I_DraftAdministrativeData> = new AllFields('*', I_DraftAdministrativeData);
  /**
   * All key fields of the I_DraftAdministrativeData entity.
   */
  export const _keyFields: Array<Field<I_DraftAdministrativeData>> = [I_DraftAdministrativeData.DRAFT_UUID];
  /**
   * Mapping of all key field names to the respective static field property I_DraftAdministrativeData.
   */
  export const _keys: { [keys: string]: Field<I_DraftAdministrativeData> } = I_DraftAdministrativeData._keyFields.reduce((acc: { [keys: string]: Field<I_DraftAdministrativeData> }, field: Field<I_DraftAdministrativeData>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
