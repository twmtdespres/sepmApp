import { Sepmra_I_ProductReviewRequestBuilder } from './Sepmra_I_ProductReviewRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomFieldV2, EntityBuilderType, EntityV2, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SEPMRA_I_ProductReview" of service "SEPMRA_PROD_MAN".
 */
export declare class Sepmra_I_ProductReview extends EntityV2 implements Sepmra_I_ProductReviewType {
    /**
     * Technical entity name for Sepmra_I_ProductReview.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Id.
     */
    id: string;
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
    static builder(): EntityBuilderType<Sepmra_I_ProductReview, Sepmra_I_ProductReviewType>;
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_I_ProductReview` entity type.
     * @returns A `Sepmra_I_ProductReview` request builder.
     */
    static requestBuilder(): Sepmra_I_ProductReviewRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_I_ProductReview`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_I_ProductReview`.
     */
    static customField(fieldName: string): CustomFieldV2<Sepmra_I_ProductReview>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface Sepmra_I_ProductReviewType {
    id: string;
    product?: string | null;
    averageRatingValue?: BigNumber | null;
    numberOfReviewPosts?: number | null;
}
export declare namespace Sepmra_I_ProductReview {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: StringField<Sepmra_I_ProductReview>;
    /**
     * Static representation of the [[product]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT: StringField<Sepmra_I_ProductReview>;
    /**
     * Static representation of the [[averageRatingValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AVERAGE_RATING_VALUE: BigNumberField<Sepmra_I_ProductReview>;
    /**
     * Static representation of the [[numberOfReviewPosts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_OF_REVIEW_POSTS: NumberField<Sepmra_I_ProductReview>;
    /**
     * All fields of the Sepmra_I_ProductReview entity.
     */
    const _allFields: Array<StringField<Sepmra_I_ProductReview> | BigNumberField<Sepmra_I_ProductReview> | NumberField<Sepmra_I_ProductReview>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Sepmra_I_ProductReview>;
    /**
     * All key fields of the Sepmra_I_ProductReview entity.
     */
    const _keyFields: Array<Field<Sepmra_I_ProductReview>>;
    /**
     * Mapping of all key field names to the respective static field property Sepmra_I_ProductReview.
     */
    const _keys: {
        [keys: string]: Field<Sepmra_I_ProductReview>;
    };
}
//# sourceMappingURL=Sepmra_I_ProductReview.d.ts.map