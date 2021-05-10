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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SepmraC_Pd_ProductValidationFunction = exports.SepmraC_Pd_ProductValidationFunctionField = exports.createSepmraC_Pd_ProductValidationFunction = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[SepmraC_Pd_ProductValidationFunction.build]] instead.
 */
function createSepmraC_Pd_ProductValidationFunction(json) {
    return SepmraC_Pd_ProductValidationFunction.build(json);
}
exports.createSepmraC_Pd_ProductValidationFunction = createSepmraC_Pd_ProductValidationFunction;
/**
 * SepmraC_Pd_ProductValidationFunctionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SepmraC_Pd_ProductValidationFunctionField = /** @class */ (function (_super) {
    __extends(SepmraC_Pd_ProductValidationFunctionField, _super);
    /**
     * Creates an instance of SepmraC_Pd_ProductValidationFunctionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function SepmraC_Pd_ProductValidationFunctionField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, SepmraC_Pd_ProductValidationFunction) || this;
        /**
         * Representation of the [[SepmraC_Pd_ProductValidationFunction.isValid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isValid = new core_1.ComplexTypeBooleanPropertyField('IsValid', _this, 'Edm.Boolean');
        return _this;
    }
    return SepmraC_Pd_ProductValidationFunctionField;
}(core_1.ComplexTypeField));
exports.SepmraC_Pd_ProductValidationFunctionField = SepmraC_Pd_ProductValidationFunctionField;
var SepmraC_Pd_ProductValidationFunction;
(function (SepmraC_Pd_ProductValidationFunction) {
    /**
     * Metadata information on all properties of the `SepmraC_Pd_ProductValidationFunction` complex type.
     */
    SepmraC_Pd_ProductValidationFunction._propertyMetadata = [{
            originalName: 'IsValid',
            name: 'isValid',
            type: 'Edm.Boolean',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV2(json, SepmraC_Pd_ProductValidationFunction);
    }
    SepmraC_Pd_ProductValidationFunction.build = build;
})(SepmraC_Pd_ProductValidationFunction = exports.SepmraC_Pd_ProductValidationFunction || (exports.SepmraC_Pd_ProductValidationFunction = {}));
//# sourceMappingURL=SepmraC_Pd_ProductValidationFunction.js.map