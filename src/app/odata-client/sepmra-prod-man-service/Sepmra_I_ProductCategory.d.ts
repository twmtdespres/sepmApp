import { Sepmra_I_ProductCategoryRequestBuilder } from './Sepmra_I_ProductCategoryRequestBuilder';
import { AllFields, CustomFieldV2, EntityBuilderType, EntityV2, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SEPMRA_I_ProductCategory" of service "SEPMRA_PROD_MAN".
 */
export declare class Sepmra_I_ProductCategory extends EntityV2 implements Sepmra_I_ProductCategoryType {
    /**
     * Technical entity name for Sepmra_I_ProductCategory.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Category.
     * Maximum length: 40.
     */
    productCategory: string;
    /**
     * Main Category.
     * Maximum length: 40.
     * @nullable
     */
    mainProductCategory?: string;
    /**
     * One-to-one navigation property to the [[Sepmra_I_ProductMainCategory]] entity.
     */
    toMainCategory?: Sepmra_I_ProductMainCategory | null;
    /**
     * Returns an entity builder to construct instances of `Sepmra_I_ProductCategory`.
     * @returns A builder that constructs instances of entity type `Sepmra_I_ProductCategory`.
     */
    static builder(): EntityBuilderType<Sepmra_I_ProductCategory, Sepmra_I_ProductCategoryType>;
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_I_ProductCategory` entity type.
     * @returns A `Sepmra_I_ProductCategory` request builder.
     */
    static requestBuilder(): Sepmra_I_ProductCategoryRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_I_ProductCategory`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_I_ProductCategory`.
     */
    static customField(fieldName: string): CustomFieldV2<Sepmra_I_ProductCategory>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Sepmra_I_ProductMainCategory, Sepmra_I_ProductMainCategoryType } from './Sepmra_I_ProductMainCategory';
export interface Sepmra_I_ProductCategoryType {
    productCategory: string;
    mainProductCategory?: string | null;
    toMainCategory?: Sepmra_I_ProductMainCategoryType | null;
}
export declare namespace Sepmra_I_ProductCategory {
    /**
     * Static representation of the [[productCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_CATEGORY: StringField<Sepmra_I_ProductCategory>;
    /**
     * Static representation of the [[mainProductCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAIN_PRODUCT_CATEGORY: StringField<Sepmra_I_ProductCategory>;
    /**
     * Static representation of the one-to-one navigation property [[toMainCategory]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_MAIN_CATEGORY: OneToOneLink<Sepmra_I_ProductCategory, Sepmra_I_ProductMainCategory>;
    /**
     * All fields of the Sepmra_I_ProductCategory entity.
     */
    const _allFields: Array<StringField<Sepmra_I_ProductCategory> | OneToOneLink<Sepmra_I_ProductCategory, Sepmra_I_ProductMainCategory>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Sepmra_I_ProductCategory>;
    /**
     * All key fields of the Sepmra_I_ProductCategory entity.
     */
    const _keyFields: Array<Field<Sepmra_I_ProductCategory>>;
    /**
     * Mapping of all key field names to the respective static field property Sepmra_I_ProductCategory.
     */
    const _keys: {
        [keys: string]: Field<Sepmra_I_ProductCategory>;
    };
}
//# sourceMappingURL=Sepmra_I_ProductCategory.d.ts.map