"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sepmra_C_Pd_Product = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Sepmra_C_Pd_ProductRequestBuilder_1 = require("./Sepmra_C_Pd_ProductRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SEPMRA_C_PD_Product" of service "SEPMRA_PROD_MAN".
 */
var Sepmra_C_Pd_Product = /** @class */ (function (_super) {
    __extends(Sepmra_C_Pd_Product, _super);
    function Sepmra_C_Pd_Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Sepmra_C_Pd_Product`.
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_Product`.
     */
    Sepmra_C_Pd_Product.builder = function () {
        return core_1.EntityV2.entityBuilder(Sepmra_C_Pd_Product);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_C_Pd_Product` entity type.
     * @returns A `Sepmra_C_Pd_Product` request builder.
     */
    Sepmra_C_Pd_Product.requestBuilder = function () {
        return new Sepmra_C_Pd_ProductRequestBuilder_1.Sepmra_C_Pd_ProductRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_C_Pd_Product`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_Product`.
     */
    Sepmra_C_Pd_Product.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, Sepmra_C_Pd_Product);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Sepmra_C_Pd_Product.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Sepmra_C_Pd_Product.
     */
    Sepmra_C_Pd_Product._entityName = 'SEPMRA_C_PD_Product';
    /**
     * Default url path for the according service.
     */
    Sepmra_C_Pd_Product._defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
    return Sepmra_C_Pd_Product;
}(core_1.EntityV2));
exports.Sepmra_C_Pd_Product = Sepmra_C_Pd_Product;
var I_DraftAdministrativeData_1 = require("./I_DraftAdministrativeData");
var Sepmra_I_ProductReview_1 = require("./Sepmra_I_ProductReview");
var I_Currency_1 = require("./I_Currency");
var Sepmra_C_CurrencyValueHelp_1 = require("./Sepmra_C_CurrencyValueHelp");
var Sepmra_I_DimensionUnit_1 = require("./Sepmra_I_DimensionUnit");
var Sepmra_C_Pd_Employee_1 = require("./Sepmra_C_Pd_Employee");
var I_Language_1 = require("./I_Language");
var Sepmra_I_QuantityUnit_1 = require("./Sepmra_I_QuantityUnit");
var Sepmra_I_ProductCategory_1 = require("./Sepmra_I_ProductCategory");
var Sepmra_C_Pd_ProductImage_1 = require("./Sepmra_C_Pd_ProductImage");
var Sepmra_C_Pd_Review_1 = require("./Sepmra_C_Pd_Review");
var Sepmra_I_ProductSalesData_1 = require("./Sepmra_I_ProductSalesData");
var Sepmra_I_MaxProductStock_1 = require("./Sepmra_I_MaxProductStock");
var Sepmra_C_Pd_ProductText_1 = require("./Sepmra_C_Pd_ProductText");
var Sepm_I_ProductType_1 = require("./Sepm_I_ProductType");
var Sepm_I_ProductValueAddedTax_1 = require("./Sepm_I_ProductValueAddedTax");
var Sepmra_C_Pd_StockAvailability_1 = require("./Sepmra_C_Pd_StockAvailability");
var Sepmra_C_Pd_Supplier_1 = require("./Sepmra_C_Pd_Supplier");
var Sepmra_I_WeightUnit_1 = require("./Sepmra_I_WeightUnit");
(function (Sepmra_C_Pd_Product) {
    /**
     * Static representation of the [[activationAc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.ACTIVATION_AC = new core_1.BooleanField('Activation_ac', Sepmra_C_Pd_Product, 'Edm.Boolean');
    /**
     * Static representation of the [[preparationAc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.PREPARATION_AC = new core_1.BooleanField('Preparation_ac', Sepmra_C_Pd_Product, 'Edm.Boolean');
    /**
     * Static representation of the [[validationAc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.VALIDATION_AC = new core_1.BooleanField('Validation_ac', Sepmra_C_Pd_Product, 'Edm.Boolean');
    /**
     * Static representation of the [[productDraftUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.PRODUCT_DRAFT_UUID = new core_1.StringField('ProductDraftUUID', Sepmra_C_Pd_Product, 'Edm.Guid');
    /**
     * Static representation of the [[activeProduct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.ACTIVE_PRODUCT = new core_1.StringField('ActiveProduct', Sepmra_C_Pd_Product, 'Edm.String');
    /**
     * Static representation of the [[product]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.PRODUCT = new core_1.StringField('Product', Sepmra_C_Pd_Product, 'Edm.String');
    /**
     * Static representation of the [[productText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.PRODUCT_TEXT = new core_1.StringField('Product_Text', Sepmra_C_Pd_Product, 'Edm.String');
    /**
     * Static representation of the [[productType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.PRODUCT_TYPE = new core_1.StringField('ProductType', Sepmra_C_Pd_Product, 'Edm.String');
    /**
     * Static representation of the [[productCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.PRODUCT_CATEGORY = new core_1.StringField('ProductCategory', Sepmra_C_Pd_Product, 'Edm.String');
    /**
     * Static representation of the [[price]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.PRICE = new core_1.BigNumberField('Price', Sepmra_C_Pd_Product, 'Edm.Decimal');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.CURRENCY = new core_1.StringField('Currency', Sepmra_C_Pd_Product, 'Edm.String');
    /**
     * Static representation of the [[height]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.HEIGHT = new core_1.BigNumberField('Height', Sepmra_C_Pd_Product, 'Edm.Decimal');
    /**
     * Static representation of the [[width]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.WIDTH = new core_1.BigNumberField('Width', Sepmra_C_Pd_Product, 'Edm.Decimal');
    /**
     * Static representation of the [[depth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.DEPTH = new core_1.BigNumberField('Depth', Sepmra_C_Pd_Product, 'Edm.Decimal');
    /**
     * Static representation of the [[dimensionUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.DIMENSION_UNIT = new core_1.StringField('DimensionUnit', Sepmra_C_Pd_Product, 'Edm.String');
    /**
     * Static representation of the [[productPictureUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.PRODUCT_PICTURE_URL = new core_1.StringField('ProductPictureURL', Sepmra_C_Pd_Product, 'Edm.String');
    /**
     * Static representation of the [[productValueAddedTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.PRODUCT_VALUE_ADDED_TAX = new core_1.NumberField('ProductValueAddedTax', Sepmra_C_Pd_Product, 'Edm.Byte');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.SUPPLIER = new core_1.StringField('Supplier', Sepmra_C_Pd_Product, 'Edm.String');
    /**
     * Static representation of the [[productBaseUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.PRODUCT_BASE_UNIT = new core_1.StringField('ProductBaseUnit', Sepmra_C_Pd_Product, 'Edm.String');
    /**
     * Static representation of the [[weight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.WEIGHT = new core_1.BigNumberField('Weight', Sepmra_C_Pd_Product, 'Edm.Decimal');
    /**
     * Static representation of the [[weightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.WEIGHT_UNIT = new core_1.StringField('WeightUnit', Sepmra_C_Pd_Product, 'Edm.String');
    /**
     * Static representation of the [[originalLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.ORIGINAL_LANGUAGE = new core_1.StringField('OriginalLanguage', Sepmra_C_Pd_Product, 'Edm.String');
    /**
     * Static representation of the [[isActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.IS_ACTIVE_ENTITY = new core_1.BooleanField('IsActiveEntity', Sepmra_C_Pd_Product, 'Edm.Boolean');
    /**
     * Static representation of the [[hasActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.HAS_ACTIVE_ENTITY = new core_1.BooleanField('HasActiveEntity', Sepmra_C_Pd_Product, 'Edm.Boolean');
    /**
     * Static representation of the [[hasDraftEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.HAS_DRAFT_ENTITY = new core_1.BooleanField('HasDraftEntity', Sepmra_C_Pd_Product, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[draftAdministrativeData]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.DRAFT_ADMINISTRATIVE_DATA = new core_1.OneToOneLink('DraftAdministrativeData', Sepmra_C_Pd_Product, I_DraftAdministrativeData_1.I_DraftAdministrativeData);
    /**
     * Static representation of the one-to-one navigation property [[siblingEntity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.SIBLING_ENTITY = new core_1.OneToOneLink('SiblingEntity', Sepmra_C_Pd_Product, Sepmra_C_Pd_Product);
    /**
     * Static representation of the one-to-one navigation property [[toCollaborativeReview]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.TO_COLLABORATIVE_REVIEW = new core_1.OneToOneLink('to_CollaborativeReview', Sepmra_C_Pd_Product, Sepmra_I_ProductReview_1.Sepmra_I_ProductReview);
    /**
     * Static representation of the one-to-one navigation property [[toCurrency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.TO_CURRENCY = new core_1.OneToOneLink('to_Currency', Sepmra_C_Pd_Product, I_Currency_1.I_Currency);
    /**
     * Static representation of the one-to-one navigation property [[toCurrencyValueHelp]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.TO_CURRENCY_VALUE_HELP = new core_1.OneToOneLink('to_CurrencyValueHelp', Sepmra_C_Pd_Product, Sepmra_C_CurrencyValueHelp_1.Sepmra_C_CurrencyValueHelp);
    /**
     * Static representation of the one-to-one navigation property [[toDimensionUnit]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.TO_DIMENSION_UNIT = new core_1.OneToOneLink('to_DimensionUnit', Sepmra_C_Pd_Product, Sepmra_I_DimensionUnit_1.Sepmra_I_DimensionUnit);
    /**
     * Static representation of the one-to-many navigation property [[toEmployeeContact]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.TO_EMPLOYEE_CONTACT = new core_1.Link('to_EmployeeContact', Sepmra_C_Pd_Product, Sepmra_C_Pd_Employee_1.Sepmra_C_Pd_Employee);
    /**
     * Static representation of the one-to-one navigation property [[toOriginalLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.TO_ORIGINAL_LANGUAGE = new core_1.OneToOneLink('to_OriginalLanguage', Sepmra_C_Pd_Product, I_Language_1.I_Language);
    /**
     * Static representation of the one-to-one navigation property [[toProductBaseUnit]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.TO_PRODUCT_BASE_UNIT = new core_1.OneToOneLink('to_ProductBaseUnit', Sepmra_C_Pd_Product, Sepmra_I_QuantityUnit_1.Sepmra_I_QuantityUnit);
    /**
     * Static representation of the one-to-one navigation property [[toProductCategory]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.TO_PRODUCT_CATEGORY = new core_1.OneToOneLink('to_ProductCategory', Sepmra_C_Pd_Product, Sepmra_I_ProductCategory_1.Sepmra_I_ProductCategory);
    /**
     * Static representation of the one-to-many navigation property [[toProductImage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.TO_PRODUCT_IMAGE = new core_1.Link('to_ProductImage', Sepmra_C_Pd_Product, Sepmra_C_Pd_ProductImage_1.Sepmra_C_Pd_ProductImage);
    /**
     * Static representation of the one-to-many navigation property [[toProductReviewPosts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.TO_PRODUCT_REVIEW_POSTS = new core_1.Link('to_ProductReviewPosts', Sepmra_C_Pd_Product, Sepmra_C_Pd_Review_1.Sepmra_C_Pd_Review);
    /**
     * Static representation of the one-to-many navigation property [[toProductSalesData]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.TO_PRODUCT_SALES_DATA = new core_1.Link('to_ProductSalesData', Sepmra_C_Pd_Product, Sepmra_I_ProductSalesData_1.Sepmra_I_ProductSalesData);
    /**
     * Static representation of the one-to-one navigation property [[toProductStock]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.TO_PRODUCT_STOCK = new core_1.OneToOneLink('to_ProductStock', Sepmra_C_Pd_Product, Sepmra_I_MaxProductStock_1.Sepmra_I_MaxProductStock);
    /**
     * Static representation of the one-to-many navigation property [[toProductText]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.TO_PRODUCT_TEXT = new core_1.Link('to_ProductText', Sepmra_C_Pd_Product, Sepmra_C_Pd_ProductText_1.Sepmra_C_Pd_ProductText);
    /**
     * Static representation of the one-to-one navigation property [[toProductTextInCurrentLang]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.TO_PRODUCT_TEXT_IN_CURRENT_LANG = new core_1.OneToOneLink('to_ProductTextInCurrentLang', Sepmra_C_Pd_Product, Sepmra_C_Pd_ProductText_1.Sepmra_C_Pd_ProductText);
    /**
     * Static representation of the one-to-one navigation property [[toProductTextInOriginalLang]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.TO_PRODUCT_TEXT_IN_ORIGINAL_LANG = new core_1.OneToOneLink('to_ProductTextInOriginalLang', Sepmra_C_Pd_Product, Sepmra_C_Pd_ProductText_1.Sepmra_C_Pd_ProductText);
    /**
     * Static representation of the one-to-one navigation property [[toProductType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.TO_PRODUCT_TYPE = new core_1.OneToOneLink('to_ProductType', Sepmra_C_Pd_Product, Sepm_I_ProductType_1.Sepm_I_ProductType);
    /**
     * Static representation of the one-to-one navigation property [[toProductValueAddedTax]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.TO_PRODUCT_VALUE_ADDED_TAX = new core_1.OneToOneLink('to_ProductValueAddedTax', Sepmra_C_Pd_Product, Sepm_I_ProductValueAddedTax_1.Sepm_I_ProductValueAddedTax);
    /**
     * Static representation of the one-to-one navigation property [[toStockAvailability]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.TO_STOCK_AVAILABILITY = new core_1.OneToOneLink('to_StockAvailability', Sepmra_C_Pd_Product, Sepmra_C_Pd_StockAvailability_1.Sepmra_C_Pd_StockAvailability);
    /**
     * Static representation of the one-to-one navigation property [[toSupplier]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.TO_SUPPLIER = new core_1.OneToOneLink('to_Supplier', Sepmra_C_Pd_Product, Sepmra_C_Pd_Supplier_1.Sepmra_C_Pd_Supplier);
    /**
     * Static representation of the one-to-one navigation property [[toWeightUnit]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Product.TO_WEIGHT_UNIT = new core_1.OneToOneLink('to_WeightUnit', Sepmra_C_Pd_Product, Sepmra_I_WeightUnit_1.Sepmra_I_WeightUnit);
    /**
     * All fields of the Sepmra_C_Pd_Product entity.
     */
    Sepmra_C_Pd_Product._allFields = [
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
    Sepmra_C_Pd_Product.ALL_FIELDS = new core_1.AllFields('*', Sepmra_C_Pd_Product);
    /**
     * All key fields of the Sepmra_C_Pd_Product entity.
     */
    Sepmra_C_Pd_Product._keyFields = [Sepmra_C_Pd_Product.PRODUCT_DRAFT_UUID, Sepmra_C_Pd_Product.ACTIVE_PRODUCT];
    /**
     * Mapping of all key field names to the respective static field property Sepmra_C_Pd_Product.
     */
    Sepmra_C_Pd_Product._keys = Sepmra_C_Pd_Product._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Sepmra_C_Pd_Product = exports.Sepmra_C_Pd_Product || (exports.Sepmra_C_Pd_Product = {}));
exports.Sepmra_C_Pd_Product = Sepmra_C_Pd_Product;
//# sourceMappingURL=Sepmra_C_Pd_Product.js.map