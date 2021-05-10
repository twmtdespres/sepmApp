/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepmra_C_Pd_Employee } from './Sepmra_C_Pd_Employee';

/**
 * Request builder class for operations supported on the [[Sepmra_C_Pd_Employee]] entity.
 */
export class Sepmra_C_Pd_EmployeeRequestBuilder extends RequestBuilder<Sepmra_C_Pd_Employee> {
  /**
   * Returns a request builder for retrieving one `Sepmra_C_Pd_Employee` entity based on its keys.
   * @param employeeUuid Key property. See [[Sepmra_C_Pd_Employee.employeeUuid]].
   * @returns A request builder for creating requests to retrieve one `Sepmra_C_Pd_Employee` entity based on its keys.
   */
  getByKey(employeeUuid: string): GetByKeyRequestBuilderV2<Sepmra_C_Pd_Employee> {
    return new GetByKeyRequestBuilderV2(Sepmra_C_Pd_Employee, { EmployeeUUID: employeeUuid });
  }

  /**
   * Returns a request builder for querying all `Sepmra_C_Pd_Employee` entities.
   * @returns A request builder for creating requests to retrieve all `Sepmra_C_Pd_Employee` entities.
   */
  getAll(): GetAllRequestBuilderV2<Sepmra_C_Pd_Employee> {
    return new GetAllRequestBuilderV2(Sepmra_C_Pd_Employee);
  }
}
