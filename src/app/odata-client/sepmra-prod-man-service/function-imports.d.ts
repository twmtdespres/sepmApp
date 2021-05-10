import { FunctionImportRequestBuilderV2 } from '@sap-cloud-sdk/core';
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
export declare function sepmraCPdProductImagePreparation(parameters: SepmraCPdProductImagePreparationParameters): FunctionImportRequestBuilderV2<SepmraCPdProductImagePreparationParameters, Sepmra_C_Pd_ProductImage>;
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
export declare function sepmraCPdProductImageValidation(parameters: SepmraCPdProductImageValidationParameters): FunctionImportRequestBuilderV2<SepmraCPdProductImageValidationParameters, SepmraC_Pd_ProductImageValidationFuncti>;
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
export declare function sepmraCPdProductActivation(parameters: SepmraCPdProductActivationParameters): FunctionImportRequestBuilderV2<SepmraCPdProductActivationParameters, Sepmra_C_Pd_Product>;
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
export declare function sepmraCPdProductCopy(parameters: SepmraCPdProductCopyParameters): FunctionImportRequestBuilderV2<SepmraCPdProductCopyParameters, Sepmra_C_Pd_Product>;
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
export declare function sepmraCPdProductCopywithparams(parameters: SepmraCPdProductCopywithparamsParameters): FunctionImportRequestBuilderV2<SepmraCPdProductCopywithparamsParameters, Sepmra_C_Pd_Product>;
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
export declare function sepmraCPdProductDelete(parameters: SepmraCPdProductDeleteParameters): FunctionImportRequestBuilderV2<SepmraCPdProductDeleteParameters, Sepmra_C_Pd_Product>;
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
export declare function sepmraCPdProductEdit(parameters: SepmraCPdProductEditParameters): FunctionImportRequestBuilderV2<SepmraCPdProductEditParameters, Sepmra_C_Pd_Product>;
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
export declare function sepmraCPdProductPreparation(parameters: SepmraCPdProductPreparationParameters): FunctionImportRequestBuilderV2<SepmraCPdProductPreparationParameters, Sepmra_C_Pd_Product>;
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
export declare function sepmraCPdProductValidation(parameters: SepmraCPdProductValidationParameters): FunctionImportRequestBuilderV2<SepmraCPdProductValidationParameters, SepmraC_Pd_ProductValidationFunction>;
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
export declare function sepmraCPdProductTextPreparation(parameters: SepmraCPdProductTextPreparationParameters): FunctionImportRequestBuilderV2<SepmraCPdProductTextPreparationParameters, Sepmra_C_Pd_ProductText>;
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
export declare function sepmraCPdProductTextValidation(parameters: SepmraCPdProductTextValidationParameters): FunctionImportRequestBuilderV2<SepmraCPdProductTextValidationParameters, SepmraC_Pd_ProductTextValidationFunctio>;
export declare const functionImports: {
    sepmraCPdProductImagePreparation: typeof sepmraCPdProductImagePreparation;
    sepmraCPdProductImageValidation: typeof sepmraCPdProductImageValidation;
    sepmraCPdProductActivation: typeof sepmraCPdProductActivation;
    sepmraCPdProductCopy: typeof sepmraCPdProductCopy;
    sepmraCPdProductCopywithparams: typeof sepmraCPdProductCopywithparams;
    sepmraCPdProductDelete: typeof sepmraCPdProductDelete;
    sepmraCPdProductEdit: typeof sepmraCPdProductEdit;
    sepmraCPdProductPreparation: typeof sepmraCPdProductPreparation;
    sepmraCPdProductValidation: typeof sepmraCPdProductValidation;
    sepmraCPdProductTextPreparation: typeof sepmraCPdProductTextPreparation;
    sepmraCPdProductTextValidation: typeof sepmraCPdProductTextValidation;
};
//# sourceMappingURL=function-imports.d.ts.map