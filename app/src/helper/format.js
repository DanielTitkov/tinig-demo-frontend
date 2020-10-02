import appConfig from "../config/config";

export const formatSlug = (s) => {
    return s.toLowerCase().replace(/[\W_]+/g, "");
};

export const buildTaskParams = (formData) => {
    if (formData.type === appConfig.tasks.types.RANDOM) {
        return {
            [formData.type]: {
                min: parseInt(formData.paramsRandomMin, 10),
                max: parseInt(formData.paramsRandomMax, 10),
            },
        };
    }
};