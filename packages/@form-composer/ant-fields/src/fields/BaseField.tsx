import React from "react";
import {FieldRenderProps} from "react-final-form";
import {Field, Form} from "@form-composer/core";
import {Form as AntForm} from "antd";

export interface BaseFieldProps extends FieldRenderProps<any, HTMLElement> {
    field: Field
    form: Form
    itemLayout: object
    help?: string | React.ReactNode
}

export const BaseField = ({field, meta, help, itemLayout, children}: BaseFieldProps) => {
    const hasError = meta.touched && meta.error;
    return (
        <>
            {hasError && (
                <AntForm.Item key={field.name} {...itemLayout} hasFeedback label={field.label} help={meta.error}
                              validateStatus="error">
                    {children}
                </AntForm.Item>
            )}
            {!hasError && (
                <AntForm.Item key={field.name} {...itemLayout} label={field.label} help={help ? help : field.description}
                              validateStatus="validating">
                    {children}
                </AntForm.Item>
            )}
        </>
    )
}
