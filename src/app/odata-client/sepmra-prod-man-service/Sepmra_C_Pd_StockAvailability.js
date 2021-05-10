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
exports.Sepmra_C_Pd_StockAvailability = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Sepmra_C_Pd_StockAvailabilityRequestBuilder_1 = require("./Sepmra_C_Pd_StockAvailabilityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SEPMRA_C_PD_StockAvailability" of service "SEPMRA_PROD_MAN".
 */
var Sepmra_C_Pd_StockAvailability = /** @class */ (function (_super) {
    __extends(Sepmra_C_Pd_StockAvailability, _super);
    function Sepmra_C_Pd_StockAvailability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Sepmra_C_Pd_StockAvailability`.
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_StockAvailability`.
     */
    Sepmra_C_Pd_StockAvailability.builder = function () {
        return core_1.EntityV2.entityBuilder(Sepmra_C_Pd_StockAvailability);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_C_Pd_StockAvailability` entity type.
     * @returns A `Sepmra_C_Pd_StockAvailability` request builder.
     */
    Sepmra_C_Pd_StockAvailability.requestBuilder = function () {
        return new Sepmra_C_Pd_StockAvailabilityRequestBuilder_1.Sepmra_C_Pd_StockAvailabilityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_C_Pd_StockAvailability`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_StockAvailability`.
     */
    Sepmra_C_Pd_StockAvailability.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, Sepmra_C_Pd_StockAvailability);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Sepmra_C_Pd_StockAvailability.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Sepmra_C_Pd_StockAvailability.
     */
    Sepmra_C_Pd_StockAvailability._entityName = 'SEPMRA_C_PD_StockAvailability';
    /**
     * Default url path for the according service.
     */
    Sepmra_C_Pd_StockAvailability._defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
    return Sepmra_C_Pd_StockAvailability;
}(core_1.EntityV2));
exports.Sepmra_C_Pd_StockAvailability = Sepmra_C_Pd_StockAvailability;
var Sepmra_I_QuantityUnit_1 = require("./Sepmra_I_QuantityUnit");
(function (Sepmra_C_Pd_StockAvailability) {
    /**
     * Static representation of the [[product]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_StockAvailability.PRODUCT = new core_1.StringField('Product', Sepmra_C_Pd_StockAvailability, 'Edm.String');
    /**
     * Static representation of the [[quantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_StockAvailability.QUANTITY = new core_1.BigNumberField('Quantity', Sepmra_C_Pd_StockAvailability, 'Edm.Decimal');
    /**
     * Static representation of the [[quantityUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_StockAvailability.QUANTITY_UNIT = new core_1.StringField('QuantityUnit', Sepmra_C_Pd_StockAvailability, 'Edm.String');
    /**
     * Static representation of the [[stockAvailability]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_StockAvailability.STOCK_AVAILABILITY = new core_1.StringField('StockAvailability', Sepmra_C_Pd_StockAvailability, 'Edm.String');
    /**
     * Static representation of the [[stockAvailabilityText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_StockAvailability.STOCK_AVAILABILITY_TEXT = new core_1.StringField('StockAvailability_Text', Sepmra_C_Pd_StockAvailability, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[toQuantityUnit]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_StockAvailability.TO_QUANTITY_UNIT = new core_1.OneToOneLink('to_QuantityUnit', Sepmra_C_Pd_StockAvailability, Sepmra_I_QuantityUnit_1.Sepmra_I_QuantityUnit);
    /**
     * All fields of the Sepmra_C_Pd_StockAvailability entity.
     */
    Sepmra_C_Pd_StockAvailability._allFields = [
        Sepmra_C_Pd_StockAvailability.PRODUCT,
        Sepmra_C_Pd_StockAvailability.QUANTITY,
        Sepmra_C_Pd_StockAvailability.QUANTITY_UNIT,
        Sepmra_C_Pd_StockAvailability.STOCK_AVAILABILITY,
        Sepmra_C_Pd_StockAvailability.STOCK_AVAILABILITY_TEXT,
        Sepmra_C_Pd_StockAvailability.TO_QUANTITY_UNIT
    ];
    /**
     * All fields selector.
     */
    Sepmra_C_Pd_StockAvailability.ALL_FIELDS = new core_1.AllFields('*', Sepmra_C_Pd_StockAvailability);
    /**
     * All key fields of the Sepmra_C_Pd_StockAvailability entity.
     */
    Sepmra_C_Pd_StockAvailability._keyFields = [Sepmra_C_Pd_StockAvailability.PRODUCT];
    /**
     * Mapping of all key field names to the respective static field property Sepmra_C_Pd_StockAvailability.
     */
    Sepmra_C_Pd_StockAvailability._keys = Sepmra_C_Pd_StockAvailability._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Sepmra_C_Pd_StockAvailability = exports.Sepmra_C_Pd_StockAvailability || (exports.Sepmra_C_Pd_StockAvailability = {}));
exports.Sepmra_C_Pd_StockAvailability = Sepmra_C_Pd_StockAvailability;
//# sourceMappingURL=Sepmra_C_Pd_StockAvailability.js.map