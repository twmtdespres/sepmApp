import { Sepmra_C_Pd_ProductImageRequestBuilder } from './Sepmra_C_Pd_ProductImageRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomFieldV2, DateField, EntityBuilderType, EntityV2, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SEPMRA_C_PD_ProductImage" of service "SEPMRA_PROD_MAN".
 */
export declare class Sepmra_C_Pd_ProductImage extends EntityV2 implements Sepmra_C_Pd_ProductImageType {
    /**
     * Technical entity name for Sepmra_C_Pd_ProductImage.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    productImageDraftUuid: string;
    /**
     * Product ID.
     * Maximum length: 10.
     */
    activeProduct: string;
    /**
     * Product Image.
     * Maximum length: 70.
     */
    activeProductImage: string;
    /**
     * File Name.
     * Maximum length: 255.
     */
    fileName: string;
    /**
     * MIME Type.
     * Maximum length: 100.
     */
    mimeType: string;
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
    static builder(): EntityBuilderType<Sepmra_C_Pd_ProductImage, Sepmra_C_Pd_ProductImageType>;
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_C_Pd_ProductImage` entity type.
     * @returns A `Sepmra_C_Pd_ProductImage` request builder.
     */
    static requestBuilder(): Sepmra_C_Pd_ProductImageRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_C_Pd_ProductImage`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_ProductImage`.
     */
    static customField(fieldName: string): CustomFieldV2<Sepmra_C_Pd_ProductImage>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace Sepmra_C_Pd_ProductImage {
    /**
     * Static representation of the [[preparationAc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PREPARATION_AC: BooleanField<Sepmra_C_Pd_ProductImage>;
    /**
     * Static representation of the [[validationAc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDATION_AC: BooleanField<Sepmra_C_Pd_ProductImage>;
    /**
     * Static representation of the [[productImageDraftUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_IMAGE_DRAFT_UUID: StringField<Sepmra_C_Pd_ProductImage>;
    /**
     * Static representation of the [[activeProduct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVE_PRODUCT: StringField<Sepmra_C_Pd_ProductImage>;
    /**
     * Static representation of the [[activeProductImage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVE_PRODUCT_IMAGE: StringField<Sepmra_C_Pd_ProductImage>;
    /**
     * Static representation of the [[fileName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILE_NAME: StringField<Sepmra_C_Pd_ProductImage>;
    /**
     * Static representation of the [[mimeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIME_TYPE: StringField<Sepmra_C_Pd_ProductImage>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<Sepmra_C_Pd_ProductImage>;
    /**
     * Static representation of the [[creationDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE_TIME: DateField<Sepmra_C_Pd_ProductImage>;
    /**
     * Static representation of the [[lastChangedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_CHANGED_DATE_TIME: DateField<Sepmra_C_Pd_ProductImage>;
    /**
     * Static representation of the [[isActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ACTIVE_ENTITY: BooleanField<Sepmra_C_Pd_ProductImage>;
    /**
     * Static representation of the [[hasActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAS_ACTIVE_ENTITY: BooleanField<Sepmra_C_Pd_ProductImage>;
    /**
     * Static representation of the [[hasDraftEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAS_DRAFT_ENTITY: BooleanField<Sepmra_C_Pd_ProductImage>;
    /**
     * Static representation of the one-to-one navigation property [[draftAdministrativeData]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFT_ADMINISTRATIVE_DATA: OneToOneLink<Sepmra_C_Pd_ProductImage, I_DraftAdministrativeData>;
    /**
     * Static representation of the one-to-one navigation property [[siblingEntity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIBLING_ENTITY: OneToOneLink<Sepmra_C_Pd_ProductImage, Sepmra_C_Pd_ProductImage>;
    /**
     * All fields of the Sepmra_C_Pd_ProductImage entity.
     */
    const _allFields: Array<BooleanField<Sepmra_C_Pd_ProductImage> | StringField<Sepmra_C_Pd_ProductImage> | DateField<Sepmra_C_Pd_ProductImage> | OneToOneLink<Sepmra_C_Pd_ProductImage, I_DraftAdministrativeData> | OneToOneLink<Sepmra_C_Pd_ProductImage, Sepmra_C_Pd_ProductImage>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Sepmra_C_Pd_ProductImage>;
    /**
     * All key fields of the Sepmra_C_Pd_ProductImage entity.
     */
    const _keyFields: Array<Field<Sepmra_C_Pd_ProductImage>>;
    /**
     * Mapping of all key field names to the respective static field property Sepmra_C_Pd_ProductImage.
     */
    const _keys: {
        [keys: string]: Field<Sepmra_C_Pd_ProductImage>;
    };
}
//# sourceMappingURL=Sepmra_C_Pd_ProductImage.d.ts.map