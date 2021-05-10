/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ConstructorOrField, EntityV2, FieldType, PropertyMetadata, deserializeComplexTypeV2 } from '@sap-cloud-sdk/core';

/**
 * SepmraC_Pd_ProductValidationFunction
 */
export interface SepmraC_Pd_ProductValidationFunction {
  /**
   * Est valide.
   */
  isValid: boolean;
}

/**
 * @deprecated Since v1.6.0. Use [[SepmraC_Pd_ProductValidationFunction.build]] instead.
 */
export function createSepmraC_Pd_ProductValidationFunction(json: any): SepmraC_Pd_ProductValidationFunction {
  return SepmraC_Pd_ProductValidationFunction.build(json);
}

/**
 * SepmraC_Pd_ProductValidationFunctionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SepmraC_Pd_ProductValidationFunctionField<EntityT extends EntityV2> extends ComplexTypeField<EntityT, SepmraC_Pd_ProductValidationFunction> {
  /**
   * Representation of the [[SepmraC_Pd_ProductValidationFunction.isValid]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isValid: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('IsValid', this, 'Edm.Boolean');

  /**
   * Creates an instance of SepmraC_Pd_ProductValidationFunctionField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SepmraC_Pd_ProductValidationFunction);
  }
}

export namespace SepmraC_Pd_ProductValidationFunction {
  /**
   * Metadata information on all properties of the `SepmraC_Pd_ProductValidationFunction` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SepmraC_Pd_ProductValidationFunction>[] = [{
    originalName: 'IsValid',
    name: 'isValid',
    type: 'Edm.Boolean',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): SepmraC_Pd_ProductValidationFunction {
    return deserializeComplexTypeV2(json, SepmraC_Pd_ProductValidationFunction);
  }
}
