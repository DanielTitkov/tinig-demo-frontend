import React, { useState } from "react";
import { Box, Button, Form, FormField, Select, TextArea, TextInput } from "grommet";
import { validateNumberInBounds } from "../../../helper/validate";
import appConfig from "../../../config/config";
import { formatSlug } from "../../../helper/format";

const CreateTaskBlock = () => {
    const [value, setValue] = useState({});

    const handleUpdateSlug = (e) => {
        const slug = formatSlug(e.target.value);
        setValue({
            ...value,
            slug: slug,
        });
    };

    return (
        <Form
            value={value}
            validate="blur"
            onChange={(nextValue) => setValue(nextValue)}
            onReset={() => setValue({})}
            onSubmit={({ value }) => {
                console.log("CREATE TASK", value);
            }}
        >
            <FormField name="title" htmlfor="title-input-id" label="Task title (unique)" required>
                <TextInput id="title-input-id" name="title" onChange={handleUpdateSlug} />
            </FormField>
            <FormField name="slug" htmlfor="slug-input-id" label="Slug (unique)" required>
                <TextInput id="slug-input-id" name="slug" />
            </FormField>
            <FormField
                name="description"
                htmlfor="description-input-id"
                label="Description"
                required
            >
                <TextArea id="description-input-id" name="description" />
            </FormField>
            <FormField name="type" htmlfor="type-input-id" label="Task type">
                <Select name="type" id="type-input-id" options={[appConfig.tasks.types.RANDOM]} />
            </FormField>
            {value && value.type === appConfig.tasks.types.RANDOM ? (
                <>
                    <FormField
                        name="paramsRandomMin"
                        htmlfor="paramsRandomMin-input-id"
                        label={`Min value (${appConfig.tasks.params.random.MIN_MIN}-${appConfig.tasks.params.random.MIN_MAX})`}
                        required
                        validate={[
                            { regexp: /^[0-9]/i },
                            (v) =>
                                validateNumberInBounds(
                                    parseInt(v, 10),
                                    appConfig.tasks.params.random.MIN_MIN,
                                    appConfig.tasks.params.random.MIN_MAX,
                                ),
                        ]}
                    >
                        <TextInput name="paramsRandomMin" id="paramsRandomMin-input-id" />
                    </FormField>
                    <FormField
                        name="paramsRandomMax"
                        htmlfor="paramsRandomMax-input-id"
                        label={`Max value (${appConfig.tasks.params.random.MAX_MIN}-${appConfig.tasks.params.random.MAX_MAX})`}
                        required
                        validate={[
                            { regexp: /^[0-9]/i },
                            (v) =>
                                validateNumberInBounds(
                                    parseInt(v, 10),
                                    appConfig.tasks.params.random.MAX_MIN,
                                    appConfig.tasks.params.random.MAX_MAX,
                                ),
                        ]}
                    >
                        <TextInput name="paramsRandomMax" id="paramsRandomMax-input-id" />
                    </FormField>
                </>
            ) : null}
            <Box direction="row" gap="medium">
                <Button type="submit" primary label="Create task" />
                <Button type="reset" label="Reset" />
            </Box>
        </Form>
    );
};

export default CreateTaskBlock;
