# SEPM App

## Endpoint

https://sesame2-ghd.epfl.ch/sap/opu/odata/sap/SEPMRA_PROD_MAN/

## Installation

https://developers.sap.com/tutorials/cloudsdk-js-generator.html
https://sap.github.io/cloud-sdk/docs/js/guides/sdk-in-browser

## tsconfig.json

Add :
`"allowSyntheticDefaultImports": true`
`"emitDecoratorMetadata": false`

## Run config (CORS)

Add :
`"runtimeArgs": [`
`"--disable-web-security"`
`]`
