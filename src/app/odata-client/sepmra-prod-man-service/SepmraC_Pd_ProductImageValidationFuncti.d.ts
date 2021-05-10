import { ComplexTypeBooleanPropertyField, ComplexTypeField, ConstructorOrField, EntityV2, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * SepmraC_Pd_ProductImageValidationFuncti
 */
export interface SepmraC_Pd_ProductImageValidationFuncti {
    /**
     * Est valide.
     */
    isValid: boolean;
}
/**
 * @deprecated Since v1.6.0. Use [[SepmraC_Pd_ProductImageValidationFuncti.build]] instead.
 */
export declare function createSepmraC_Pd_ProductImageValidationFuncti(json: any): SepmraC_Pd_ProductImageValidationFuncti;
/**
 * SepmraC_Pd_ProductImageValidationFunctiField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SepmraC_Pd_ProductImageValidationFunctiField<EntityT extends EntityV2> extends ComplexTypeField<EntityT, SepmraC_Pd_ProductImageValidationFuncti> {
    /**
     * Representation of the [[SepmraC_Pd_ProductImageValidationFuncti.isValid]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isValid: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Creates an instance of SepmraC_Pd_ProductImageValidationFunctiField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace SepmraC_Pd_ProductImageValidationFuncti {
    /**
     * Metadata information on all properties of the `SepmraC_Pd_ProductImageValidationFuncti` complex type.
     */
    const _propertyMetadata: PropertyMetadata<SepmraC_Pd_ProductImageValidationFuncti>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): SepmraC_Pd_ProductImageValidationFuncti;
}
//# sourceMappingURL=SepmraC_Pd_ProductImageValidationFuncti.d.ts.map