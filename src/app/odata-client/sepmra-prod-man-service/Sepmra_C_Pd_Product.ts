/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Sepmra_C_Pd_ProductRequestBuilder } from './Sepmra_C_Pd_ProductRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomFieldV2, EntityBuilderType, EntityV2, Field, Link, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SEPMRA_C_PD_Product" of service "SEPMRA_PROD_MAN".
 */
export class Sepmra_C_Pd_Product extends EntityV2 implements Sepmra_C_Pd_ProductType {
  /**
   * Technical entity name for Sepmra_C_Pd_Product.
   */
  static _entityName = 'SEPMRA_C_PD_Product';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
  /**
   * Dyn. Action Control.
   * @nullable
   */
  activationAc?: boolean;
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
   * Product Draft UUID.
   */
  productDraftUuid!: string;
  /**
   * Product.
   * Maximum length: 10.
   */
  activeProduct!: string;
  /**
   * Product.
   * Maximum length: 10.
   */
  product!: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  productText?: string;
  /**
   * Type Code.
   * Maximum length: 2.
   */
  productType!: string;
  /**
   * Category.
   * Maximum length: 40.
   */
  productCategory!: string;
  /**
   * Price.
   * @nullable
   */
  price?: BigNumber;
  /**
   * Currency.
   * Maximum length: 5.
   */
  currency!: string;
  /**
   * Height.
   * @nullable
   */
  height?: BigNumber;
  /**
   * Width.
   * @nullable
   */
  width?: BigNumber;
  /**
   * Length.
   * @nullable
   */
  depth?: BigNumber;
  /**
   * Dimension Unit.
   * Maximum length: 3.
   */
  dimensionUnit!: string;
  /**
   * Image.
   * Maximum length: 255.
   * @nullable
   */
  productPictureUrl?: string;
  /**
   * Tax Tariff Code.
   */
  productValueAddedTax!: number;
  /**
   * Supplier.
   * Maximum length: 10.
   */
  supplier!: string;
  /**
   * Base Unit.
   * Maximum length: 3.
   */
  productBaseUnit!: string;
  /**
   * Weight.
   * @nullable
   */
  weight?: BigNumber;
  /**
   * Weight Unit.
   * Maximum length: 3.
   */
  weightUnit!: string;
  /**
   * Original Language.
   * Maximum length: 2.
   * @nullable
   */
  originalLanguage?: string;
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
   * One-to-one navigation property to the [[Sepmra_C_Pd_Product]] entity.
   */
  siblingEntity?: Sepmra_C_Pd_Product | null;
  /**
   * One-to-one navigation property to the [[Sepmra_I_ProductReview]] entity.
   */
  toCollaborativeReview?: Sepmra_I_ProductReview | null;
  /**
   * One-to-one navigation property to the [[I_Currency]] entity.
   */
  toCurrency?: I_Currency | null;
  /**
   * One-to-one navigation property to the [[Sepmra_C_CurrencyValueHelp]] entity.
   */
  toCurrencyValueHelp?: Sepmra_C_CurrencyValueHelp | null;
  /**
   * One-to-one navigation property to the [[Sepmra_I_DimensionUnit]] entity.
   */
  toDimensionUnit?: Sepmra_I_DimensionUnit | null;
  /**
   * One-to-many navigation property to the [[Sepmra_C_Pd_Employee]] entity.
   */
  toEmployeeContact!: Sepmra_C_Pd_Employee[];
  /**
   * One-to-one navigation property to the [[I_Language]] entity.
   */
  toOriginalLanguage?: I_Language | null;
  /**
   * One-to-one navigation property to the [[Sepmra_I_QuantityUnit]] entity.
   */
  toProductBaseUnit?: Sepmra_I_QuantityUnit | null;
  /**
   * One-to-one navigation property to the [[Sepmra_I_ProductCategory]] entity.
   */
  toProductCategory?: Sepmra_I_ProductCategory | null;
  /**
   * One-to-many navigation property to the [[Sepmra_C_Pd_ProductImage]] entity.
   */
  toProductImage!: Sepmra_C_Pd_ProductImage[];
  /**
   * One-to-many navigation property to the [[Sepmra_C_Pd_Review]] entity.
   */
  toProductReviewPosts!: Sepmra_C_Pd_Review[];
  /**
   * One-to-many navigation property to the [[Sepmra_I_ProductSalesData]] entity.
   */
  toProductSalesData!: Sepmra_I_ProductSalesData[];
  /**
   * One-to-one navigation property to the [[Sepmra_I_MaxProductStock]] entity.
   */
  toProductStock?: Sepmra_I_MaxProductStock | null;
  /**
   * One-to-many navigation property to the [[Sepmra_C_Pd_ProductText]] entity.
   */
  toProductText!: Sepmra_C_Pd_ProductText[];
  /**
   * One-to-one navigation property to the [[Sepmra_C_Pd_ProductText]] entity.
   */
  toProductTextInCurrentLang?: Sepmra_C_Pd_ProductText | null;
  /**
   * One-to-one navigation property to the [[Sepmra_C_Pd_ProductText]] entity.
   */
  toProductTextInOriginalLang?: Sepmra_C_Pd_ProductText | null;
  /**
   * One-to-one navigation property to the [[Sepm_I_ProductType]] entity.
   */
  toProductType?: Sepm_I_ProductType | null;
  /**
   * One-to-one navigation property to the [[Sepm_I_ProductValueAddedTax]] entity.
   */
  toProductValueAddedTax?: Sepm_I_ProductValueAddedTax | null;
  /**
   * One-to-one navigation property to the [[Sepmra_C_Pd_StockAvailability]] entity.
   */
  toStockAvailability?: Sepmra_C_Pd_StockAvailability | null;
  /**
   * One-to-one navigation property to the [[Sepmra_C_Pd_Supplier]] entity.
   */
  toSupplier?: Sepmra_C_Pd_Supplier | null;
  /**
   * One-to-one navigation property to the [[Sepmra_I_WeightUnit]] entity.
   */
  toWeightUnit?: Sepmra_I_WeightUnit | null;

  /**
   * Returns an entity builder to construct instances of `Sepmra_C_Pd_Product`.
   * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_Product`.
   */
  static builder(): EntityBuilderType<Sepmra_C_Pd_Product, Sepmra_C_Pd_ProductType> {
    return EntityV2.entityBuilder(Sepmra_C_Pd_Product);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Sepmra_C_Pd_Product` entity type.
   * @returns A `Sepmra_C_Pd_Product` request builder.
   */
  static requestBuilder(): Sepmra_C_Pd_ProductRequestBuilder {
    return new Sepmra_C_Pd_ProductRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_C_Pd_Product`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_Product`.
   */
  static customField(fieldName: string): CustomFieldV2<Sepmra_C_Pd_Product> {
    return EntityV2.customFieldSelector(fieldName, Sepmra_C_Pd_Product);
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
import { Sepmra_I_ProductReview, Sepmra_I_ProductReviewType } from './Sepmra_I_ProductReview';
import { I_Currency, I_CurrencyType } from './I_Currency';
import { Sepmra_C_CurrencyValueHelp, Sepmra_C_CurrencyValueHelpType } from './Sepmra_C_CurrencyValueHelp';
import { Sepmra_I_DimensionUnit, Sepmra_I_DimensionUnitType } from './Sepmra_I_DimensionUnit';
import { Sepmra_C_Pd_Employee, Sepmra_C_Pd_EmployeeType } from './Sepmra_C_Pd_Employee';
import { I_Language, I_LanguageType } from './I_Language';
import { Sepmra_I_QuantityUnit, Sepmra_I_QuantityUnitType } from './Sepmra_I_QuantityUnit';
import { Sepmra_I_ProductCategory, Sepmra_I_ProductCategoryType } from './Sepmra_I_ProductCategory';
import { Sepmra_C_Pd_ProductImage, Sepmra_C_Pd_ProductImageType } from './Sepmra_C_Pd_ProductImage';
import { Sepmra_C_Pd_Review, Sepmra_C_Pd_ReviewType } from './Sepmra_C_Pd_Review';
import { Sepmra_I_ProductSalesData, Sepmra_I_ProductSalesDataType } from './Sepmra_I_ProductSalesData';
import { Sepmra_I_MaxProductStock, Sepmra_I_MaxProductStockType } from './Sepmra_I_MaxProductStock';
import { Sepmra_C_Pd_ProductText, Sepmra_C_Pd_ProductTextType } from './Sepmra_C_Pd_ProductText';
import { Sepm_I_ProductType, Sepm_I_ProductTypeType } from './Sepm_I_ProductType';
import { Sepm_I_ProductValueAddedTax, Sepm_I_ProductValueAddedTaxType } from './Sepm_I_ProductValueAddedTax';
import { Sepmra_C_Pd_StockAvailability, Sepmra_C_Pd_StockAvailabilityType } from './Sepmra_C_Pd_StockAvailability';
import { Sepmra_C_Pd_Supplier, Sepmra_C_Pd_SupplierType } from './Sepmra_C_Pd_Supplier';
import { Sepmra_I_WeightUnit, Sepmra_I_WeightUnitType } from './Sepmra_I_WeightUnit';

export interface Sepmra_C_Pd_ProductType {
  activationAc?: boolean | null;
  preparationAc?: boolean | null;
  validationAc?: boolean | null;
  productDraftUuid: string;
  activeProduct: string;
  product: string;
  productText?: string | null;
  productType: string;
  productCategory: string;
  price?: BigNumber | null;
  currency: string;
  height?: BigNumber | null;
  width?: BigNumber | null;
  depth?: BigNumber | null;
  dimensionUnit: string;
  productPictureUrl?: string | null;
  productValueAddedTax: number;
  supplier: string;
  productBaseUnit: string;
  weight?: BigNumber | null;
  weightUnit: string;
  originalLanguage?: string | null;
  isActiveEntity?: boolean | null;
  hasActiveEntity?: boolean | null;
  hasDraftEntity?: boolean | null;
  draftAdministrativeData?: I_DraftAdministrativeDataType | null;
  siblingEntity?: Sepmra_C_Pd_ProductType | null;
  toCollaborativeReview?: Sepmra_I_ProductReviewType | null;
  toCurrency?: I_CurrencyType | null;
  toCurrencyValueHelp?: Sepmra_C_CurrencyValueHelpType | null;
  toDimensionUnit?: Sepmra_I_DimensionUnitType | null;
  toEmployeeContact: Sepmra_C_Pd_EmployeeType[];
  toOriginalLanguage?: I_LanguageType | null;
  toProductBaseUnit?: Sepmra_I_QuantityUnitType | null;
  toProductCategory?: Sepmra_I_ProductCategoryType | null;
  toProductImage: Sepmra_C_Pd_ProductImageType[];
  toProductReviewPosts: Sepmra_C_Pd_ReviewType[];
  toProductSalesData: Sepmra_I_ProductSalesDataType[];
  toProductStock?: Sepmra_I_MaxProductStockType | null;
  toProductText: Sepmra_C_Pd_ProductTextType[];
  toProductTextInCurrentLang?: Sepmra_C_Pd_ProductTextType | null;
  toProductTextInOriginalLang?: Sepmra_C_Pd_ProductTextType | null;
  toProductType?: Sepm_I_ProductTypeType | null;
  toProductValueAddedTax?: Sepm_I_ProductValueAddedTaxType | null;
  toStockAvailability?: Sepmra_C_Pd_StockAvailabilityType | null;
  toSupplier?: Sepmra_C_Pd_SupplierType | null;
  toWeightUnit?: Sepmra_I_WeightUnitType | null;
}

export namespace Sepmra_C_Pd_Product {
  /**
   * Static representation of the [[activationAc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVATION_AC: BooleanField<Sepmra_C_Pd_Product> = new BooleanField('Activation_ac', Sepmra_C_Pd_Product, 'Edm.Boolean');
  /**
   * Static representation of the [[preparationAc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PREPARATION_AC: BooleanField<Sepmra_C_Pd_Product> = new BooleanField('Preparation_ac', Sepmra_C_Pd_Product, 'Edm.Boolean');
  /**
   * Static representation of the [[validationAc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALIDATION_AC: BooleanField<Sepmra_C_Pd_Product> = new BooleanField('Validation_ac', Sepmra_C_Pd_Product, 'Edm.Boolean');
  /**
   * Static representation of the [[productDraftUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_DRAFT_UUID: StringField<Sepmra_C_Pd_Product> = new StringField('ProductDraftUUID', Sepmra_C_Pd_Product, 'Edm.Guid');
  /**
   * Static representation of the [[activeProduct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVE_PRODUCT: StringField<Sepmra_C_Pd_Product> = new StringField('ActiveProduct', Sepmra_C_Pd_Product, 'Edm.String');
  /**
   * Static representation of the [[product]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT: StringField<Sepmra_C_Pd_Product> = new StringField('Product', Sepmra_C_Pd_Product, 'Edm.String');
  /**
   * Static representation of the [[productText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_TEXT: StringField<Sepmra_C_Pd_Product> = new StringField('Product_Text', Sepmra_C_Pd_Product, 'Edm.String');
  /**
   * Static representation of the [[productType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_TYPE: StringField<Sepmra_C_Pd_Product> = new StringField('ProductType', Sepmra_C_Pd_Product, 'Edm.String');
  /**
   * Static representation of the [[productCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_CATEGORY: StringField<Sepmra_C_Pd_Product> = new StringField('ProductCategory', Sepmra_C_Pd_Product, 'Edm.String');
  /**
   * Static representation of the [[price]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE: BigNumberField<Sepmra_C_Pd_Product> = new BigNumberField('Price', Sepmra_C_Pd_Product, 'Edm.Decimal');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<Sepmra_C_Pd_Product> = new StringField('Currency', Sepmra_C_Pd_Product, 'Edm.String');
  /**
   * Static representation of the [[height]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEIGHT: BigNumberField<Sepmra_C_Pd_Product> = new BigNumberField('Height', Sepmra_C_Pd_Product, 'Edm.Decimal');
  /**
   * Static representation of the [[width]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIDTH: BigNumberField<Sepmra_C_Pd_Product> = new BigNumberField('Width', Sepmra_C_Pd_Product, 'Edm.Decimal');
  /**
   * Static representation of the [[depth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPTH: BigNumberField<Sepmra_C_Pd_Product> = new BigNumberField('Depth', Sepmra_C_Pd_Product, 'Edm.Decimal');
  /**
   * Static representation of the [[dimensionUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIMENSION_UNIT: StringField<Sepmra_C_Pd_Product> = new StringField('DimensionUnit', Sepmra_C_Pd_Product, 'Edm.String');
  /**
   * Static representation of the [[productPictureUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_PICTURE_URL: StringField<Sepmra_C_Pd_Product> = new StringField('ProductPictureURL', Sepmra_C_Pd_Product, 'Edm.String');
  /**
   * Static representation of the [[productValueAddedTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_VALUE_ADDED_TAX: NumberField<Sepmra_C_Pd_Product> = new NumberField('ProductValueAddedTax', Sepmra_C_Pd_Product, 'Edm.Byte');
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: StringField<Sepmra_C_Pd_Product> = new StringField('Supplier', Sepmra_C_Pd_Product, 'Edm.String');
  /**
   * Static representation of the [[productBaseUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_BASE_UNIT: StringField<Sepmra_C_Pd_Product> = new StringField('ProductBaseUnit', Sepmra_C_Pd_Product, 'Edm.String');
  /**
   * Static representation of the [[weight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT: BigNumberField<Sepmra_C_Pd_Product> = new BigNumberField('Weight', Sepmra_C_Pd_Product, 'Edm.Decimal');
  /**
   * Static representation of the [[weightUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_UNIT: StringField<Sepmra_C_Pd_Product> = new StringField('WeightUnit', Sepmra_C_Pd_Product, 'Edm.String');
  /**
   * Static representation of the [[originalLanguage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_LANGUAGE: StringField<Sepmra_C_Pd_Product> = new StringField('OriginalLanguage', Sepmra_C_Pd_Product, 'Edm.String');
  /**
   * Static representation of the [[isActiveEntity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ACTIVE_ENTITY: BooleanField<Sepmra_C_Pd_Product> = new BooleanField('IsActiveEntity', Sepmra_C_Pd_Product, 'Edm.Boolean');
  /**
   * Static representation of the [[hasActiveEntity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAS_ACTIVE_ENTITY: BooleanField<Sepmra_C_Pd_Product> = new BooleanField('HasActiveEntity', Sepmra_C_Pd_Product, 'Edm.Boolean');
  /**
   * Static representation of the [[hasDraftEntity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAS_DRAFT_ENTITY: BooleanField<Sepmra_C_Pd_Product> = new BooleanField('HasDraftEntity', Sepmra_C_Pd_Product, 'Edm.Boolean');
  /**
   * Static representation of the one-to-one navigation property [[draftAdministrativeData]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFT_ADMINISTRATIVE_DATA: OneToOneLink<Sepmra_C_Pd_Product, I_DraftAdministrativeData> = new OneToOneLink('DraftAdministrativeData', Sepmra_C_Pd_Product, I_DraftAdministrativeData);
  /**
   * Static representation of the one-to-one navigation property [[siblingEntity]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIBLING_ENTITY: OneToOneLink<Sepmra_C_Pd_Product, Sepmra_C_Pd_Product> = new OneToOneLink('SiblingEntity', Sepmra_C_Pd_Product, Sepmra_C_Pd_Product);
  /**
   * Static representation of the one-to-one navigation property [[toCollaborativeReview]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_COLLABORATIVE_REVIEW: OneToOneLink<Sepmra_C_Pd_Product, Sepmra_I_ProductReview> = new OneToOneLink('to_CollaborativeReview', Sepmra_C_Pd_Product, Sepmra_I_ProductReview);
  /**
   * Static representation of the one-to-one navigation property [[toCurrency]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_CURRENCY: OneToOneLink<Sepmra_C_Pd_Product, I_Currency> = new OneToOneLink('to_Currency', Sepmra_C_Pd_Product, I_Currency);
  /**
   * Static representation of the one-to-one navigation property [[toCurrencyValueHelp]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_CURRENCY_VALUE_HELP: OneToOneLink<Sepmra_C_Pd_Product, Sepmra_C_CurrencyValueHelp> = new OneToOneLink('to_CurrencyValueHelp', Sepmra_C_Pd_Product, Sepmra_C_CurrencyValueHelp);
  /**
   * Static representation of the one-to-one navigation property [[toDimensionUnit]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_DIMENSION_UNIT: OneToOneLink<Sepmra_C_Pd_Product, Sepmra_I_DimensionUnit> = new OneToOneLink('to_DimensionUnit', Sepmra_C_Pd_Product, Sepmra_I_DimensionUnit);
  /**
   * Static representation of the one-to-many navigation property [[toEmployeeContact]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_EMPLOYEE_CONTACT: Link<Sepmra_C_Pd_Product, Sepmra_C_Pd_Employee> = new Link('to_EmployeeContact', Sepmra_C_Pd_Product, Sepmra_C_Pd_Employee);
  /**
   * Static representation of the one-to-one navigation property [[toOriginalLanguage]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_ORIGINAL_LANGUAGE: OneToOneLink<Sepmra_C_Pd_Product, I_Language> = new OneToOneLink('to_OriginalLanguage', Sepmra_C_Pd_Product, I_Language);
  /**
   * Static representation of the one-to-one navigation property [[toProductBaseUnit]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PRODUCT_BASE_UNIT: OneToOneLink<Sepmra_C_Pd_Product, Sepmra_I_QuantityUnit> = new OneToOneLink('to_ProductBaseUnit', Sepmra_C_Pd_Product, Sepmra_I_QuantityUnit);
  /**
   * Static representation of the one-to-one navigation property [[toProductCategory]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PRODUCT_CATEGORY: OneToOneLink<Sepmra_C_Pd_Product, Sepmra_I_ProductCategory> = new OneToOneLink('to_ProductCategory', Sepmra_C_Pd_Product, Sepmra_I_ProductCategory);
  /**
   * Static representation of the one-to-many navigation property [[toProductImage]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PRODUCT_IMAGE: Link<Sepmra_C_Pd_Product, Sepmra_C_Pd_ProductImage> = new Link('to_ProductImage', Sepmra_C_Pd_Product, Sepmra_C_Pd_ProductImage);
  /**
   * Static representation of the one-to-many navigation property [[toProductReviewPosts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PRODUCT_REVIEW_POSTS: Link<Sepmra_C_Pd_Product, Sepmra_C_Pd_Review> = new Link('to_ProductReviewPosts', Sepmra_C_Pd_Product, Sepmra_C_Pd_Review);
  /**
   * Static representation of the one-to-many navigation property [[toProductSalesData]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PRODUCT_SALES_DATA: Link<Sepmra_C_Pd_Product, Sepmra_I_ProductSalesData> = new Link('to_ProductSalesData', Sepmra_C_Pd_Product, Sepmra_I_ProductSalesData);
  /**
   * Static representation of the one-to-one navigation property [[toProductStock]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PRODUCT_STOCK: OneToOneLink<Sepmra_C_Pd_Product, Sepmra_I_MaxProductStock> = new OneToOneLink('to_ProductStock', Sepmra_C_Pd_Product, Sepmra_I_MaxProductStock);
  /**
   * Static representation of the one-to-many navigation property [[toProductText]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PRODUCT_TEXT: Link<Sepmra_C_Pd_Product, Sepmra_C_Pd_ProductText> = new Link('to_ProductText', Sepmra_C_Pd_Product, Sepmra_C_Pd_ProductText);
  /**
   * Static representation of the one-to-one navigation property [[toProductTextInCurrentLang]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PRODUCT_TEXT_IN_CURRENT_LANG: OneToOneLink<Sepmra_C_Pd_Product, Sepmra_C_Pd_ProductText> = new OneToOneLink('to_ProductTextInCurrentLang', Sepmra_C_Pd_Product, Sepmra_C_Pd_ProductText);
  /**
   * Static representation of the one-to-one navigation property [[toProductTextInOriginalLang]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PRODUCT_TEXT_IN_ORIGINAL_LANG: OneToOneLink<Sepmra_C_Pd_Product, Sepmra_C_Pd_ProductText> = new OneToOneLink('to_ProductTextInOriginalLang', Sepmra_C_Pd_Product, Sepmra_C_Pd_ProductText);
  /**
   * Static representation of the one-to-one navigation property [[toProductType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PRODUCT_TYPE: OneToOneLink<Sepmra_C_Pd_Product, Sepm_I_ProductType> = new OneToOneLink('to_ProductType', Sepmra_C_Pd_Product, Sepm_I_ProductType);
  /**
   * Static representation of the one-to-one navigation property [[toProductValueAddedTax]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PRODUCT_VALUE_ADDED_TAX: OneToOneLink<Sepmra_C_Pd_Product, Sepm_I_ProductValueAddedTax> = new OneToOneLink('to_ProductValueAddedTax', Sepmra_C_Pd_Product, Sepm_I_ProductValueAddedTax);
  /**
   * Static representation of the one-to-one navigation property [[toStockAvailability]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_STOCK_AVAILABILITY: OneToOneLink<Sepmra_C_Pd_Product, Sepmra_C_Pd_StockAvailability> = new OneToOneLink('to_StockAvailability', Sepmra_C_Pd_Product, Sepmra_C_Pd_StockAvailability);
  /**
   * Static representation of the one-to-one navigation property [[toSupplier]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SUPPLIER: OneToOneLink<Sepmra_C_Pd_Product, Sepmra_C_Pd_Supplier> = new OneToOneLink('to_Supplier', Sepmra_C_Pd_Product, Sepmra_C_Pd_Supplier);
  /**
   * Static representation of the one-to-one navigation property [[toWeightUnit]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_WEIGHT_UNIT: OneToOneLink<Sepmra_C_Pd_Product, Sepmra_I_WeightUnit> = new OneToOneLink('to_WeightUnit', Sepmra_C_Pd_Product, Sepmra_I_WeightUnit);
  /**
   * All fields of the Sepmra_C_Pd_Product entity.
   */
  export const _allFields: Array<BooleanField<Sepmra_C_Pd_Product> | StringField<Sepmra_C_Pd_Product> | BigNumberField<Sepmra_C_Pd_Product> | NumberField<Sepmra_C_Pd_Product> | OneToOneLink<Sepmra_C_Pd_Product, I_DraftAdministrativeData> | OneToOneLink<Sepmra_C_Pd_Product, Sepmra_C_Pd_Product> | OneToOneLink<Sepmra_C_Pd_Product, Sepmra_I_ProductReview> | OneToOneLink<Sepmra_C_Pd_Product, I_Currency> | OneToOneLink<Sepmra_C_Pd_Product, Sepmra_C_CurrencyValueHelp> | OneToOneLink<Sepmra_C_Pd_Product, Sepmra_I_DimensionUnit> | Link<Sepmra_C_Pd_Product, Sepmra_C_Pd_Employee> | OneToOneLink<Sepmra_C_Pd_Product, I_Language> | OneToOneLink<Sepmra_C_Pd_Product, Sepmra_I_QuantityUnit> | OneToOneLink<Sepmra_C_Pd_Product, Sepmra_I_ProductCategory> | Link<Sepmra_C_Pd_Product, Sepmra_C_Pd_ProductImage> | Link<Sepmra_C_Pd_Product, Sepmra_C_Pd_Review> | Link<Sepmra_C_Pd_Product, Sepmra_I_ProductSalesData> | OneToOneLink<Sepmra_C_Pd_Product, Sepmra_I_MaxProductStock> | Link<Sepmra_C_Pd_Product, Sepmra_C_Pd_ProductText> | OneToOneLink<Sepmra_C_Pd_Product, Sepmra_C_Pd_ProductText> | OneToOneLink<Sepmra_C_Pd_Product, Sepm_I_ProductType> | OneToOneLink<Sepmra_C_Pd_Product, Sepm_I_ProductValueAddedTax> | OneToOneLink<Sepmra_C_Pd_Product, Sepmra_C_Pd_StockAvailability> | OneToOneLink<Sepmra_C_Pd_Product, Sepmra_C_Pd_Supplier> | OneToOneLink<Sepmra_C_Pd_Product, Sepmra_I_WeightUnit>> = [
    Sepmra_C_Pd_Product.ACTIVATION_AC,
    Sepmra_C_Pd_Product.PREPARATION_AC,
    Sepmra_C_Pd_Product.VALIDATION_AC,
    Sepmra_C_Pd_Product.PRODUCT_DRAFT_UUID,
    Sepmra_C_Pd_Product.ACTIVE_PRODUCT,
    Sepmra_C_Pd_Product.PRODUCT,
    Sepmra_C_Pd_Product.PRODUCT_TEXT,
    Sepmra_C_Pd_Product.PRODUCT_TYPE,
    Sepmra_C_Pd_Product.PRODUCT_CATEGORY,
    Sepmra_C_Pd_Product.PRICE,
    Sepmra_C_Pd_Product.CURRENCY,
    Sepmra_C_Pd_Product.HEIGHT,
    Sepmra_C_Pd_Product.WIDTH,
    Sepmra_C_Pd_Product.DEPTH,
    Sepmra_C_Pd_Product.DIMENSION_UNIT,
    Sepmra_C_Pd_Product.PRODUCT_PICTURE_URL,
    Sepmra_C_Pd_Product.PRODUCT_VALUE_ADDED_TAX,
    Sepmra_C_Pd_Product.SUPPLIER,
    Sepmra_C_Pd_Product.PRODUCT_BASE_UNIT,
    Sepmra_C_Pd_Product.WEIGHT,
    Sepmra_C_Pd_Product.WEIGHT_UNIT,
    Sepmra_C_Pd_Product.ORIGINAL_LANGUAGE,
    Sepmra_C_Pd_Product.IS_ACTIVE_ENTITY,
    Sepmra_C_Pd_Product.HAS_ACTIVE_ENTITY,
    Sepmra_C_Pd_Product.HAS_DRAFT_ENTITY,
    Sepmra_C_Pd_Product.DRAFT_ADMINISTRATIVE_DATA,
    Sepmra_C_Pd_Product.SIBLING_ENTITY,
    Sepmra_C_Pd_Product.TO_COLLABORATIVE_REVIEW,
    Sepmra_C_Pd_Product.TO_CURRENCY,
    Sepmra_C_Pd_Product.TO_CURRENCY_VALUE_HELP,
    Sepmra_C_Pd_Product.TO_DIMENSION_UNIT,
    Sepmra_C_Pd_Product.TO_EMPLOYEE_CONTACT,
    Sepmra_C_Pd_Product.TO_ORIGINAL_LANGUAGE,
    Sepmra_C_Pd_Product.TO_PRODUCT_BASE_UNIT,
    Sepmra_C_Pd_Product.TO_PRODUCT_CATEGORY,
    Sepmra_C_Pd_Product.TO_PRODUCT_IMAGE,
    Sepmra_C_Pd_Product.TO_PRODUCT_REVIEW_POSTS,
    Sepmra_C_Pd_Product.TO_PRODUCT_SALES_DATA,
    Sepmra_C_Pd_Product.TO_PRODUCT_STOCK,
    Sepmra_C_Pd_Product.TO_PRODUCT_TEXT,
    Sepmra_C_Pd_Product.TO_PRODUCT_TEXT_IN_CURRENT_LANG,
    Sepmra_C_Pd_Product.TO_PRODUCT_TEXT_IN_ORIGINAL_LANG,
    Sepmra_C_Pd_Product.TO_PRODUCT_TYPE,
    Sepmra_C_Pd_Product.TO_PRODUCT_VALUE_ADDED_TAX,
    Sepmra_C_Pd_Product.TO_STOCK_AVAILABILITY,
    Sepmra_C_Pd_Product.TO_SUPPLIER,
    Sepmra_C_Pd_Product.TO_WEIGHT_UNIT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Sepmra_C_Pd_Product> = new AllFields('*', Sepmra_C_Pd_Product);
  /**
   * All key fields of the Sepmra_C_Pd_Product entity.
   */
  export const _keyFields: Array<Field<Sepmra_C_Pd_Product>> = [Sepmra_C_Pd_Product.PRODUCT_DRAFT_UUID, Sepmra_C_Pd_Product.ACTIVE_PRODUCT];
  /**
   * Mapping of all key field names to the respective static field property Sepmra_C_Pd_Product.
   */
  export const _keys: { [keys: string]: Field<Sepmra_C_Pd_Product> } = Sepmra_C_Pd_Product._keyFields.reduce((acc: { [keys: string]: Field<Sepmra_C_Pd_Product> }, field: Field<Sepmra_C_Pd_Product>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
