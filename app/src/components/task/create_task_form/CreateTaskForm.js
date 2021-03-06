import React, { useEffect, useState } from "react";
import { Box, Button, Form, FormField, Select, TextArea, TextInput } from "grommet";
import { validateNumberInBounds } from "../../../helper/validate";
import appConfig from "../../../config/config";
import { buildTaskParams, formatSlug } from "../../../helper/format";
import { createTask } from "../../../store/actions/taskActions";
import { useDispatch } from "react-redux";

const CreateTaskForm = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState({});

    const handleCreate = ({ value }) => {
        const request = {
            title: value.title,
            slug: value.slug,
            description: value.description,
            type: value.type,
            params: buildTaskParams(value),
        };
        dispatch(createTask(request));
    };

    const title = value.title || "";
    useEffect(() => {
        const handleUpdateSlug = (title) => {
            const slug = formatSlug(title || "");
            setValue((prev) => ({
                ...prev,
                slug: slug,
            }));
        };
        handleUpdateSlug(title);
    }, [title]);

    return (
        <Form
            value={value}
            validate="blur"
            onChange={(nextValue) => setValue(nextValue)}
            onReset={() => setValue({})}
            onSubmit={handleCreate}
        >
            <FormField name="title" htmlfor="title-input-id" label="Task title (unique)" required>
                <TextInput id="title-input-id" name="title" />
            </FormField>
            <FormField name="slug" htmlfor="slug-input-id" label="Slug (unique)" required>
                <TextInput id="slug-input-id" name="slug" />
            </FormField>
            <FormField name="description" htmlfor="description-input-id" label="Description">
                <TextArea id="description-input-id" name="description" />
            </FormField>
            <FormField name="type" htmlfor="type-input-id" label="Task type" required>
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

export default CreateTaskForm;
