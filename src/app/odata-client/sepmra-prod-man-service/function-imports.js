"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionImports = exports.sepmraCPdProductTextValidation = exports.sepmraCPdProductTextPreparation = exports.sepmraCPdProductValidation = exports.sepmraCPdProductPreparation = exports.sepmraCPdProductEdit = exports.sepmraCPdProductDelete = exports.sepmraCPdProductCopywithparams = exports.sepmraCPdProductCopy = exports.sepmraCPdProductActivation = exports.sepmraCPdProductImageValidation = exports.sepmraCPdProductImagePreparation = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Sepmra_C_Pd_ProductImage_1 = require("./Sepmra_C_Pd_ProductImage");
var SepmraC_Pd_ProductImageValidationFuncti_1 = require("./SepmraC_Pd_ProductImageValidationFuncti");
var Sepmra_C_Pd_Product_1 = require("./Sepmra_C_Pd_Product");
var SepmraC_Pd_ProductValidationFunction_1 = require("./SepmraC_Pd_ProductValidationFunction");
var Sepmra_C_Pd_ProductText_1 = require("./Sepmra_C_Pd_ProductText");
var SepmraC_Pd_ProductTextValidationFunctio_1 = require("./SepmraC_Pd_ProductTextValidationFunctio");
/**
 * Sepmra C Pd Product Image Preparation.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function sepmraCPdProductImagePreparation(parameters) {
    var params = {
        productImageDraftUuid: new core_1.FunctionImportParameter('ProductImageDraftUUID', 'Edm.Guid', parameters.productImageDraftUuid),
        activeProduct: new core_1.FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct),
        activeProductImage: new core_1.FunctionImportParameter('ActiveProductImage', 'Edm.String', parameters.activeProductImage)
    };
    return new core_1.FunctionImportRequestBuilderV2('post', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductImagePreparation', function (data) { return core_1.transformReturnValueForEntityV2(data, Sepmra_C_Pd_ProductImage_1.Sepmra_C_Pd_ProductImage); }, params);
}
exports.sepmraCPdProductImagePreparation = sepmraCPdProductImagePreparation;
/**
 * Sepmra C Pd Product Image Validation.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function sepmraCPdProductImageValidation(parameters) {
    var params = {
        productImageDraftUuid: new core_1.FunctionImportParameter('ProductImageDraftUUID', 'Edm.Guid', parameters.productImageDraftUuid),
        activeProduct: new core_1.FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct),
        activeProductImage: new core_1.FunctionImportParameter('ActiveProductImage', 'Edm.String', parameters.activeProductImage)
    };
    return new core_1.FunctionImportRequestBuilderV2('get', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductImageValidation', function (data) { return core_1.transformReturnValueForComplexTypeV2(data, function (data) { return core_1.deserializeComplexTypeV2(data, SepmraC_Pd_ProductImageValidationFuncti_1.SepmraC_Pd_ProductImageValidationFuncti); }); }, params);
}
exports.sepmraCPdProductImageValidation = sepmraCPdProductImageValidation;
/**
 * Sepmra C Pd Product Activation.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function sepmraCPdProductActivation(parameters) {
    var params = {
        productDraftUuid: new core_1.FunctionImportParameter('ProductDraftUUID', 'Edm.Guid', parameters.productDraftUuid),
        activeProduct: new core_1.FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct)
    };
    return new core_1.FunctionImportRequestBuilderV2('post', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductActivation', function (data) { return core_1.transformReturnValueForEntityV2(data, Sepmra_C_Pd_Product_1.Sepmra_C_Pd_Product); }, params);
}
exports.sepmraCPdProductActivation = sepmraCPdProductActivation;
/**
 * Sepmra C Pd Product Copy.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function sepmraCPdProductCopy(parameters) {
    var params = {
        productDraftUuid: new core_1.FunctionImportParameter('ProductDraftUUID', 'Edm.Guid', parameters.productDraftUuid),
        activeProduct: new core_1.FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct)
    };
    return new core_1.FunctionImportRequestBuilderV2('post', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductCopy', function (data) { return core_1.transformReturnValueForEntityV2(data, Sepmra_C_Pd_Product_1.Sepmra_C_Pd_Product); }, params);
}
exports.sepmraCPdProductCopy = sepmraCPdProductCopy;
/**
 * Sepmra C Pd Product Copywithparams.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function sepmraCPdProductCopywithparams(parameters) {
    var params = {
        productDraftUuid: new core_1.FunctionImportParameter('ProductDraftUUID', 'Edm.Guid', parameters.productDraftUuid),
        activeProduct: new core_1.FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct),
        supplier: new core_1.FunctionImportParameter('Supplier', 'Edm.String', parameters.supplier)
    };
    return new core_1.FunctionImportRequestBuilderV2('post', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductCopywithparams', function (data) { return core_1.transformReturnValueForEntityV2(data, Sepmra_C_Pd_Product_1.Sepmra_C_Pd_Product); }, params);
}
exports.sepmraCPdProductCopywithparams = sepmraCPdProductCopywithparams;
/**
 * Sepmra C Pd Product Delete.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function sepmraCPdProductDelete(parameters) {
    var params = {
        productDraftUuid: new core_1.FunctionImportParameter('ProductDraftUUID', 'Edm.Guid', parameters.productDraftUuid),
        activeProduct: new core_1.FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct)
    };
    return new core_1.FunctionImportRequestBuilderV2('post', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductDelete', function (data) { return core_1.transformReturnValueForEntityV2(data, Sepmra_C_Pd_Product_1.Sepmra_C_Pd_Product); }, params);
}
exports.sepmraCPdProductDelete = sepmraCPdProductDelete;
/**
 * Sepmra C Pd Product Edit.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function sepmraCPdProductEdit(parameters) {
    var params = {
        productDraftUuid: new core_1.FunctionImportParameter('ProductDraftUUID', 'Edm.Guid', parameters.productDraftUuid),
        activeProduct: new core_1.FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct)
    };
    return new core_1.FunctionImportRequestBuilderV2('post', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductEdit', function (data) { return core_1.transformReturnValueForEntityV2(data, Sepmra_C_Pd_Product_1.Sepmra_C_Pd_Product); }, params);
}
exports.sepmraCPdProductEdit = sepmraCPdProductEdit;
/**
 * Sepmra C Pd Product Preparation.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function sepmraCPdProductPreparation(parameters) {
    var params = {
        productDraftUuid: new core_1.FunctionImportParameter('ProductDraftUUID', 'Edm.Guid', parameters.productDraftUuid),
        activeProduct: new core_1.FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct)
    };
    return new core_1.FunctionImportRequestBuilderV2('post', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductPreparation', function (data) { return core_1.transformReturnValueForEntityV2(data, Sepmra_C_Pd_Product_1.Sepmra_C_Pd_Product); }, params);
}
exports.sepmraCPdProductPreparation = sepmraCPdProductPreparation;
/**
 * Sepmra C Pd Product Validation.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function sepmraCPdProductValidation(parameters) {
    var params = {
        productDraftUuid: new core_1.FunctionImportParameter('ProductDraftUUID', 'Edm.Guid', parameters.productDraftUuid),
        activeProduct: new core_1.FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct)
    };
    return new core_1.FunctionImportRequestBuilderV2('get', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductValidation', function (data) { return core_1.transformReturnValueForComplexTypeV2(data, function (data) { return core_1.deserializeComplexTypeV2(data, SepmraC_Pd_ProductValidationFunction_1.SepmraC_Pd_ProductValidationFunction); }); }, params);
}
exports.sepmraCPdProductValidation = sepmraCPdProductValidation;
/**
 * Sepmra C Pd Product Text Preparation.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function sepmraCPdProductTextPreparation(parameters) {
    var params = {
        productTextDraftUuid: new core_1.FunctionImportParameter('ProductTextDraftUUID', 'Edm.Guid', parameters.productTextDraftUuid),
        activeProduct: new core_1.FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct),
        activeLanguage: new core_1.FunctionImportParameter('ActiveLanguage', 'Edm.String', parameters.activeLanguage)
    };
    return new core_1.FunctionImportRequestBuilderV2('post', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductTextPreparation', function (data) { return core_1.transformReturnValueForEntityV2(data, Sepmra_C_Pd_ProductText_1.Sepmra_C_Pd_ProductText); }, params);
}
exports.sepmraCPdProductTextPreparation = sepmraCPdProductTextPreparation;
/**
 * Sepmra C Pd Product Text Validation.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function sepmraCPdProductTextValidation(parameters) {
    var params = {
        productTextDraftUuid: new core_1.FunctionImportParameter('ProductTextDraftUUID', 'Edm.Guid', parameters.productTextDraftUuid),
        activeProduct: new core_1.FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct),
        activeLanguage: new core_1.FunctionImportParameter('ActiveLanguage', 'Edm.String', parameters.activeLanguage)
    };
    return new core_1.FunctionImportRequestBuilderV2('get', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductTextValidation', function (data) { return core_1.transformReturnValueForComplexTypeV2(data, function (data) { return core_1.deserializeComplexTypeV2(data, SepmraC_Pd_ProductTextValidationFunctio_1.SepmraC_Pd_ProductTextValidationFunctio); }); }, params);
}
exports.sepmraCPdProductTextValidation = sepmraCPdProductTextValidation;
exports.functionImports = {
    sepmraCPdProductImagePreparation: sepmraCPdProductImagePreparation,
    sepmraCPdProductImageValidation: sepmraCPdProductImageValidation,
    sepmraCPdProductActivation: sepmraCPdProductActivation,
    sepmraCPdProductCopy: sepmraCPdProductCopy,
    sepmraCPdProductCopywithparams: sepmraCPdProductCopywithparams,
    sepmraCPdProductDelete: sepmraCPdProductDelete,
    sepmraCPdProductEdit: sepmraCPdProductEdit,
    sepmraCPdProductPreparation: sepmraCPdProductPreparation,
    sepmraCPdProductValidation: sepmraCPdProductValidation,
    sepmraCPdProductTextPreparation: sepmraCPdProductTextPreparation,
    sepmraCPdProductTextValidation: sepmraCPdProductTextValidation
};
//# sourceMappingURL=function-imports.js.map