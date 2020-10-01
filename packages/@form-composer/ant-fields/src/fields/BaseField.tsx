import React from "react";
import {FieldRenderProps} from "react-final-form";
import {Field, Form} from "@form-composer/core";
import {Form as AntForm} from "antd";

export interface BaseFieldProps extends FieldRenderProps<any, HTMLElement> {
    field: Field
    form: Form
    itemLayout: object
    noLabel?: boolean
    help?: string | React.ReactNode
}

const getError = (error: string | object) => {
    if (!error) return error
    if (typeof error === 'string') return error;
    return Object.values(error).join('')
}

export const BaseField = ({field, meta, help, itemLayout, noLabel, children}: BaseFieldProps) => {
    const hasError = meta.touched && meta.error;
    return (
        <>
            {hasError && !noLabel && (
                <AntForm.Item key={field.name} {...itemLayout} label={field.label} help={getError(meta.error)}
                              validateStatus="error">
                    {children}
                </AntForm.Item>
            )}
            {hasError && noLabel && (
                <AntForm.Item key={field.name} {...itemLayout} help={getError(meta.error)}
                              validateStatus="error">
                    {children}
                </AntForm.Item>
            )}
            {!hasError && !noLabel && (
                <AntForm.Item key={field.name} {...itemLayout} label={field.label} help={help ? help : field.description}
                              validateStatus="validating">
                    {children}
                </AntForm.Item>
            )}
            {!hasError && noLabel && (
                <AntForm.Item key={field.name} {...itemLayout} help={help ? help : field.description}
                              validateStatus="validating">
                    {children}
                </AntForm.Item>
            )}
        </>
    )
}