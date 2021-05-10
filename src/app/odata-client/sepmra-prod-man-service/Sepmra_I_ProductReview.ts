/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Sepmra_I_ProductReviewRequestBuilder } from './Sepmra_I_ProductReviewRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomFieldV2, EntityBuilderType, EntityV2, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SEPMRA_I_ProductReview" of service "SEPMRA_PROD_MAN".
 */
export class Sepmra_I_ProductReview extends EntityV2 implements Sepmra_I_ProductReviewType {
  /**
   * Technical entity name for Sepmra_I_ProductReview.
   */
  static _entityName = 'SEPMRA_I_ProductReview';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
  /**
   * Id.
   */
  id!: string;
  /**
   * Product ID.
   * Maximum length: 10.
   * @nullable
   */
  product?: string;
  /**
   * Average Rating.
   * @nullable
   */
  averageRatingValue?: BigNumber;
  /**
   * Number of Reviews.
   * @nullable
   */
  numberOfReviewPosts?: number;

  /**
   * Returns an entity builder to construct instances of `Sepmra_I_ProductReview`.
   * @returns A builder that constructs instances of entity type `Sepmra_I_ProductReview`.
   */
  static builder(): EntityBuilderType<Sepmra_I_ProductReview, Sepmra_I_ProductReviewType> {
    return EntityV2.entityBuilder(Sepmra_I_ProductReview);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Sepmra_I_ProductReview` entity type.
   * @returns A `Sepmra_I_ProductReview` request builder.
   */
  static requestBuilder(): Sepmra_I_ProductReviewRequestBuilder {
    return new Sepmra_I_ProductReviewRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_I_ProductReview`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Sepmra_I_ProductReview`.
   */
  static customField(fieldName: string): CustomFieldV2<Sepmra_I_ProductReview> {
    return EntityV2.customFieldSelector(fieldName, Sepmra_I_ProductReview);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface Sepmra_I_ProductReviewType {
  id: string;
  product?: string | null;
  averageRatingValue?: BigNumber | null;
  numberOfReviewPosts?: number | null;
}

export namespace Sepmra_I_ProductReview {
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<Sepmra_I_ProductReview> = new StringField('ID', Sepmra_I_ProductReview, 'Edm.String');
  /**
   * Static representation of the [[product]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT: StringField<Sepmra_I_ProductReview> = new StringField('Product', Sepmra_I_ProductReview, 'Edm.String');
  /**
   * Static representation of the [[averageRatingValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AVERAGE_RATING_VALUE: BigNumberField<Sepmra_I_ProductReview> = new BigNumberField('AverageRatingValue', Sepmra_I_ProductReview, 'Edm.Decimal');
  /**
   * Static representation of the [[numberOfReviewPosts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_REVIEW_POSTS: NumberField<Sepmra_I_ProductReview> = new NumberField('NumberOfReviewPosts', Sepmra_I_ProductReview, 'Edm.Int32');
  /**
   * All fields of the Sepmra_I_ProductReview entity.
   */
  export const _allFields: Array<StringField<Sepmra_I_ProductReview> | BigNumberField<Sepmra_I_ProductReview> | NumberField<Sepmra_I_ProductReview>> = [
    Sepmra_I_ProductReview.ID,
    Sepmra_I_ProductReview.PRODUCT,
    Sepmra_I_ProductReview.AVERAGE_RATING_VALUE,
    Sepmra_I_ProductReview.NUMBER_OF_REVIEW_POSTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Sepmra_I_ProductReview> = new AllFields('*', Sepmra_I_ProductReview);
  /**
   * All key fields of the Sepmra_I_ProductReview entity.
   */
  export const _keyFields: Array<Field<Sepmra_I_ProductReview>> = [Sepmra_I_ProductReview.ID];
  /**
   * Mapping of all key field names to the respective static field property Sepmra_I_ProductReview.
   */
  export const _keys: { [keys: string]: Field<Sepmra_I_ProductReview> } = Sepmra_I_ProductReview._keyFields.reduce((acc: { [keys: string]: Field<Sepmra_I_ProductReview> }, field: Field<Sepmra_I_ProductReview>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
