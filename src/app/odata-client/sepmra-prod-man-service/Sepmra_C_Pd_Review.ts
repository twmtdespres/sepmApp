/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Sepmra_C_Pd_ReviewRequestBuilder } from './Sepmra_C_Pd_ReviewRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomFieldV2, DateField, EntityBuilderType, EntityV2, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SEPMRA_C_PD_Review" of service "SEPMRA_PROD_MAN".
 */
export class Sepmra_C_Pd_Review extends EntityV2 implements Sepmra_C_Pd_ReviewType {
  /**
   * Technical entity name for Sepmra_C_Pd_Review.
   */
  static _entityName = 'SEPMRA_C_PD_Review';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
  /**
   * Review Post UUID.
   */
  productReviewPostUuid!: string;
  /**
   * Product.
   * Maximum length: 10.
   * @nullable
   */
  product?: string;
  /**
   * Rating Text.
   * @nullable
   */
  reviewPostText?: string;
  /**
   * Rating.
   * @nullable
   */
  reviewRatingValue?: number;
  /**
   * Helpful.
   * @nullable
   */
  numberOfAffirmativeAnswers?: number;
  /**
   * Reviewed.
   * @nullable
   */
  reviewDateTime?: Moment;
  /**
   * Is Helpful.
   * @nullable
   */
  isHelpfulForCurrentUser?: boolean;
  /**
   * Reviewed by Me.
   * @nullable
   */
  isReviewOfCurrentUser?: boolean;
  /**
   * Reviewer.
   * Maximum length: 81.
   * @nullable
   */
  userDisplayName?: string;

  /**
   * Returns an entity builder to construct instances of `Sepmra_C_Pd_Review`.
   * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_Review`.
   */
  static builder(): EntityBuilderType<Sepmra_C_Pd_Review, Sepmra_C_Pd_ReviewType> {
    return EntityV2.entityBuilder(Sepmra_C_Pd_Review);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Sepmra_C_Pd_Review` entity type.
   * @returns A `Sepmra_C_Pd_Review` request builder.
   */
  static requestBuilder(): Sepmra_C_Pd_ReviewRequestBuilder {
    return new Sepmra_C_Pd_ReviewRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_C_Pd_Review`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_Review`.
   */
  static customField(fieldName: string): CustomFieldV2<Sepmra_C_Pd_Review> {
    return EntityV2.customFieldSelector(fieldName, Sepmra_C_Pd_Review);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface Sepmra_C_Pd_ReviewType {
  productReviewPostUuid: string;
  product?: string | null;
  reviewPostText?: string | null;
  reviewRatingValue?: number | null;
  numberOfAffirmativeAnswers?: number | null;
  reviewDateTime?: Moment | null;
  isHelpfulForCurrentUser?: boolean | null;
  isReviewOfCurrentUser?: boolean | null;
  userDisplayName?: string | null;
}

export namespace Sepmra_C_Pd_Review {
  /**
   * Static representation of the [[productReviewPostUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_REVIEW_POST_UUID: StringField<Sepmra_C_Pd_Review> = new StringField('ProductReviewPostUUID', Sepmra_C_Pd_Review, 'Edm.Guid');
  /**
   * Static representation of the [[product]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT: StringField<Sepmra_C_Pd_Review> = new StringField('Product', Sepmra_C_Pd_Review, 'Edm.String');
  /**
   * Static representation of the [[reviewPostText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVIEW_POST_TEXT: StringField<Sepmra_C_Pd_Review> = new StringField('ReviewPostText', Sepmra_C_Pd_Review, 'Edm.String');
  /**
   * Static representation of the [[reviewRatingValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVIEW_RATING_VALUE: NumberField<Sepmra_C_Pd_Review> = new NumberField('ReviewRatingValue', Sepmra_C_Pd_Review, 'Edm.Byte');
  /**
   * Static representation of the [[numberOfAffirmativeAnswers]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_AFFIRMATIVE_ANSWERS: NumberField<Sepmra_C_Pd_Review> = new NumberField('NumberOfAffirmativeAnswers', Sepmra_C_Pd_Review, 'Edm.Int32');
  /**
   * Static representation of the [[reviewDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVIEW_DATE_TIME: DateField<Sepmra_C_Pd_Review> = new DateField('ReviewDateTime', Sepmra_C_Pd_Review, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[isHelpfulForCurrentUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_HELPFUL_FOR_CURRENT_USER: BooleanField<Sepmra_C_Pd_Review> = new BooleanField('IsHelpfulForCurrentUser', Sepmra_C_Pd_Review, 'Edm.Boolean');
  /**
   * Static representation of the [[isReviewOfCurrentUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_REVIEW_OF_CURRENT_USER: BooleanField<Sepmra_C_Pd_Review> = new BooleanField('IsReviewOfCurrentUser', Sepmra_C_Pd_Review, 'Edm.Boolean');
  /**
   * Static representation of the [[userDisplayName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_DISPLAY_NAME: StringField<Sepmra_C_Pd_Review> = new StringField('UserDisplayName', Sepmra_C_Pd_Review, 'Edm.String');
  /**
   * All fields of the Sepmra_C_Pd_Review entity.
   */
  export const _allFields: Array<StringField<Sepmra_C_Pd_Review> | NumberField<Sepmra_C_Pd_Review> | DateField<Sepmra_C_Pd_Review> | BooleanField<Sepmra_C_Pd_Review>> = [
    Sepmra_C_Pd_Review.PRODUCT_REVIEW_POST_UUID,
    Sepmra_C_Pd_Review.PRODUCT,
    Sepmra_C_Pd_Review.REVIEW_POST_TEXT,
    Sepmra_C_Pd_Review.REVIEW_RATING_VALUE,
    Sepmra_C_Pd_Review.NUMBER_OF_AFFIRMATIVE_ANSWERS,
    Sepmra_C_Pd_Review.REVIEW_DATE_TIME,
    Sepmra_C_Pd_Review.IS_HELPFUL_FOR_CURRENT_USER,
    Sepmra_C_Pd_Review.IS_REVIEW_OF_CURRENT_USER,
    Sepmra_C_Pd_Review.USER_DISPLAY_NAME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Sepmra_C_Pd_Review> = new AllFields('*', Sepmra_C_Pd_Review);
  /**
   * All key fields of the Sepmra_C_Pd_Review entity.
   */
  export const _keyFields: Array<Field<Sepmra_C_Pd_Review>> = [Sepmra_C_Pd_Review.PRODUCT_REVIEW_POST_UUID];
  /**
   * Mapping of all key field names to the respective static field property Sepmra_C_Pd_Review.
   */
  export const _keys: { [keys: string]: Field<Sepmra_C_Pd_Review> } = Sepmra_C_Pd_Review._keyFields.reduce((acc: { [keys: string]: Field<Sepmra_C_Pd_Review> }, field: Field<Sepmra_C_Pd_Review>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
