import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class AccountCreator extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;
    fields = [NAME_FIELD, REVENUE_FIELD, INDUSTRY_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}

/*
 * Línea 3 a 6: Al inicio del archivo, importamos referencias al objeto Cuenta y sus campos. La referencia a objetos y campos de este modo garantiza la integridad referencial. Salesforce verifica que el objeto y los campos existen, evita su eliminación y garantiza que estén incluidos en paquetes y conjuntos de cambios que hacen referencia al componente. La importación de referencias de objeto y campo garantiza que su código de componente aún funciona si se cambio el nombre del objeto o los campos.
 * Línea 10: Definimos el controlador de eventos handleSuccess para el evento success. handleSuccess se ejecuta cuando se realiza la operación de guardado con éxito.
 * Línea 11 a 17: Mostramos un mensaje emergente desencadenando ShowToastEvent, en que event.detail.id es una referencia a la propiedad id del registro recién creado.
 */