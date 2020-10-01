export const formatSlug = (s) => {
    return s.toLowerCase().replace(/[\W_]+/g, "");
};
