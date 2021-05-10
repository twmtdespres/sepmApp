import { Sepmra_C_Pd_ProductTextRequestBuilder } from './Sepmra_C_Pd_ProductTextRequestBuilder';
import { AllFields, BooleanField, CustomFieldV2, EntityBuilderType, EntityV2, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SEPMRA_C_PD_ProductText" of service "SEPMRA_PROD_MAN".
 */
export declare class Sepmra_C_Pd_ProductText extends EntityV2 implements Sepmra_C_Pd_ProductTextType {
    /**
     * Technical entity name for Sepmra_C_Pd_ProductText.
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
     * Text Draft UUID.
     */
    productTextDraftUuid: string;
    /**
     * Product ID.
     * Maximum length: 10.
     */
    activeProduct: string;
    /**
     * Language.
     * Maximum length: 2.
     */
    activeLanguage: string;
    /**
     * Product Draft UUID.
     * @nullable
     */
    productDraftUuid?: string;
    /**
     * Language.
     * Maximum length: 2.
     */
    language: string;
    /**
     * Name.
     * Maximum length: 255.
     */
    name: string;
    /**
     * Description.
     * Maximum length: 255.
     */
    description: string;
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
     * One-to-one navigation property to the [[Sepmra_C_Pd_ProductText]] entity.
     */
    siblingEntity?: Sepmra_C_Pd_ProductText | null;
    /**
     * One-to-one navigation property to the [[I_Language]] entity.
     */
    toLanguage?: I_Language | null;
    /**
     * One-to-one navigation property to the [[Sepmra_C_Pd_Product]] entity.
     */
    toProduct?: Sepmra_C_Pd_Product | null;
    /**
     * Returns an entity builder to construct instances of `Sepmra_C_Pd_ProductText`.
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_ProductText`.
     */
    static builder(): EntityBuilderType<Sepmra_C_Pd_ProductText, Sepmra_C_Pd_ProductTextType>;
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_C_Pd_ProductText` entity type.
     * @returns A `Sepmra_C_Pd_ProductText` request builder.
     */
    static requestBuilder(): Sepmra_C_Pd_ProductTextRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_C_Pd_ProductText`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_ProductText`.
     */
    static customField(fieldName: string): CustomFieldV2<Sepmra_C_Pd_ProductText>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { I_DraftAdministrativeData, I_DraftAdministrativeDataType } from './I_DraftAdministrativeData';
import { I_Language, I_LanguageType } from './I_Language';
import { Sepmra_C_Pd_Product, Sepmra_C_Pd_ProductType } from './Sepmra_C_Pd_Product';
export interface Sepmra_C_Pd_ProductTextType {
    preparationAc?: boolean | null;
    validationAc?: boolean | null;
    productTextDraftUuid: string;
    activeProduct: string;
    activeLanguage: string;
    productDraftUuid?: string | null;
    language: string;
    name: string;
    description: string;
    isActiveEntity?: boolean | null;
    hasActiveEntity?: boolean | null;
    hasDraftEntity?: boolean | null;
    draftAdministrativeData?: I_DraftAdministrativeDataType | null;
    siblingEntity?: Sepmra_C_Pd_ProductTextType | null;
    toLanguage?: I_LanguageType | null;
    toProduct?: Sepmra_C_Pd_ProductType | null;
}
export declare namespace Sepmra_C_Pd_ProductText {
    /**
     * Static representation of the [[preparationAc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PREPARATION_AC: BooleanField<Sepmra_C_Pd_ProductText>;
    /**
     * Static representation of the [[validationAc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDATION_AC: BooleanField<Sepmra_C_Pd_ProductText>;
    /**
     * Static representation of the [[productTextDraftUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_TEXT_DRAFT_UUID: StringField<Sepmra_C_Pd_ProductText>;
    /**
     * Static representation of the [[activeProduct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVE_PRODUCT: StringField<Sepmra_C_Pd_ProductText>;
    /**
     * Static representation of the [[activeLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVE_LANGUAGE: StringField<Sepmra_C_Pd_ProductText>;
    /**
     * Static representation of the [[productDraftUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_DRAFT_UUID: StringField<Sepmra_C_Pd_ProductText>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: StringField<Sepmra_C_Pd_ProductText>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<Sepmra_C_Pd_ProductText>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<Sepmra_C_Pd_ProductText>;
    /**
     * Static representation of the [[isActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ACTIVE_ENTITY: BooleanField<Sepmra_C_Pd_ProductText>;
    /**
     * Static representation of the [[hasActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAS_ACTIVE_ENTITY: BooleanField<Sepmra_C_Pd_ProductText>;
    /**
     * Static representation of the [[hasDraftEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAS_DRAFT_ENTITY: BooleanField<Sepmra_C_Pd_ProductText>;
    /**
     * Static representation of the one-to-one navigation property [[draftAdministrativeData]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFT_ADMINISTRATIVE_DATA: OneToOneLink<Sepmra_C_Pd_ProductText, I_DraftAdministrativeData>;
    /**
     * Static representation of the one-to-one navigation property [[siblingEntity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIBLING_ENTITY: OneToOneLink<Sepmra_C_Pd_ProductText, Sepmra_C_Pd_ProductText>;
    /**
     * Static representation of the one-to-one navigation property [[toLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_LANGUAGE: OneToOneLink<Sepmra_C_Pd_ProductText, I_Language>;
    /**
     * Static representation of the one-to-one navigation property [[toProduct]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_PRODUCT: OneToOneLink<Sepmra_C_Pd_ProductText, Sepmra_C_Pd_Product>;
    /**
     * All fields of the Sepmra_C_Pd_ProductText entity.
     */
    const _allFields: Array<BooleanField<Sepmra_C_Pd_ProductText> | StringField<Sepmra_C_Pd_ProductText> | OneToOneLink<Sepmra_C_Pd_ProductText, I_DraftAdministrativeData> | OneToOneLink<Sepmra_C_Pd_ProductText, Sepmra_C_Pd_ProductText> | OneToOneLink<Sepmra_C_Pd_ProductText, I_Language> | OneToOneLink<Sepmra_C_Pd_ProductText, Sepmra_C_Pd_Product>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Sepmra_C_Pd_ProductText>;
    /**
     * All key fields of the Sepmra_C_Pd_ProductText entity.
     */
    const _keyFields: Array<Field<Sepmra_C_Pd_ProductText>>;
    /**
     * Mapping of all key field names to the respective static field property Sepmra_C_Pd_ProductText.
     */
    const _keys: {
        [keys: string]: Field<Sepmra_C_Pd_ProductText>;
    };
}
//# sourceMappingURL=Sepmra_C_Pd_ProductText.d.ts.map