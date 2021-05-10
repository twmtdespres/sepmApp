/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepmra_I_ProductSalesData } from './Sepmra_I_ProductSalesData';

/**
 * Request builder class for operations supported on the [[Sepmra_I_ProductSalesData]] entity.
 */
export class Sepmra_I_ProductSalesDataRequestBuilder extends RequestBuilder<Sepmra_I_ProductSalesData> {
  /**
   * Returns a request builder for retrieving one `Sepmra_I_ProductSalesData` entity based on its keys.
   * @param product Key property. See [[Sepmra_I_ProductSalesData.product]].
   * @param deliveryDateTime Key property. See [[Sepmra_I_ProductSalesData.deliveryDateTime]].
   * @returns A request builder for creating requests to retrieve one `Sepmra_I_ProductSalesData` entity based on its keys.
   */
  getByKey(product: string, deliveryDateTime: Moment): GetByKeyRequestBuilderV2<Sepmra_I_ProductSalesData> {
    return new GetByKeyRequestBuilderV2(Sepmra_I_ProductSalesData, {
      Product: product,
      DeliveryDateTime: deliveryDateTime
    });
  }

  /**
   * Returns a request builder for querying all `Sepmra_I_ProductSalesData` entities.
   * @returns A request builder for creating requests to retrieve all `Sepmra_I_ProductSalesData` entities.
   */
  getAll(): GetAllRequestBuilderV2<Sepmra_I_ProductSalesData> {
    return new GetAllRequestBuilderV2(Sepmra_I_ProductSalesData);
  }
}
