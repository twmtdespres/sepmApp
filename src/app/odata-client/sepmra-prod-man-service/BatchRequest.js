"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSepmraProdManServicePath = exports.changeset = exports.batch = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var util_1 = require("@sap-cloud-sdk/util");
var index_1 = require("./index");
function batch(first) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return new core_1.ODataBatchRequestBuilderV2(exports.defaultSepmraProdManServicePath, util_1.variadicArgumentToArray(first, rest), map);
}
exports.batch = batch;
function changeset(first) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return new core_1.ODataBatchChangeSetV2(util_1.variadicArgumentToArray(first, rest));
}
exports.changeset = changeset;
exports.defaultSepmraProdManServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
var map = { 'I_Currency': index_1.I_Currency, 'I_DraftAdministrativeData': index_1.I_DraftAdministrativeData, 'SEPMRA_C_PD_ProductImage': index_1.Sepmra_C_Pd_ProductImage, 'SEPMRA_C_PD_Product': index_1.Sepmra_C_Pd_Product, 'SEPMRA_C_PD_ProductText': index_1.Sepmra_C_Pd_ProductText, 'SEPMRA_C_PD_Review': index_1.Sepmra_C_Pd_Review, 'SEPMRA_C_PD_StockAvailability': index_1.Sepmra_C_Pd_StockAvailability, 'I_Language': index_1.I_Language, 'SEPMRA_C_PD_Supplier': index_1.Sepmra_C_Pd_Supplier, 'SEPMRA_I_Address': index_1.Sepmra_I_Address, 'SEPMRA_I_ContactPerson': index_1.Sepmra_I_ContactPerson, 'SEPMRA_I_DimensionUnit': index_1.Sepmra_I_DimensionUnit, 'SEPMRA_I_MaxProductStock': index_1.Sepmra_I_MaxProductStock, 'SEPMRA_I_ProductCategory': index_1.Sepmra_I_ProductCategory, 'SEPMRA_I_ProductMainCategory': index_1.Sepmra_I_ProductMainCategory, 'SEPMRA_C_CurrencyValueHelp': index_1.Sepmra_C_CurrencyValueHelp, 'SEPMRA_I_ProductReview': index_1.Sepmra_I_ProductReview, 'SEPMRA_I_ProductSalesData': index_1.Sepmra_I_ProductSalesData, 'SEPMRA_I_QuantityUnit': index_1.Sepmra_I_QuantityUnit, 'SEPMRA_I_WeightUnit': index_1.Sepmra_I_WeightUnit, 'SEPM_I_ProductType': index_1.Sepm_I_ProductType, 'SEPM_I_ProductValueAddedTax': index_1.Sepm_I_ProductValueAddedTax, 'SEPMRA_C_PD_Employee': index_1.Sepmra_C_Pd_Employee };
//# sourceMappingURL=BatchRequest.js.map