import { Sepmra_C_Pd_ReviewRequestBuilder } from './Sepmra_C_Pd_ReviewRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomFieldV2, DateField, EntityBuilderType, EntityV2, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SEPMRA_C_PD_Review" of service "SEPMRA_PROD_MAN".
 */
export declare class Sepmra_C_Pd_Review extends EntityV2 implements Sepmra_C_Pd_ReviewType {
    /**
     * Technical entity name for Sepmra_C_Pd_Review.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Review Post UUID.
     */
    productReviewPostUuid: string;
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
    static builder(): EntityBuilderType<Sepmra_C_Pd_Review, Sepmra_C_Pd_ReviewType>;
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_C_Pd_Review` entity type.
     * @returns A `Sepmra_C_Pd_Review` request builder.
     */
    static requestBuilder(): Sepmra_C_Pd_ReviewRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_C_Pd_Review`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_Review`.
     */
    static customField(fieldName: string): CustomFieldV2<Sepmra_C_Pd_Review>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace Sepmra_C_Pd_Review {
    /**
     * Static representation of the [[productReviewPostUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_REVIEW_POST_UUID: StringField<Sepmra_C_Pd_Review>;
    /**
     * Static representation of the [[product]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT: StringField<Sepmra_C_Pd_Review>;
    /**
     * Static representation of the [[reviewPostText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVIEW_POST_TEXT: StringField<Sepmra_C_Pd_Review>;
    /**
     * Static representation of the [[reviewRatingValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVIEW_RATING_VALUE: NumberField<Sepmra_C_Pd_Review>;
    /**
     * Static representation of the [[numberOfAffirmativeAnswers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_OF_AFFIRMATIVE_ANSWERS: NumberField<Sepmra_C_Pd_Review>;
    /**
     * Static representation of the [[reviewDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVIEW_DATE_TIME: DateField<Sepmra_C_Pd_Review>;
    /**
     * Static representation of the [[isHelpfulForCurrentUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_HELPFUL_FOR_CURRENT_USER: BooleanField<Sepmra_C_Pd_Review>;
    /**
     * Static representation of the [[isReviewOfCurrentUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_REVIEW_OF_CURRENT_USER: BooleanField<Sepmra_C_Pd_Review>;
    /**
     * Static representation of the [[userDisplayName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_DISPLAY_NAME: StringField<Sepmra_C_Pd_Review>;
    /**
     * All fields of the Sepmra_C_Pd_Review entity.
     */
    const _allFields: Array<StringField<Sepmra_C_Pd_Review> | NumberField<Sepmra_C_Pd_Review> | DateField<Sepmra_C_Pd_Review> | BooleanField<Sepmra_C_Pd_Review>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Sepmra_C_Pd_Review>;
    /**
     * All key fields of the Sepmra_C_Pd_Review entity.
     */
    const _keyFields: Array<Field<Sepmra_C_Pd_Review>>;
    /**
     * Mapping of all key field names to the respective static field property Sepmra_C_Pd_Review.
     */
    const _keys: {
        [keys: string]: Field<Sepmra_C_Pd_Review>;
    };
}
//# sourceMappingURL=Sepmra_C_Pd_Review.d.ts.map