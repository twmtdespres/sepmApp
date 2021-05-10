/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepmra_I_ContactPerson } from './Sepmra_I_ContactPerson';

/**
 * Request builder class for operations supported on the [[Sepmra_I_ContactPerson]] entity.
 */
export class Sepmra_I_ContactPersonRequestBuilder extends RequestBuilder<Sepmra_I_ContactPerson> {
  /**
   * Returns a request builder for retrieving one `Sepmra_I_ContactPerson` entity based on its keys.
   * @param contactPersonUuid Key property. See [[Sepmra_I_ContactPerson.contactPersonUuid]].
   * @returns A request builder for creating requests to retrieve one `Sepmra_I_ContactPerson` entity based on its keys.
   */
  getByKey(contactPersonUuid: string): GetByKeyRequestBuilderV2<Sepmra_I_ContactPerson> {
    return new GetByKeyRequestBuilderV2(Sepmra_I_ContactPerson, { ContactPersonUUID: contactPersonUuid });
  }

  /**
   * Returns a request builder for querying all `Sepmra_I_ContactPerson` entities.
   * @returns A request builder for creating requests to retrieve all `Sepmra_I_ContactPerson` entities.
   */
  getAll(): GetAllRequestBuilderV2<Sepmra_I_ContactPerson> {
    return new GetAllRequestBuilderV2(Sepmra_I_ContactPerson);
  }
}
