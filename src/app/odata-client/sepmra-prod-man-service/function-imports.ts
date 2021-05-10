/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { transformReturnValueForEntityV2, transformReturnValueForComplexTypeV2, deserializeComplexTypeV2, FunctionImportRequestBuilderV2, FunctionImportParameter } from '@sap-cloud-sdk/core';
import { Sepmra_C_Pd_ProductImage } from './Sepmra_C_Pd_ProductImage';
import { SepmraC_Pd_ProductImageValidationFuncti } from './SepmraC_Pd_ProductImageValidationFuncti';
import { Sepmra_C_Pd_Product } from './Sepmra_C_Pd_Product';
import { SepmraC_Pd_ProductValidationFunction } from './SepmraC_Pd_ProductValidationFunction';
import { Sepmra_C_Pd_ProductText } from './Sepmra_C_Pd_ProductText';
import { SepmraC_Pd_ProductTextValidationFunctio } from './SepmraC_Pd_ProductTextValidationFunctio';

/**
 * Type of the parameters to be passed to [[sepmraCPdProductImagePreparation]].
 */
export interface SepmraCPdProductImagePreparationParameters {
  /**
   * Product Image Draft Uuid.
   */
  productImageDraftUuid: string;
  /**
   * Active Product.
   */
  activeProduct: string;
  /**
   * Active Product Image.
   */
  activeProductImage: string;
}

/**
 * Sepmra C Pd Product Image Preparation. 
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sepmraCPdProductImagePreparation(parameters: SepmraCPdProductImagePreparationParameters): FunctionImportRequestBuilderV2<SepmraCPdProductImagePreparationParameters, Sepmra_C_Pd_ProductImage> {
  const params = {
    productImageDraftUuid: new FunctionImportParameter('ProductImageDraftUUID', 'Edm.Guid', parameters.productImageDraftUuid),
    activeProduct: new FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct),
    activeProductImage: new FunctionImportParameter('ActiveProductImage', 'Edm.String', parameters.activeProductImage)
  }

  return new FunctionImportRequestBuilderV2('post', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductImagePreparation', (data) => transformReturnValueForEntityV2(data, Sepmra_C_Pd_ProductImage), params);
}

/**
 * Type of the parameters to be passed to [[sepmraCPdProductImageValidation]].
 */
export interface SepmraCPdProductImageValidationParameters {
  /**
   * Product Image Draft Uuid.
   */
  productImageDraftUuid: string;
  /**
   * Active Product.
   */
  activeProduct: string;
  /**
   * Active Product Image.
   */
  activeProductImage: string;
}

/**
 * Sepmra C Pd Product Image Validation. 
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sepmraCPdProductImageValidation(parameters: SepmraCPdProductImageValidationParameters): FunctionImportRequestBuilderV2<SepmraCPdProductImageValidationParameters, SepmraC_Pd_ProductImageValidationFuncti> {
  const params = {
    productImageDraftUuid: new FunctionImportParameter('ProductImageDraftUUID', 'Edm.Guid', parameters.productImageDraftUuid),
    activeProduct: new FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct),
    activeProductImage: new FunctionImportParameter('ActiveProductImage', 'Edm.String', parameters.activeProductImage)
  }

  return new FunctionImportRequestBuilderV2('get', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductImageValidation', (data) => transformReturnValueForComplexTypeV2(data, (data) => deserializeComplexTypeV2(data, SepmraC_Pd_ProductImageValidationFuncti)), params);
}

/**
 * Type of the parameters to be passed to [[sepmraCPdProductActivation]].
 */
export interface SepmraCPdProductActivationParameters {
  /**
   * Product Draft Uuid.
   */
  productDraftUuid: string;
  /**
   * Active Product.
   */
  activeProduct: string;
}

/**
 * Sepmra C Pd Product Activation. 
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sepmraCPdProductActivation(parameters: SepmraCPdProductActivationParameters): FunctionImportRequestBuilderV2<SepmraCPdProductActivationParameters, Sepmra_C_Pd_Product> {
  const params = {
    productDraftUuid: new FunctionImportParameter('ProductDraftUUID', 'Edm.Guid', parameters.productDraftUuid),
    activeProduct: new FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct)
  }

  return new FunctionImportRequestBuilderV2('post', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductActivation', (data) => transformReturnValueForEntityV2(data, Sepmra_C_Pd_Product), params);
}

/**
 * Type of the parameters to be passed to [[sepmraCPdProductCopy]].
 */
export interface SepmraCPdProductCopyParameters {
  /**
   * Product Draft Uuid.
   */
  productDraftUuid: string;
  /**
   * Active Product.
   */
  activeProduct: string;
}

/**
 * Sepmra C Pd Product Copy. 
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sepmraCPdProductCopy(parameters: SepmraCPdProductCopyParameters): FunctionImportRequestBuilderV2<SepmraCPdProductCopyParameters, Sepmra_C_Pd_Product> {
  const params = {
    productDraftUuid: new FunctionImportParameter('ProductDraftUUID', 'Edm.Guid', parameters.productDraftUuid),
    activeProduct: new FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct)
  }

  return new FunctionImportRequestBuilderV2('post', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductCopy', (data) => transformReturnValueForEntityV2(data, Sepmra_C_Pd_Product), params);
}

/**
 * Type of the parameters to be passed to [[sepmraCPdProductCopywithparams]].
 */
export interface SepmraCPdProductCopywithparamsParameters {
  /**
   * Product Draft Uuid.
   */
  productDraftUuid: string;
  /**
   * Active Product.
   */
  activeProduct: string;
  /**
   * Supplier.
   */
  supplier: string;
}

/**
 * Sepmra C Pd Product Copywithparams. 
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sepmraCPdProductCopywithparams(parameters: SepmraCPdProductCopywithparamsParameters): FunctionImportRequestBuilderV2<SepmraCPdProductCopywithparamsParameters, Sepmra_C_Pd_Product> {
  const params = {
    productDraftUuid: new FunctionImportParameter('ProductDraftUUID', 'Edm.Guid', parameters.productDraftUuid),
    activeProduct: new FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct),
    supplier: new FunctionImportParameter('Supplier', 'Edm.String', parameters.supplier)
  }

  return new FunctionImportRequestBuilderV2('post', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductCopywithparams', (data) => transformReturnValueForEntityV2(data, Sepmra_C_Pd_Product), params);
}

/**
 * Type of the parameters to be passed to [[sepmraCPdProductDelete]].
 */
export interface SepmraCPdProductDeleteParameters {
  /**
   * Product Draft Uuid.
   */
  productDraftUuid: string;
  /**
   * Active Product.
   */
  activeProduct: string;
}

/**
 * Sepmra C Pd Product Delete. 
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sepmraCPdProductDelete(parameters: SepmraCPdProductDeleteParameters): FunctionImportRequestBuilderV2<SepmraCPdProductDeleteParameters, Sepmra_C_Pd_Product> {
  const params = {
    productDraftUuid: new FunctionImportParameter('ProductDraftUUID', 'Edm.Guid', parameters.productDraftUuid),
    activeProduct: new FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct)
  }

  return new FunctionImportRequestBuilderV2('post', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductDelete', (data) => transformReturnValueForEntityV2(data, Sepmra_C_Pd_Product), params);
}

/**
 * Type of the parameters to be passed to [[sepmraCPdProductEdit]].
 */
export interface SepmraCPdProductEditParameters {
  /**
   * Product Draft Uuid.
   */
  productDraftUuid: string;
  /**
   * Active Product.
   */
  activeProduct: string;
}

/**
 * Sepmra C Pd Product Edit. 
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sepmraCPdProductEdit(parameters: SepmraCPdProductEditParameters): FunctionImportRequestBuilderV2<SepmraCPdProductEditParameters, Sepmra_C_Pd_Product> {
  const params = {
    productDraftUuid: new FunctionImportParameter('ProductDraftUUID', 'Edm.Guid', parameters.productDraftUuid),
    activeProduct: new FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct)
  }

  return new FunctionImportRequestBuilderV2('post', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductEdit', (data) => transformReturnValueForEntityV2(data, Sepmra_C_Pd_Product), params);
}

/**
 * Type of the parameters to be passed to [[sepmraCPdProductPreparation]].
 */
export interface SepmraCPdProductPreparationParameters {
  /**
   * Product Draft Uuid.
   */
  productDraftUuid: string;
  /**
   * Active Product.
   */
  activeProduct: string;
}

/**
 * Sepmra C Pd Product Preparation. 
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sepmraCPdProductPreparation(parameters: SepmraCPdProductPreparationParameters): FunctionImportRequestBuilderV2<SepmraCPdProductPreparationParameters, Sepmra_C_Pd_Product> {
  const params = {
    productDraftUuid: new FunctionImportParameter('ProductDraftUUID', 'Edm.Guid', parameters.productDraftUuid),
    activeProduct: new FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct)
  }

  return new FunctionImportRequestBuilderV2('post', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductPreparation', (data) => transformReturnValueForEntityV2(data, Sepmra_C_Pd_Product), params);
}

/**
 * Type of the parameters to be passed to [[sepmraCPdProductValidation]].
 */
export interface SepmraCPdProductValidationParameters {
  /**
   * Product Draft Uuid.
   */
  productDraftUuid: string;
  /**
   * Active Product.
   */
  activeProduct: string;
}

/**
 * Sepmra C Pd Product Validation. 
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sepmraCPdProductValidation(parameters: SepmraCPdProductValidationParameters): FunctionImportRequestBuilderV2<SepmraCPdProductValidationParameters, SepmraC_Pd_ProductValidationFunction> {
  const params = {
    productDraftUuid: new FunctionImportParameter('ProductDraftUUID', 'Edm.Guid', parameters.productDraftUuid),
    activeProduct: new FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct)
  }

  return new FunctionImportRequestBuilderV2('get', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductValidation', (data) => transformReturnValueForComplexTypeV2(data, (data) => deserializeComplexTypeV2(data, SepmraC_Pd_ProductValidationFunction)), params);
}

/**
 * Type of the parameters to be passed to [[sepmraCPdProductTextPreparation]].
 */
export interface SepmraCPdProductTextPreparationParameters {
  /**
   * Product Text Draft Uuid.
   */
  productTextDraftUuid: string;
  /**
   * Active Product.
   */
  activeProduct: string;
  /**
   * Active Language.
   */
  activeLanguage: string;
}

/**
 * Sepmra C Pd Product Text Preparation. 
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sepmraCPdProductTextPreparation(parameters: SepmraCPdProductTextPreparationParameters): FunctionImportRequestBuilderV2<SepmraCPdProductTextPreparationParameters, Sepmra_C_Pd_ProductText> {
  const params = {
    productTextDraftUuid: new FunctionImportParameter('ProductTextDraftUUID', 'Edm.Guid', parameters.productTextDraftUuid),
    activeProduct: new FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct),
    activeLanguage: new FunctionImportParameter('ActiveLanguage', 'Edm.String', parameters.activeLanguage)
  }

  return new FunctionImportRequestBuilderV2('post', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductTextPreparation', (data) => transformReturnValueForEntityV2(data, Sepmra_C_Pd_ProductText), params);
}

/**
 * Type of the parameters to be passed to [[sepmraCPdProductTextValidation]].
 */
export interface SepmraCPdProductTextValidationParameters {
  /**
   * Product Text Draft Uuid.
   */
  productTextDraftUuid: string;
  /**
   * Active Product.
   */
  activeProduct: string;
  /**
   * Active Language.
   */
  activeLanguage: string;
}

/**
 * Sepmra C Pd Product Text Validation. 
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sepmraCPdProductTextValidation(parameters: SepmraCPdProductTextValidationParameters): FunctionImportRequestBuilderV2<SepmraCPdProductTextValidationParameters, SepmraC_Pd_ProductTextValidationFunctio> {
  const params = {
    productTextDraftUuid: new FunctionImportParameter('ProductTextDraftUUID', 'Edm.Guid', parameters.productTextDraftUuid),
    activeProduct: new FunctionImportParameter('ActiveProduct', 'Edm.String', parameters.activeProduct),
    activeLanguage: new FunctionImportParameter('ActiveLanguage', 'Edm.String', parameters.activeLanguage)
  }

  return new FunctionImportRequestBuilderV2('get', '/sap/opu/odata/sap/SEPMRA_PROD_MAN', 'SEPMRA_C_PD_ProductTextValidation', (data) => transformReturnValueForComplexTypeV2(data, (data) => deserializeComplexTypeV2(data, SepmraC_Pd_ProductTextValidationFunctio)), params);
}

export const functionImports = {
  sepmraCPdProductImagePreparation,
  sepmraCPdProductImageValidation,
  sepmraCPdProductActivation,
  sepmraCPdProductCopy,
  sepmraCPdProductCopywithparams,
  sepmraCPdProductDelete,
  sepmraCPdProductEdit,
  sepmraCPdProductPreparation,
  sepmraCPdProductValidation,
  sepmraCPdProductTextPreparation,
  sepmraCPdProductTextValidation
};
