/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Sepmra_C_Pd_ProductImageRequestBuilder } from './Sepmra_C_Pd_ProductImageRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomFieldV2, DateField, EntityBuilderType, EntityV2, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SEPMRA_C_PD_ProductImage" of service "SEPMRA_PROD_MAN".
 */
export class Sepmra_C_Pd_ProductImage extends EntityV2 implements Sepmra_C_Pd_ProductImageType {
  /**
   * Technical entity name for Sepmra_C_Pd_ProductImage.
   */
  static _entityName = 'SEPMRA_C_PD_ProductImage';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
  /**
   * Dyn. Action Control.
   * @nullable
   */
  preparationAc?: boolean;
  /**
   * Dyn. Action Control.
   * @nullable
   */
  validationAc?: boolean;
  /**
   * Image Draft UUID.
   */
  productImageDraftUuid!: string;
  /**
   * Product ID.
   * Maximum length: 10.
   */
  activeProduct!: string;
  /**
   * Product Image.
   * Maximum length: 70.
   */
  activeProductImage!: string;
  /**
   * File Name.
   * Maximum length: 255.
   */
  fileName!: string;
  /**
   * MIME Type.
   * Maximum length: 100.
   */
  mimeType!: string;
  /**
   * Titre du doc.
   * Maximum length: 50.
   * @nullable
   */
  description?: string;
  /**
   * Created At.
   * @nullable
   */
  creationDateTime?: Moment;
  /**
   * Changed At.
   * @nullable
   */
  lastChangedDateTime?: Moment;
  /**
   * Est actif.
   * @nullable
   */
  isActiveEntity?: boolean;
  /**
   * A un document actif.
   * @nullable
   */
  hasActiveEntity?: boolean;
  /**
   * A vers. préliminaire.
   * @nullable
   */
  hasDraftEntity?: boolean;
  /**
   * One-to-one navigation property to the [[I_DraftAdministrativeData]] entity.
   */
  draftAdministrativeData?: I_DraftAdministrativeData | null;
  /**
   * One-to-one navigation property to the [[Sepmra_C_Pd_ProductImage]] entity.
   */
  siblingEntity?: Sepmra_C_Pd_ProductImage | null;

  /**
   * Returns an entity builder to construct instances of `Sepmra_C_Pd_ProductImage`.
   * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_ProductImage`.
   */
  static builder(): EntityBuilderType<Sepmra_C_Pd_ProductImage, Sepmra_C_Pd_ProductImageType> {
    return EntityV2.entityBuilder(Sepmra_C_Pd_ProductImage);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Sepmra_C_Pd_ProductImage` entity type.
   * @returns A `Sepmra_C_Pd_ProductImage` request builder.
   */
  static requestBuilder(): Sepmra_C_Pd_ProductImageRequestBuilder {
    return new Sepmra_C_Pd_ProductImageRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_C_Pd_ProductImage`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_ProductImage`.
   */
  static customField(fieldName: string): CustomFieldV2<Sepmra_C_Pd_ProductImage> {
    return EntityV2.customFieldSelector(fieldName, Sepmra_C_Pd_ProductImage);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { I_DraftAdministrativeData, I_DraftAdministrativeDataType } from './I_DraftAdministrativeData';

export interface Sepmra_C_Pd_ProductImageType {
  preparationAc?: boolean | null;
  validationAc?: boolean | null;
  productImageDraftUuid: string;
  activeProduct: string;
  activeProductImage: string;
  fileName: string;
  mimeType: string;
  description?: string | null;
  creationDateTime?: Moment | null;
  lastChangedDateTime?: Moment | null;
  isActiveEntity?: boolean | null;
  hasActiveEntity?: boolean | null;
  hasDraftEntity?: boolean | null;
  draftAdministrativeData?: I_DraftAdministrativeDataType | null;
  siblingEntity?: Sepmra_C_Pd_ProductImageType | null;
}

export namespace Sepmra_C_Pd_ProductImage {
  /**
   * Static representation of the [[preparationAc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PREPARATION_AC: BooleanField<Sepmra_C_Pd_ProductImage> = new BooleanField('Preparation_ac', Sepmra_C_Pd_ProductImage, 'Edm.Boolean');
  /**
   * Static representation of the [[validationAc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALIDATION_AC: BooleanField<Sepmra_C_Pd_ProductImage> = new BooleanField('Validation_ac', Sepmra_C_Pd_ProductImage, 'Edm.Boolean');
  /**
   * Static representation of the [[productImageDraftUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_IMAGE_DRAFT_UUID: StringField<Sepmra_C_Pd_ProductImage> = new StringField('ProductImageDraftUUID', Sepmra_C_Pd_ProductImage, 'Edm.Guid');
  /**
   * Static representation of the [[activeProduct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVE_PRODUCT: StringField<Sepmra_C_Pd_ProductImage> = new StringField('ActiveProduct', Sepmra_C_Pd_ProductImage, 'Edm.String');
  /**
   * Static representation of the [[activeProductImage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVE_PRODUCT_IMAGE: StringField<Sepmra_C_Pd_ProductImage> = new StringField('ActiveProductImage', Sepmra_C_Pd_ProductImage, 'Edm.String');
  /**
   * Static representation of the [[fileName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILE_NAME: StringField<Sepmra_C_Pd_ProductImage> = new StringField('FileName', Sepmra_C_Pd_ProductImage, 'Edm.String');
  /**
   * Static representation of the [[mimeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIME_TYPE: StringField<Sepmra_C_Pd_ProductImage> = new StringField('MIMEType', Sepmra_C_Pd_ProductImage, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<Sepmra_C_Pd_ProductImage> = new StringField('Description', Sepmra_C_Pd_ProductImage, 'Edm.String');
  /**
   * Static representation of the [[creationDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE_TIME: DateField<Sepmra_C_Pd_ProductImage> = new DateField('CreationDateTime', Sepmra_C_Pd_ProductImage, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastChangedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_CHANGED_DATE_TIME: DateField<Sepmra_C_Pd_ProductImage> = new DateField('LastChangedDateTime', Sepmra_C_Pd_ProductImage, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[isActiveEntity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ACTIVE_ENTITY: BooleanField<Sepmra_C_Pd_ProductImage> = new BooleanField('IsActiveEntity', Sepmra_C_Pd_ProductImage, 'Edm.Boolean');
  /**
   * Static representation of the [[hasActiveEntity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAS_ACTIVE_ENTITY: BooleanField<Sepmra_C_Pd_ProductImage> = new BooleanField('HasActiveEntity', Sepmra_C_Pd_ProductImage, 'Edm.Boolean');
  /**
   * Static representation of the [[hasDraftEntity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAS_DRAFT_ENTITY: BooleanField<Sepmra_C_Pd_ProductImage> = new BooleanField('HasDraftEntity', Sepmra_C_Pd_ProductImage, 'Edm.Boolean');
  /**
   * Static representation of the one-to-one navigation property [[draftAdministrativeData]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFT_ADMINISTRATIVE_DATA: OneToOneLink<Sepmra_C_Pd_ProductImage, I_DraftAdministrativeData> = new OneToOneLink('DraftAdministrativeData', Sepmra_C_Pd_ProductImage, I_DraftAdministrativeData);
  /**
   * Static representation of the one-to-one navigation property [[siblingEntity]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIBLING_ENTITY: OneToOneLink<Sepmra_C_Pd_ProductImage, Sepmra_C_Pd_ProductImage> = new OneToOneLink('SiblingEntity', Sepmra_C_Pd_ProductImage, Sepmra_C_Pd_ProductImage);
  /**
   * All fields of the Sepmra_C_Pd_ProductImage entity.
   */
  export const _allFields: Array<BooleanField<Sepmra_C_Pd_ProductImage> | StringField<Sepmra_C_Pd_ProductImage> | DateField<Sepmra_C_Pd_ProductImage> | OneToOneLink<Sepmra_C_Pd_ProductImage, I_DraftAdministrativeData> | OneToOneLink<Sepmra_C_Pd_ProductImage, Sepmra_C_Pd_ProductImage>> = [
    Sepmra_C_Pd_ProductImage.PREPARATION_AC,
    Sepmra_C_Pd_ProductImage.VALIDATION_AC,
    Sepmra_C_Pd_ProductImage.PRODUCT_IMAGE_DRAFT_UUID,
    Sepmra_C_Pd_ProductImage.ACTIVE_PRODUCT,
    Sepmra_C_Pd_ProductImage.ACTIVE_PRODUCT_IMAGE,
    Sepmra_C_Pd_ProductImage.FILE_NAME,
    Sepmra_C_Pd_ProductImage.MIME_TYPE,
    Sepmra_C_Pd_ProductImage.DESCRIPTION,
    Sepmra_C_Pd_ProductImage.CREATION_DATE_TIME,
    Sepmra_C_Pd_ProductImage.LAST_CHANGED_DATE_TIME,
    Sepmra_C_Pd_ProductImage.IS_ACTIVE_ENTITY,
    Sepmra_C_Pd_ProductImage.HAS_ACTIVE_ENTITY,
    Sepmra_C_Pd_ProductImage.HAS_DRAFT_ENTITY,
    Sepmra_C_Pd_ProductImage.DRAFT_ADMINISTRATIVE_DATA,
    Sepmra_C_Pd_ProductImage.SIBLING_ENTITY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Sepmra_C_Pd_ProductImage> = new AllFields('*', Sepmra_C_Pd_ProductImage);
  /**
   * All key fields of the Sepmra_C_Pd_ProductImage entity.
   */
  export const _keyFields: Array<Field<Sepmra_C_Pd_ProductImage>> = [Sepmra_C_Pd_ProductImage.PRODUCT_IMAGE_DRAFT_UUID, Sepmra_C_Pd_ProductImage.ACTIVE_PRODUCT, Sepmra_C_Pd_ProductImage.ACTIVE_PRODUCT_IMAGE];
  /**
   * Mapping of all key field names to the respective static field property Sepmra_C_Pd_ProductImage.
   */
  export const _keys: { [keys: string]: Field<Sepmra_C_Pd_ProductImage> } = Sepmra_C_Pd_ProductImage._keyFields.reduce((acc: { [keys: string]: Field<Sepmra_C_Pd_ProductImage> }, field: Field<Sepmra_C_Pd_ProductImage>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
