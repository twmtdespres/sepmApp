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
exports.Sepmra_I_ProductSalesData = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Sepmra_I_ProductSalesDataRequestBuilder_1 = require("./Sepmra_I_ProductSalesDataRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SEPMRA_I_ProductSalesData" of service "SEPMRA_PROD_MAN".
 */
var Sepmra_I_ProductSalesData = /** @class */ (function (_super) {
    __extends(Sepmra_I_ProductSalesData, _super);
    function Sepmra_I_ProductSalesData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Sepmra_I_ProductSalesData`.
     * @returns A builder that constructs instances of entity type `Sepmra_I_ProductSalesData`.
     */
    Sepmra_I_ProductSalesData.builder = function () {
        return core_1.EntityV2.entityBuilder(Sepmra_I_ProductSalesData);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_I_ProductSalesData` entity type.
     * @returns A `Sepmra_I_ProductSalesData` request builder.
     */
    Sepmra_I_ProductSalesData.requestBuilder = function () {
        return new Sepmra_I_ProductSalesDataRequestBuilder_1.Sepmra_I_ProductSalesDataRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_I_ProductSalesData`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_I_ProductSalesData`.
     */
    Sepmra_I_ProductSalesData.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, Sepmra_I_ProductSalesData);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Sepmra_I_ProductSalesData.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Sepmra_I_ProductSalesData.
     */
    Sepmra_I_ProductSalesData._entityName = 'SEPMRA_I_ProductSalesData';
    /**
     * Default url path for the according service.
     */
    Sepmra_I_ProductSalesData._defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
    return Sepmra_I_ProductSalesData;
}(core_1.EntityV2));
exports.Sepmra_I_ProductSalesData = Sepmra_I_ProductSalesData;
(function (Sepmra_I_ProductSalesData) {
    /**
     * Static representation of the [[product]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ProductSalesData.PRODUCT = new core_1.StringField('Product', Sepmra_I_ProductSalesData, 'Edm.String');
    /**
     * Static representation of the [[productText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ProductSalesData.PRODUCT_TEXT = new core_1.StringField('Product_Text', Sepmra_I_ProductSalesData, 'Edm.String');
    /**
     * Static representation of the [[deliveryDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ProductSalesData.DELIVERY_DATE_TIME = new core_1.DateField('DeliveryDateTime', Sepmra_I_ProductSalesData, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[deliveryYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ProductSalesData.DELIVERY_YEAR = new core_1.StringField('DeliveryYear', Sepmra_I_ProductSalesData, 'Edm.String');
    /**
     * Static representation of the [[deliveryMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ProductSalesData.DELIVERY_MONTH = new core_1.StringField('DeliveryMonth', Sepmra_I_ProductSalesData, 'Edm.String');
    /**
     * Static representation of the [[deliveryMonthText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ProductSalesData.DELIVERY_MONTH_TEXT = new core_1.StringField('DeliveryMonth_Text', Sepmra_I_ProductSalesData, 'Edm.String');
    /**
     * Static representation of the [[revenue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ProductSalesData.REVENUE = new core_1.BigNumberField('Revenue', Sepmra_I_ProductSalesData, 'Edm.Decimal');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ProductSalesData.CURRENCY = new core_1.StringField('Currency', Sepmra_I_ProductSalesData, 'Edm.String');
    /**
     * Static representation of the [[quantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ProductSalesData.QUANTITY = new core_1.BigNumberField('Quantity', Sepmra_I_ProductSalesData, 'Edm.Decimal');
    /**
     * Static representation of the [[productBaseUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ProductSalesData.PRODUCT_BASE_UNIT = new core_1.StringField('ProductBaseUnit', Sepmra_I_ProductSalesData, 'Edm.String');
    /**
     * Static representation of the [[price]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ProductSalesData.PRICE = new core_1.BigNumberField('Price', Sepmra_I_ProductSalesData, 'Edm.Decimal');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ProductSalesData.SUPPLIER = new core_1.StringField('Supplier', Sepmra_I_ProductSalesData, 'Edm.String');
    /**
     * All fields of the Sepmra_I_ProductSalesData entity.
     */
    Sepmra_I_ProductSalesData._allFields = [
        Sepmra_I_ProductSalesData.PRODUCT,
        Sepmra_I_ProductSalesData.PRODUCT_TEXT,
        Sepmra_I_ProductSalesData.DELIVERY_DATE_TIME,
        Sepmra_I_ProductSalesData.DELIVERY_YEAR,
        Sepmra_I_ProductSalesData.DELIVERY_MONTH,
        Sepmra_I_ProductSalesData.DELIVERY_MONTH_TEXT,
        Sepmra_I_ProductSalesData.REVENUE,
        Sepmra_I_ProductSalesData.CURRENCY,
        Sepmra_I_ProductSalesData.QUANTITY,
        Sepmra_I_ProductSalesData.PRODUCT_BASE_UNIT,
        Sepmra_I_ProductSalesData.PRICE,
        Sepmra_I_ProductSalesData.SUPPLIER
    ];
    /**
     * All fields selector.
     */
    Sepmra_I_ProductSalesData.ALL_FIELDS = new core_1.AllFields('*', Sepmra_I_ProductSalesData);
    /**
     * All key fields of the Sepmra_I_ProductSalesData entity.
     */
    Sepmra_I_ProductSalesData._keyFields = [Sepmra_I_ProductSalesData.PRODUCT, Sepmra_I_ProductSalesData.DELIVERY_DATE_TIME];
    /**
     * Mapping of all key field names to the respective static field property Sepmra_I_ProductSalesData.
     */
    Sepmra_I_ProductSalesData._keys = Sepmra_I_ProductSalesData._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Sepmra_I_ProductSalesData = exports.Sepmra_I_ProductSalesData || (exports.Sepmra_I_ProductSalesData = {}));
exports.Sepmra_I_ProductSalesData = Sepmra_I_ProductSalesData;
//# sourceMappingURL=Sepmra_I_ProductSalesData.js.map